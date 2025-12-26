import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: '/', // Sets the base to /my-app/
  base: '/Angeles-National-Forest/', // Sets the base to /my-app/
  plugins: [react()],
})
