module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                'h1': ['5.625rem', { lineHeight: '4.375rem' }],
                'h2': ['4.375rem', { lineHeight: '3.375rem' }],
                'h3': ['1.688rem', { lineHeight: '1.438rem' }],
                'h4': ['1.438rem', { lineHeight: '1.438rem' }],
                'h5': ['1.188rem', { lineHeight: '1.375rem' }],
                'h6': ['0.75rem', { lineHeight: '0.938rem' }],
                'p': ['1.125rem', { lineHeight: '1.5rem' }],
                'psm': ['0.9rem', { lineHeight: '1.2rem' }],
                'h1sm': ['2.625rem', { lineHeight: '2.375rem' }],
                'h2sm': ['2.375rem', { lineHeight: '1.375rem' }],
                'h3sm': ['1.388rem', { lineHeight: '1.238rem' }],
                'h4sm': ['1.238rem', { lineHeight: '1.238rem' }],

            },
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/forms'),
    ],
};
