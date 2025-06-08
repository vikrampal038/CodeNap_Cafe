import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  theme:{
    container:{
      center:true,
      padding: {
        DEFAULT:'1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
