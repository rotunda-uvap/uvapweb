import React from "react"
import Footer from "./footer" 
import MegaHeader from "./Megamenu"
import "./layout.css"


const Layout = ({ children }) => {
 
  return (
    
    <div className="max-w-full mx-auto px-5 py-5">
    
      <MegaHeader/>
      <div className="max-w-7xl mx-auto pb-5">
         {children}
      </div>
      <div className="max-w-7xl mx-auto pb-5">
      <Footer />
      {/* <div data-netlify-identity-menu></div> */}
      <a href="/admin/"><button>Staff Dashboard</button></a>
      </div>
      
      {/* <button data-netlify-identity-button className="p-5 bg-blue-500 text-white"> Login</button> */}
    </div>
  )
}
export default Layout
