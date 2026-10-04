// @ts-check
import { defineConfig,envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output:"server",
  vite: {
  plugins: [tailwindcss()],
  ssr: {
      noExternal: ["@aws-sdk/*"],
    },
  optimizeDeps: {
      // Tell Vite's dependency optimizer not to pre-bundle the AWS SDK during dev mode
      exclude: ["@aws-sdk/client-dynamodb"],
    },
  },
  integrations: [icon(), react()],
  adapter: cloudflare(),
  env: {
    schema: {
      AWS_ACCESS_KEY_ID: envField.string({ context: "server", access: "secret" }),
      AWS_SECRET_ACCESS_KEY: envField.string({ context: "server", access: "secret" }),
      AWS_REGION: envField.string({ context: "server", access: "secret" }),
      DEV: envField.boolean({ context: "server", access: "public" })
    }
  }
});