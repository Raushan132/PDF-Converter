import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['www.onlinepdf.in','onlinepdf.in'],
    host: true,
    port: 6002,
    strictPort: true,
  }
})
