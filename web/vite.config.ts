import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: false,
      eslint: {
        lintCommand: "eslint --cache --fix --ext .ts,.tsx src",
        dev: {
          logLevel: ["error"],
        },
      },
      typescript: true,
    }),
  ],
  root: ".",
  build: {
    outDir: "dist",
  },
});
