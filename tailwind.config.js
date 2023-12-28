/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "outfit": ["Outfit", "sans-serif"]
            },
            colors: {
                "background": "#141519",
                "subackground": "#0C0D10",
                "primary": "#2563EB",
                "secondary": "#1D4ED8",
                "success": "#16A34A",
                "fail": "#DC2626",
                "warning": "#D97706"
            }
        }
    },
    plugins: []
}