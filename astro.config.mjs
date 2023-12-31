import { defineConfig } from "astro/config"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
    experimental: {
        assets: true,
    },
    integrations: [react()],
    site: "https://serenacula.github.io",
    base: "/astro",
})
