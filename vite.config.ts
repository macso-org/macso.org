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
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        careers: fileURLToPath(
          new URL('./careers/index.html', import.meta.url),
        ),
        team: fileURLToPath(new URL('./team/index.html', import.meta.url)),
        contest2025: fileURLToPath(
          new URL('./contests/2025/index.html', import.meta.url),
        ),
        contest2024: fileURLToPath(
          new URL('./contests/2024/index.html', import.meta.url),
        ),
      },
    },
  },
})
