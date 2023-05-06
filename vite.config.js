import { defineConfig } from 'vite'
import postcss from './postcss.config.js';
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
import dns from 'dns';
dns.setDefaultResultOrder('verbatim')

export default defineConfig(
  {
    define: {
      'process.env': process.env
    },
    css: {
      postcss
    },
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        manifest: {
          "theme_color": "#f69435",
          "background_color": "#f69435",
          "display": "standalone",
          "scope": "/",
          "start_url": "/",
          "short_name": "workabus",
          "description": "workabus",
          "name": "workabus",
          "icons": [
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any maskable"
            },
            {
              src: "/icon-256x256.png",
              sizes: "256x256",
              type: "image/png",
              purpose: "any maskable"
            },
            {
              src: "/icon-384x384.png",
              sizes: "384x384",
              type: "image/png",
              purpose: "any maskable"
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable"
            }
          ],
        }
      }),
    ],
    build: {
      manifest: true,
      rollupOptions: {
        input: "./src/main.jsx"
      }
    },
    resolve: {
    }
  }
)