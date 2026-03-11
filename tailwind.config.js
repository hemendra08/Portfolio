/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'stormy-teal': {
                    DEFAULT: '#006d77',
                    light: '#0d8f99',
                    dark: '#004d57',
                },
                'pearl-aqua': {
                    DEFAULT: '#83c5be',
                    light: '#a8d5cf',
                    dark: '#5fa59d',
                },
                'alice-blue': {
                    DEFAULT: '#edf6f9',
                    light: '#f5fafb',
                    dark: '#d4eef5',
                },
                'almond-silk': {
                    DEFAULT: '#ffddd2',
                    light: '#ffe8e1',
                    dark: '#ffccb8',
                },
                'tangerine-dream': {
                    DEFAULT: '#e29578',
                    light: '#eda892',
                    dark: '#dd7d5f',
                },
            },
            backgroundImage: {
                'gradient-teal-tangerine': 'linear-gradient(135deg, #006d77 0%, #e29578 100%)',
                'gradient-aqua-silk': 'linear-gradient(135deg, #83c5be 0%, #ffddd2 100%)',
                'gradient-dark-teal': 'linear-gradient(135deg, #004d57 0%, #006d77 100%)',
            },
        },
    },
    plugins: [],
}
