import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url' // 1. Add this import
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// 2. Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})