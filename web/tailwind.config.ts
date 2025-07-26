import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--foreground)",
            p: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            h1: {
              marginTop: "0",
              marginBottom: "1rem",
            },
            h2: {
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            h3: {
              marginTop: "1.25rem",
              marginBottom: "0.5rem",
            },
            "@media (max-width: 640px)": {
              fontSize: "0.875rem",
              p: {
                marginTop: "0.75rem",
                marginBottom: "0.75rem",
              },
              h1: {
                fontSize: "1.5rem",
                marginBottom: "0.75rem",
              },
              h2: {
                fontSize: "1.25rem",
                marginTop: "1rem",
                marginBottom: "0.5rem",
              },
              h3: {
                fontSize: "1.125rem",
                marginTop: "0.75rem",
                marginBottom: "0.375rem",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
