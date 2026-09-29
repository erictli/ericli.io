import nextVitals from "eslint-config-next/core-web-vitals";

// Next's preset ships as flat config; the old FlatCompat bridge (and
// `next lint`) went away with ESLint 10 and Next 16.
const eslintConfig = [
  ...nextVitals,
  {
    ignores: [".next/**", "node_modules/**", ".claude/**", "public/**"],
  },
  // eslint-plugin-react's version detection uses an API ESLint 10 removed.
  { settings: { react: { version: "19.2" } } },
];

export default eslintConfig;
