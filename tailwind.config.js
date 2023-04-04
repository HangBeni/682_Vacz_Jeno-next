module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    
      colors: {
        trendy_green:"var(--trendy-green)",
        light_blue:"var(--light-blue)",
        regos:"var(--regos)",
        türkisz:"var(--türkisz)",
        font:'var(--font)',
        bg:'var(--bg)',
        border_color_primary: 'var(--border_color_primary)',
        border_color_secondary: 'var(--border_color_secondary)',
        font_secondary: 'var(--font_secondary)',
        bg_secondary: 'var(--bg_secondary)',
        
        font_dark: "#ffff",
        bg_dark: "#161625",
        border_color_primary_dark: "#009a93",
        border_color_secondary_dar:"k:#76b82a",
        bg_secondary_dark: "#35354e",
        font_secondary_dark: "#c4c4cf",
      },
    },
  },
  plugins: [],
}
