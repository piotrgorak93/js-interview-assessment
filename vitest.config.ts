import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      provider: playwright(),
      screenshotFailures: false,
      enabled: true,
      instances: [{ browser: 'chromium' }],
    },
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx'],
    },
  },
})
