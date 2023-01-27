import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import dns from "dns"

// dns.setDefaultResultOrder("verbatim")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/uploads": "http://localhost:5000",
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
