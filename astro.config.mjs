import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
                github: "https://github.com/withastro/starlight",
            },
            sidebar: [
                {
                    label: "Suplementos",
                    autogenerate: { directory: "Suplementos" },
                },
            ],
        }),
    ],
});
