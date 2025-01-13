/** @type {import('tailwindcss').Config} */
export default {
  content: [                                                
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: '#101011'
      },
      height: {
        'custom': 'calc(100vh - 4rem)', // Cambia "4rem" según lo que necesites
      },
    },
  },
  plugins: [],
};
