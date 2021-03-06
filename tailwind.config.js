module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  important: true, // make all utilities '!important'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }

      md: "768px", // => @media (min-width: 768px) { ... }

      lg: "1024px", // => @media (min-width: 1024px) { ... }

      xl: "1280px", // => @media (min-width: 1280px) { ... }

      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "secondary": "var(--color-secondary)",
        "secondary-light": "var(--color-secondary-light)"
      },
      screens: {
        'print': {'raw': 'print'},
        // => @media print { ... }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
