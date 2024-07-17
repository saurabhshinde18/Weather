

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use the PORT environment variable or default to 5173
    host: true, // Allows Vite to use the --host flag for network access
  }
});
