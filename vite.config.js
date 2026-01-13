import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin(),
    ],
      build: {
    outDir: 'public/build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: './assets/root.jsx'
      }
    }
  },
  server: {
    strictPort: true
  }
});
