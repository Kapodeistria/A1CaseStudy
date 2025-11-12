#!/usr/bin/env node
/**
 * Build and Serve Script
 * Builds the presentation and serves it locally
 * Usage: npm run serve
 */

import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// Utility: Run command
function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`\n🚀 Running: ${command} ${args.join(' ')}\n`)

    const proc = spawn(command, args, {
      cwd: rootDir,
      stdio: 'inherit',
      shell: true,
      ...options
    })

    proc.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Command failed with exit code ${code}`))
      } else {
        resolve()
      }
    })

    proc.on('error', (error) => {
      reject(error)
    })
  })
}

// Main function
async function buildAndServe() {
  console.log('=' .repeat(60))
  console.log('🎨 Public Sector AI Service Hub - Build & Serve')
  console.log('='.repeat(60))

  try {
    // Step 1: Type check
    console.log('\n📋 Step 1: Type checking...')
    await runCommand('npm', ['run', 'type-check'])
    console.log('✓ Type check passed')

    // Step 2: Build
    console.log('\n🔨 Step 2: Building production bundle...')
    await runCommand('npm', ['run', 'build'])
    console.log('✓ Build complete')

    // Step 3: Serve
    console.log('\n🌐 Step 3: Starting preview server...')
    console.log('\n' + '='.repeat(60))
    console.log('✅ Build successful! Starting preview server...')
    console.log('='.repeat(60) + '\n')

    // This will run indefinitely
    await runCommand('npm', ['run', 'preview'])

  } catch (error) {
    console.error('\n❌ Build or serve failed:', error.message)
    process.exit(1)
  }
}

// Run
buildAndServe()
