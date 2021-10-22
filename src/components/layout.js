import React from "react"
import Footer from "./footer" 
import MegaHeader from "./Megamenu"
import "./layout.css"


const Layout = ({ children }) => {
 
  return (
    
    <div className="max-w-full mx-auto px-5 py-5">
    
      <MegaHeader/>
      <div className="max-w-full md:max-w-7xl mx-auto pb-5">
         {children}
      </div>
      <div className="max-w-full md:max-w-7xl mx-auto pb-5">
      <Footer />
      <a href="https://uvap-draft-13b347.netlify.app/admin/#"><button>Staff Dashboard</button></a>
      </div>
      
    </div>
  )
}
export default Layout
