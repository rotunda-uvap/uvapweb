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

export default function initGTM() {
    if (window.isGTMLoaded) {
      return false;
    }
  
    window.isGTMLoaded = true;
  
    const script = document.createElement('script');
  
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_TRACKING_ID}`;
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
  
      gtag('config', `${process.env.GATSBY_GA_TRACKING_ID}`);
    };
  
    document.head.appendChild(script);
  }
  
  function loadGTM(event) {
    initGTM();
    event.currentTarget.removeEventListener(event.type, loadGTM);
  }
  
  exports.onClientEntry = () => {
    document.onreadystatechange = () => {
      if (document.readyState !== 'loading') {
        setTimeout(initGTM, 3500);
      }
    };
  
    document.addEventListener('scroll', loadGTM);
    document.addEventListener('mousemove', loadGTM);
    document.addEventListener('touchstart', loadGTM);
  };