import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/odin-admin-dashboard-react",
  server: {
    open: true,
    port: 8080
  }
})
