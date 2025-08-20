import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './', // Project root directory
  server: {
    port: 3000, // Development server port
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, '/index.html'),
        programs: path.resolve(__dirname, 'src/programs/index.html'),
        success: path.resolve(__dirname, 'src/success/index.html'),
        // Add more pages as needed
      }
    }
  }
});


