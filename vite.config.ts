import path from 'node:path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~': path.join(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [react(), Unocss()],
})
