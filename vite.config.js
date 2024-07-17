import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change to your desired port
    open: true, // Opens the browser automatically
  },
  build: {
    outDir: 'dist', // Output directory for build files
  },
  define: {
    'process.env': {}, // Define environment variables if needed
  },
});
