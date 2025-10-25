import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const serverProxy = {
  "/api": { target: "http://127.0.0.1:5000", changeOrigin: true },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      serverProxy
    }
  }
});

// export default {
//   server: { proxy: { 'api': 'http://127.0.0.1:5000' } }
// };