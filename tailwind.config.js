/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                titulo: ['Poppins', 'sans-serif'], // exemplo
            },
            colors: {
                primario: '#1e40af',
                secundario: '#64748b',
                destaque: '#facc15', // exemplo
            },
        },
    },
    plugins: [],
}
