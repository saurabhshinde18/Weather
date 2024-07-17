

// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use PORT from environment variable
    strictPort: true, // Fail if the port is already in use
  },
});
