import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "/seasana/",
  theme: {
    extend: {
      colors: {
        brand: {
          textColor: "#11697A",
          orange: "#FF8129",
        },
      },
    },
  }
  
})
