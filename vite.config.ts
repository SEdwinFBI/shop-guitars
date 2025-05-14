import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server:{
    host:"https://sedwinfbi.github.io/shop-guitars/"
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
