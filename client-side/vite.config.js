import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    emptyOutDir: true, // Clear the directory before each build
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://investkoree-server-side.vercel.app', // Proxy to backend in development
        changeOrigin: true,
      },
    },
  },
});
