import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url' // Import 'url' instead of 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Use './src' instead of '.src'
    }
  },
  build: {
    chunkSizeWarningLimit: 16000,
  },
})
