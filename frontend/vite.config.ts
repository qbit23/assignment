import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:'/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@View': path.resolve(__dirname, 'src/view'),
      '@Constant': path.resolve(__dirname, 'src/constant'),
      '@Component': path.resolve(__dirname, 'src/component'),


    },
  },
  
})
