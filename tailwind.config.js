/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            keyframes: {
                tada: {
                    "0%": { transform: "scale(1)" },
                    "10%": { transform: "scale(1.1) rotate(-2deg)" },
                    "20%": { transform: "scale(1.1) rotate(2deg)" },
                    "30%": { transform: "scale(1.1) rotate(-2deg)" },
                    "40%": { transform: "scale(1.1) rotate(2deg)" },
                    "50%": { transform: "scale(1.1) rotate(-2deg)" },
                    "60%": { transform: "scale(1.1) rotate(2deg)" },
                    "70%": { transform: "scale(1.1) rotate(-2deg)" },
                    "80%": { transform: "scale(1.1) rotate(2deg)" },
                    "90%": { transform: "scale(1.1) rotate(-2deg)" },
                    "100%": { transform: "scale(1.1) rotate(2deg)" },
                },
                "bounce-slow": {
                    "0%, 100%": { transform: "translateY(-5%)" },
                    "50%": { transform: "translateY(0%)" },
                },
            },
            animation: {
                "bounce-slow": "bounce .5s infinite",
                tada: "tada 1.5s infinite",
            },
            colors: {
                transparent: "transparent",
                primary: {
                    // dark elegant ocean blue
                    light: "#1e90ff",
                    DEFAULT: "#1668b8",
                    dark: "#0e3e6c",
                },
                secondary: {
                    DEFAULT: "#252b33",
                    dark: "#1a1f27",
                },
                white: {
                    DEFAULT: "#fcfcfc",
                    500: "#fcfcfc",
                    700: "#dbdbdb",
                    900: "#bcbcbc",
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
