// import configs from "eslint-config-reearth";
import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";

export default tsEslint.config(
  // ...configs,
  eslint.configs.recommended,
  // ...tsEslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,mts,cts,astro}"],
    rules: {
      "no-undef": "off",
    },
  },
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
    rules: {},
    settings: {
      tailwindcss: {
        whitelist: ["js-.+"],
        classRegex: "^(active)?[cC]lass(Name)?$",
      },
    },
  },
);
