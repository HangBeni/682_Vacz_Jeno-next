import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { Html, Head, Main, NextScript } from 'next/document'
import Contacts from '../components/index/Contacts'
 
export default function Document() {

  function setInitialColorMode() {
    
    function getInitialColorMode() {
      const preference = window.localStorage.getItem("theme");
      const hasExplicitPreference = typeof preference === "string";
      /**
       * If the user has explicitly chosen light or dark,
       * use it. Otherwise, this value will be null.
       */
      if (hasExplicitPreference) {
        return preference;
      }
      // If there is no saved preference, use a media query
      const mediaQuery = "(prefers-color-scheme: light)";
      const mql = window.matchMedia(mediaQuery);
      const hasImplicitPreference = typeof mql.matches === "boolean";
      if (hasImplicitPreference) {
        return mql.matches ? "light" : "dark";
      }
      // default to 'light'.
      return "dark";
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty("--initial-color-mode", colorMode);
    // add HTML attribute if dark mode
    if (colorMode === "dark")
      document.documentElement.setAttribute("data-theme", "dark");
  }
  // our function needs to be a string
  const blockingSetInitialColorMode = `(function() {
      ${setInitialColorMode.toString()}
      setInitialColorMode();
  })()
  `;

  return (
    <Html lang='hu'>
        <Head/>

            <AnimatePresence
                        mode='sync'
                        onExitComplete={() => window.scrollTo(0, 0)}
            >
                <ThemeProvider attribute='data-*'>
                <body>
                    <Main />
                    <NextScript />
                    <Contacts/>
                </body>
                </ThemeProvider>
            </AnimatePresence>
    </Html>
  )
}