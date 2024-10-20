import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    emptyOutDir: true, // Clear the output directory before each build
  },

  server :{
    port:3000,
    proxy :{
      '/api':{
        target: 'https://investkoree-server-side.vercel.app',
        changeOrigin: true,
      },
    },
  },
});
