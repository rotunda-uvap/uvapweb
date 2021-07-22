import React from "react"
import Footer from "./footer" 
import MegaHeader from "./Megamenu"
import SEO from "../components/SEO"
import "./layout.css"


const Layout = ({ children }) => {
 
  return (
    
    <div className="max-w-7xl mx-auto px-5 py-10">
    <SEO/>
    
      <MegaHeader/>
      <div className="max-w-7xl mx-auto pb-5">
         {children}
      </div>
      <div className="max-w-7xl mx-auto pb-5">
      <Footer />
      <div data-netlify-identity-menu></div>
      
      </div>
      
      {/* <button data-netlify-identity-button className="p-5 bg-blue-500 text-white"> Login</button> */}
    </div>
  )
}
export default Layout
