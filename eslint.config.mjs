import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✨ ADD YOUR CUSTOM RULES OBJECT HERE
  {
    rules: {
      "react/no-unescaped-entities": "off",
      // You can add other project-wide rules here as well
      // "another-rule-name": "warn",
    },
  },
];

export default eslintConfig;