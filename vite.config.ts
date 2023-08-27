import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "DiagonalPopoverMenu",
      fileName: "diagonal-popover-menu",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
