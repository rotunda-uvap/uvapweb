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
import "@fontsource/playfair-display-sc/400.css"
import "@fontsource/assistant/200.css"
import "@fontsource/assistant/300.css"
import "@fontsource/assistant/400.css"
import "@fontsource/assistant/600.css"
import "./src/components/search/search.css"

import React from "react"
import RootElement from './src/components/root-element';

 export const onRouteUpdate = ({ location }) => {
      if (process.env.NODE_ENV !== 'production') {
        return null;
      }
      const pagePath = location ? location.pathname + location.search + location.hash : undefined;
      setTimeout(() => {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_view', { page_path: pagePath });
        }
      }, 100);
      return true;
     };

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};