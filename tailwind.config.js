module.exports = {
  darkMode:'class',
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
      },
      scale: {
        '-1': '-1'
      }
    },
  },
  plugins: [],
}
