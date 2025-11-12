#!/usr/bin/env bash
##############################################################################
# Git Subtree Split Script
# Extracts this presentation subfolder into a new standalone repository
#
# Usage: ./scripts/split-to-new-repo.sh <NEW_REMOTE_URL>
# Example: ./scripts/split-to-new-repo.sh git@github.com:org/new-presentation.git
##############################################################################

set -euo pipefail

# Configuration
SUBDIR="presentations/public-sector-ai-service-hub"
TEMP_BRANCH="temp-presentation-split"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check arguments
if [ $# -eq 0 ]; then
    log_error "Usage: $0 <NEW_REMOTE_URL>"
    echo ""
    echo "Example:"
    echo "  $0 git@github.com:a1-telekom/public-sector-ai-hub.git"
    echo ""
    echo "This script will:"
    echo "  1. Create a temporary branch with only this subfolder's history"
    echo "  2. Push that branch to the new remote repository"
    echo "  3. Clean up the temporary branch"
    exit 1
fi

NEW_REMOTE="$1"

# Banner
echo ""
echo "=========================================================================="
echo "🔀 Git Subtree Split - Extract Presentation to New Repository"
echo "=========================================================================="
echo ""
log_info "Subfolder: ${SUBDIR}"
log_info "New Remote: ${NEW_REMOTE}"
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    log_error "Not a git repository!"
    exit 1
fi

# Check if subfolder exists
if [ ! -d "$SUBDIR" ]; then
    log_error "Subfolder '$SUBDIR' does not exist!"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    log_warning "You have uncommitted changes. Please commit or stash them first."
    git status --short
    exit 1
fi

# Confirm action
echo ""
log_warning "This will create a new repository with ONLY the history of:"
echo "  → $SUBDIR"
echo ""
read -p "Continue? (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    log_info "Aborted by user."
    exit 0
fi

# Step 1: Split subfolder into temp branch
echo ""
log_info "Step 1: Splitting subfolder history into temporary branch..."
log_info "This may take a few minutes depending on repository size..."

if git subtree split --prefix="$SUBDIR" -b "$TEMP_BRANCH"; then
    log_success "Split complete! Temporary branch '$TEMP_BRANCH' created."
else
    log_error "Failed to split subtree!"
    exit 1
fi

# Step 2: Push to new remote
echo ""
log_info "Step 2: Pushing to new remote repository..."
log_info "Target: ${NEW_REMOTE}"

if git push "$NEW_REMOTE" "${TEMP_BRANCH}:main" --force; then
    log_success "Successfully pushed to new repository!"
else
    log_error "Failed to push to remote!"
    log_warning "Cleaning up temporary branch..."
    git branch -D "$TEMP_BRANCH" 2>/dev/null || true
    exit 1
fi

# Step 3: Clean up temporary branch
echo ""
log_info "Step 3: Cleaning up temporary branch..."

if git branch -D "$TEMP_BRANCH"; then
    log_success "Temporary branch deleted."
else
    log_warning "Could not delete temporary branch. You may need to delete it manually:"
    echo "  git branch -D $TEMP_BRANCH"
fi

# Success message
echo ""
echo "=========================================================================="
log_success "Repository split complete!"
echo "=========================================================================="
echo ""
log_info "Your new repository is available at:"
echo "  ${NEW_REMOTE}"
echo ""
log_info "To clone the new repository:"
echo "  git clone ${NEW_REMOTE}"
echo ""
log_info "Next steps:"
echo "  1. Clone the new repository"
echo "  2. Run 'npm install' to install dependencies"
echo "  3. Run 'npm run dev' to start development server"
echo ""
echo "=========================================================================="
echo ""

# Optional: Open in browser if it's a GitHub URL
if [[ "$NEW_REMOTE" =~ github\.com ]]; then
    GITHUB_URL=$(echo "$NEW_REMOTE" | sed 's/git@github.com:/https:\/\/github.com\//' | sed 's/\.git$//')
    log_info "GitHub URL: $GITHUB_URL"
fi

exit 0
