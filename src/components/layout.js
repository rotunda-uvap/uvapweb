import React from "react"
import Footer from "./footer" 
import MegaHeader from "./Megamenu"
import { Helmet } from "react-helmet"
import { Script } from "gatsby"


const Layout = ({ children }) => {
 
  return (
    <>
    <Helmet
  htmlAttributes={{
    lang: 'en',
  }}/>
  <Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM}`}
  strategy="off-main-thread"
  forward={[`gtag`]}
/>
<Script id="gtag-config" strategy="off-main-thread">
  {`
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', ${process.env.GTM}, { send_page_view: false })
  `}
</Script>
   

  

  
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
