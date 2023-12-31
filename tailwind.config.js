/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "outfit": ["Outfit", "sans-serif"]
            },
            colors: {
                "background": "#18181b",
                "subackground": "#09090b",
                "dark": "#09090b",
                "light": "#f4f4f5",
                "primary": "#d4031f"
            }
        }
    },
    plugins: []
}