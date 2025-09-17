import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/officiel/',            // URLs point to /officiel/...
  build: {
    outDir: 'dist/officiel',     // ...and the files physically live there
    emptyOutDir: true
  }
})
