/** @type {import('tailwindcss').Config} */
export default {
	// Esta línea es la CLAVE. Le dice a Tailwind dónde buscar clases.
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit', 'sans-serif'], // Configuramos la fuente aquí también
			},
		},
	},
	plugins: [],
}