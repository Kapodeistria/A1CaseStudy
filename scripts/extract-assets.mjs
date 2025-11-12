#!/usr/bin/env node
/**
 * Asset Extraction Script
 * Searches parent repo for reusable assets and copies them to this presentation
 * Usage: npm run extract
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const CONFIG = {
  rootDir: path.resolve(__dirname, '../../..'), // Parent repo root
  targetDir: path.resolve(__dirname, '../src/content'),

  // Patterns to search for
  patterns: {
    images: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp'],
    markdown: ['**/*.md', '**/*.mdx'],
    diagrams: ['**/diagrams/**/*.svg', '**/architecture*.svg', '**/system*.svg'],
    data: ['**/*.json', '**/*.yaml', '**/*.yml']
  },

  // Directories to exclude
  exclude: [
    'node_modules',
    '.git',
    'dist',
    'build',
    '.vscode',
    '.azure',
    'presentations/public-sector-ai-service-hub' // Don't copy from self
  ],

  // Target directories
  targets: {
    images: 'images',
    diagrams: 'images/diagrams',
    markdown: '../slides/extracted',
    data: 'data'
  }
}

// Utility: Check if path should be excluded
const shouldExclude = (filePath) => {
  return CONFIG.exclude.some(pattern => filePath.includes(pattern))
}

// Utility: Get all files matching pattern recursively
async function findFiles(dir, extensions, results = []) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (shouldExclude(fullPath)) continue

      if (entry.isDirectory()) {
        await findFiles(fullPath, extensions, results)
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (extensions.includes(ext)) {
          results.push(fullPath)
        }
      }
    }
  } catch (error) {
    // Ignore permission errors
    if (error.code !== 'EACCES' && error.code !== 'EPERM') {
      console.warn(`Warning: Could not read directory ${dir}:`, error.message)
    }
  }

  return results
}

// Utility: Copy file
async function copyFile(src, dest) {
  try {
    await fs.mkdir(path.dirname(dest), { recursive: true })
    await fs.copyFile(src, dest)
    return true
  } catch (error) {
    console.error(`Error copying ${src} to ${dest}:`, error.message)
    return false
  }
}

// Main extraction function
async function extractAssets() {
  console.log('🔍 Searching for reusable assets in parent repository...\n')
  console.log(`Root directory: ${CONFIG.rootDir}`)
  console.log(`Target directory: ${CONFIG.targetDir}\n`)

  const results = {
    images: 0,
    diagrams: 0,
    markdown: 0,
    data: 0
  }

  // Extract images
  console.log('📷 Extracting images...')
  const imageExts = ['.png', '.jpg', '.jpeg', '.svg', '.webp']
  const imageFiles = await findFiles(CONFIG.rootDir, imageExts)

  for (const file of imageFiles) {
    const relativePath = path.relative(CONFIG.rootDir, file)

    // Separate diagrams from regular images
    if (relativePath.includes('diagram') || relativePath.includes('architecture') || relativePath.includes('system')) {
      const destPath = path.join(CONFIG.targetDir, CONFIG.targets.diagrams, path.basename(file))
      if (await copyFile(file, destPath)) {
        console.log(`  ✓ ${relativePath} → ${path.relative(CONFIG.targetDir, destPath)}`)
        results.diagrams++
      }
    } else {
      const destPath = path.join(CONFIG.targetDir, CONFIG.targets.images, path.basename(file))
      if (await copyFile(file, destPath)) {
        console.log(`  ✓ ${relativePath} → ${path.relative(CONFIG.targetDir, destPath)}`)
        results.images++
      }
    }
  }

  // Extract markdown files
  console.log('\n📝 Extracting markdown files...')
  const markdownFiles = await findFiles(CONFIG.rootDir, ['.md', '.mdx'])

  for (const file of markdownFiles) {
    const relativePath = path.relative(CONFIG.rootDir, file)
    const destPath = path.join(CONFIG.targetDir, CONFIG.targets.markdown, path.basename(file))

    if (await copyFile(file, destPath)) {
      console.log(`  ✓ ${relativePath} → ${path.relative(CONFIG.targetDir, destPath)}`)
      results.markdown++
    }
  }

  // Extract data files (JSON/YAML)
  console.log('\n📊 Extracting data files...')
  const dataFiles = await findFiles(CONFIG.rootDir, ['.json', '.yaml', '.yml'])

  for (const file of dataFiles) {
    const relativePath = path.relative(CONFIG.rootDir, file)

    // Skip package.json, tsconfig.json, etc.
    if (['package.json', 'tsconfig.json', 'package-lock.json'].includes(path.basename(file))) {
      continue
    }

    const destPath = path.join(CONFIG.targetDir, CONFIG.targets.data, path.basename(file))

    if (await copyFile(file, destPath)) {
      console.log(`  ✓ ${relativePath} → ${path.relative(CONFIG.targetDir, destPath)}`)
      results.data++
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('✅ Asset extraction complete!\n')
  console.log('Summary:')
  console.log(`  Images:   ${results.images} files`)
  console.log(`  Diagrams: ${results.diagrams} files`)
  console.log(`  Markdown: ${results.markdown} files`)
  console.log(`  Data:     ${results.data} files`)
  console.log(`  Total:    ${Object.values(results).reduce((a, b) => a + b, 0)} files`)
  console.log('='.repeat(60))

  // Generate asset manifest
  const manifest = {
    extractedAt: new Date().toISOString(),
    rootDir: CONFIG.rootDir,
    results
  }

  const manifestPath = path.join(CONFIG.targetDir, 'asset-manifest.json')
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`\n📋 Asset manifest saved to: ${manifestPath}`)
}

// Run extraction
extractAssets().catch(error => {
  console.error('❌ Extraction failed:', error)
  process.exit(1)
})
