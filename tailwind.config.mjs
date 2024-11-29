import config from "./src/customization/tailwind.config.mjs";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  ...config,
  theme: {
    container: {
      center: true,
    },
    // fontFamily: {
    //   sans: "'Noto Sans JP', sans-serif",
    //   en: "Barlow, 'Noto Sans JP', sans-serif",
    //   // 'en-condensed': '"Barlow Condensed", "Noto Sans JP", sans-serif',
    //   montserrat: "Montserrat, 'Noto Sans JP', sans-serif",
    // },
    extend: {
      fontFeatureSettings: {
        palt: '"palt"',
      },
      spacing: {},
      colors: {},
      maxWidth: {
        container: "90rem", // 1440px
      },
    },
  },
  plugins: [
    plugin(function ({ matchComponents, matchUtilities, theme }) {
      /**
       * Max width container
       */
      matchComponents(
        {
          "max-w-container": (value) => ({
            "max-width": value,
            "@apply w-full mx-auto": "",
          }),
        },
        {
          values: theme("maxWidth"),
          type: ["any"],
        },
      );

      /**
       * Font feature settings
       */
      matchUtilities(
        {
          font: (value) => ({
            "font-feature-settings": value,
          }),
        },
        {
          values: theme("fontFeatureSettings"),
          type: ["any"],
        },
      );
    }),
  ],
};
