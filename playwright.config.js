/* global process */
import { defineConfig } from '@playwright/test'

const isCI = !!process.env.CI

export default defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  use: {
    // Uses local Chrome on your machine, but default Chromium in GitHub Actions
    channel: isCI ? undefined : 'chrome',
    baseURL: isCI ? 'http://localhost:5001': 'http://localhost:8080',
    headless: true
  },
  webServer: {
    command: isCI ? 'npm run start-prod' : 'npm run start:no-open',
    url: process.env.CI ? 'http://localhost:5001': 'http://localhost:8080',
    timeout: 120 * 1000,
    reuseExistingServer: isCI,
  },
})