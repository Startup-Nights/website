module.exports = {
    mode: "jit",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'sn-black': '#121212',
                'sn-black-light': '#191919',
                'sn-black-lightest': '#242424',
                'sn-white': '#FFFFFF',
                'sn-yellow': '#FDC900',
                'sn-yellow-dark': '#EBB400'
            },
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('@tailwindcss/forms'),
    ],
};
