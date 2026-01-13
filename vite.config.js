import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin(),
        tailwindcss(),
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
