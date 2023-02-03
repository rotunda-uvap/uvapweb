import React from "react"
import Footer from "./footer" 
import MegaHeader from "./Megamenu"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
 
  return (
    <>
    <Helmet
  htmlAttributes={{
    lang: 'en',
  }}/>

  
    <div className="max-w-full mx-auto px-12 py-5">
    
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
