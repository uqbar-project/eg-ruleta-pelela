/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import { pelelajsPlugin } from 'vite-plugin-pelelajs'

export default defineConfig({
  plugins: [pelelajsPlugin()],
  test: {
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts', 'src/**/*.pelela'],
    },
  },
})
