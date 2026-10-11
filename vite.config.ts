import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        about: fileURLToPath(new URL('./about/index.html', import.meta.url)),
        archive2024: fileURLToPath(
          new URL('./competitions/2024/index.html', import.meta.url),
        ),
        archive2025: fileURLToPath(
          new URL('./competitions/2025/index.html', import.meta.url),
        ),
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        careers: fileURLToPath(
          new URL('./careers/index.html', import.meta.url),
        ),
      },
    },
  },
})
