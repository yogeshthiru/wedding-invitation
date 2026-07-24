import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Only use the /wedding-invitation/ base path when building for GitHub Pages.
// Docker/local builds keep base '/' so nginx can serve from the domain root.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/wedding-invitation/' : '/',
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
