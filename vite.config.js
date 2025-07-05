import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Meme-Generator/', // 👈 Important for GitHub Pages
  plugins: [react()],
})
