/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['"Gill Sans"', '"Gill Sans MT"', 'sans-serif'],
            body: ['"Gill Sans"', '"Gill Sans MT"', 'sans-serif']
        },
        fontSize: {
            xsm: '0.65rem',
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        },
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {},
    },
    plugins: [],
}