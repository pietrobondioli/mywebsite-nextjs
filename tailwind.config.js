/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    darkMode: "class",
    theme: {
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
            black: "#0a0a0a",
            green: "#6db16b",
            red: "#ec3535",
            grey: "#7c7c7c",
            "grey-opaque": "#7c7c7cbd",
            orange: "#f5a623",
        },
        extend: {
            height: {
                svh: "calc(var(--vh, 1vh) * 100)",
            },
            minHeight: {
                svh: "calc(var(--vh, 1vh) * 100)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "class",
        }),
    ],
}
