import path from "path";
import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    symfonyPlugin(),
    tailwindcss(),
    svgr()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "assets")
    }
  },
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
