import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
    200: "#f0b9b4",
    600: "#c3222d",
    900: "#5a1818",
    950: "#3e1514",
};
const gray = {
    100: "#f4f9eb",
    200: "#e9f2d7",
    300: "#bcc7a6",
    400: "#819553",
    500: "#4f601e",
    700: "#313e00",
    800: "#212c00",
    900: "#141b02",
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/*/.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: { accent, gray },
        },
    },
    plugins: [starlightPlugin()],
};
