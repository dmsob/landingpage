import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Автоматически открывает браузер
    host: true, // Доступен в сети
    watch: {
      usePolling: true, // Полезно для некоторых файловых систем
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})

