import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Determine where the compiled files should go (e.g., your existing assets folder)
    outDir: '../assets/dist', 
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Define an entry point for your React components
        main: './src/main.jsx', 
      },
      output: {
        // Prevent Vite from adding hashes to the filenames if you want stable script tags
        entryFileNames: 'react-components.js',
        assetFileNames: 'react-components.[ext]',
      },
    },
  },
})