import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://cloud.appwrite.io', // Appwrite endpoint
        changeOrigin: true, // Modify the Origin header
        secure: false, // Disable SSL verification if needed
        rewrite: (path) => path.replace(/^\/v1/, '/v1'),
      },
    },
  },
});
