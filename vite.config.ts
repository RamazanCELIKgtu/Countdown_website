import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Countdown_website/', // Replace with your exact repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
