import configs from "eslint-config-reearth";
import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  ...configs,
  ...eslintPluginAstro.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  {
    ignores: ["dist/*"],
  },
  {
    plugins: {
      eslintPluginAstro,
      tailwind,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
    settings: {
      tailwindcss: {
        whitelist: ["js-.+"],
        classRegex: "^(active)?[cC]lass(Name)?$",
      },
    },
  },
];
