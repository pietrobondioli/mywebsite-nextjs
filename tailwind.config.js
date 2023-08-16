/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                primary: {
                    light: "#6cb6e0",
                    DEFAULT: "#549ecf",
                    dark: "#3b8dc4",
                },
                secondary: {
                    DEFAULT: "#252b33",
                    dark: "#1a1f27",
                },
                white: {
                    DEFAULT: "#fcfcfc",
                    500: "#fcfcfc",
                    700: "#dbdbdb",
                },
            },
            height: {
                svh: "calc(var(--vh, 1vh) * 100)",
            },
            minHeight: {
                svh: "calc(var(--vh, 1vh) * 100)",
            },
            screens: {
                "3xl": "1920px",
                "4xl": "2560px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "class",
        }),
    ],
}
