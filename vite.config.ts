import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://rus-anonym.xyz",
      dynamicRoutes: ["/#/", "/#/about", "/#/artucles", "/#/utils"],
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          const path = id.split("/");
          const nodeModulesIndex = path.indexOf("node_modules");
          if (nodeModulesIndex === -1) {
            return "app";
          }

          return path[nodeModulesIndex + 1];
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: /^@vkontakte\/vkui$/, replacement: "@vkontakte/vkui/dist/cssm" },
    ],
  },
});
