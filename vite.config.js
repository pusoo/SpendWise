import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { join } from 'path';

export default defineConfig({
  plugins: [react(), legacy()],
  build: {
    outDir: 'dist', 
    emptyOutDir: true, 
    rollupOptions: {
      input: {
        main: join(__dirname, 'index.html'), 
      },
    },
  },
  server: {
    port: 3000, 
  },
});
