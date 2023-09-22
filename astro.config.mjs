import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    // site: 'https://example.com',
    integrations: [mdx(), sitemap()],
    output: "server",
    adapter: cloudflare(),
    build: {
        target: 'esnext' //browsers can handle the latest ES features
    }
});