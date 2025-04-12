import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // 👈 this is the fix
    globals: true, // (optional) allows using `describe`, `it`, etc without imports
  },
});
