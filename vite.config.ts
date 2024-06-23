import { defineConfig } from "vite";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(async () => ({

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      paths: [
        "./src/**",
        "./src/html/**"
      ],
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  build: {
    target: "ES2022",
    rollupOptions: {
      input: {
        solo: resolve(__dirname, 'src/html/solo.html'),
        loose: resolve(__dirname, 'src/html/loose.html'),
        win: resolve(__dirname, 'src/html/win.html'),
        index: "./index.html",
      },
    }
  }
}));
