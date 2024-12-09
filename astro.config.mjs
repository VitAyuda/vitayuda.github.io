import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://vitayuda.github.io",
    integrations: [
        starlight({
            title: "VitAyuda",
            locales: {
                root: {
                    label: "VitAyuda",
                    lang: "es",
                },
            },
            social: {
                github: "https://github.com/vitayuda/vitayuda.github.io",
            },
            sidebar: [
                {
                    label: "Suplementos",
                    autogenerate: { directory: "Suplementos" },
                },
            ],
            customCss: ["./src/tailwind.css"],
        }),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
