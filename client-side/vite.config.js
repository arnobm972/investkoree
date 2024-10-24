import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true, // Enable sourcemaps for easier debugging
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api/users': {
        // Replace this with your actual Vercel deployment URL after deployment
        target: isProduction ? 'https://investkoree-server-side.vercel.app/' : 'http://localhost:5000',
        changeOrigin: true,
        secure: false,  // Optional, helps with some proxy issues
      },
    },
  },
});
