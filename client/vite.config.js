import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    open: '/login', // ✅ cette ligne ouvre automatiquement /login
    strict: false
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
