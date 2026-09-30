import nextVitals from "eslint-config-next/core-web-vitals";

// Next's preset ships as flat config; the old FlatCompat bridge (and
// `next lint`) went away with ESLint 10 and Next 16.
const eslintConfig = [
  ...nextVitals,
  {
    // The site is TypeScript. The .js/.mjs config files and Node scripts
    // trip the preset's JS parser under ESLint 10, so they're left out.
    ignores: [".next/**", "node_modules/**", ".claude/**", "public/**", "**/*.js", "**/*.mjs"],
  },
  // eslint-plugin-react's version detection uses an API ESLint 10 removed.
  { settings: { react: { version: "19.2" } } },
];

export default eslintConfig;
