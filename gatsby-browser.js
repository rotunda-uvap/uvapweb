import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"
import "@fontsource/antonio"
import "@fontsource/antonio/100.css"
import "@fontsource/antonio/200.css"
import "@fontsource/antonio/300.css"
import "@fontsource/quicksand"
import "@fontsource/quicksand/300.css"
import "@fontsource/crimson-text"
import "@fontsource/crimson-text/400.css"
import "@fontsource/crimson-text/600.css"
import "@fontsource/crimson-text/700.css"
import "@fontsource/crimson-text/400-italic.css"

export const onRouteUpdate = ({ location }) => {
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }
    const pagePath = location ? location.pathname + location.search + location.hash : undefined;
    setTimeout(() => {
      if (typeof gtag === 'function') {
        gtag('event', 'page_view', { page_path: pagePath });
      }
    }, 100);
  };