import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/EUT/", // Asegura que las rutas de assets funcionen en isa-id.github.io/EUT/
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "src/context"),
      "@components": path.resolve(__dirname, "src/components"),
      "@game": path.resolve(__dirname, "src/game"),
      "@data": path.resolve(__dirname, "src/data"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
