import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    port: 4444,
    host: true,
    strictPort: true,
  },
});
