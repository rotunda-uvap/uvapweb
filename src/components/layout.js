import React from "react"
import Footer from "./footer" 
import MegaHeader from "./Megamenu"
import { Helmet } from "react-helmet"

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

const Layout = ({ children }) => {
 
  return (
    <>
    <Fragment>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-CEYXF25KC3`}
      strategy="off-main-thread"
      forward={[`gtag`]}
    />
    <Script
      id="gtag-config"
      strategy="off-main-thread"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', 'G-CEYXF25KC3', { send_page_view: true })`
      }}
    />
    <div>{children}</div>
  </Fragment>
    <Helmet
  htmlAttributes={{
    lang: 'en',
  }}/>

  
    <div className="max-w-full mx-auto px-5 py-5">
    
      <MegaHeader/>
      <div className="max-w-full md:max-w-8xl mx-auto pb-5">
         {children}
      </div>
      <div className="max-w-full md:max-w-8xl mx-auto pb-5">
      <Footer />
      </div>
      
    </div>
    </>
  )
}
export default Layout
