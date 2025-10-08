/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: '#1e1e1e', // dark background for code
              color: '#d4d4d4',           // VS Code-like text color
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              overflowX: 'auto',
            },
            code: {
              color: '#ffae57', // code text color
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.3rem',
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

