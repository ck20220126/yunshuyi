import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        'sider-width': 'var(--sider-width)',
      },
      padding: {
        'sider-padding': 'var(--sider-padding)',
      },
      margin: {
        'sider-padding': 'var(--sider-padding)',
      },
      screens: {
        'mobile': '320px',
        'tablet': '640px',
        'laptop': '1400px',
        'desktop': '1921px',
      },
      /* container: {
        center: true,
        // padding: '2em',
        screens: {
          'mobile': '320px',
          'tablet': '640px',
          'laptop': '1400px',
          '2xl': '1920px',
        }
      } */
    },
  },
  plugins: [],
};
export default config;
