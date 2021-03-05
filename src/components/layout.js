import React from "react"
import Header from "./header" 
import Footer from "./footer" 
import Sidebar from "./sidebar.js"
import "./layout.css"


const Layout = ({ children }) => {
 
  return (
    <div className="max-w-8xl mx-auto px-5 py-10">
      <Sidebar/>
      <Header/>
      <div className="max-w-8xl mx-auto pb-5">
         {children}
      </div>
      <div className="max-w-8xl mx-auto pb-5">
      <Footer />
      <div data-netlify-identity-menu></div>
      
      </div>
      
      {/* <button data-netlify-identity-button className="p-5 bg-blue-500 text-white"> Login</button> */}
    </div>
  )
}
export default Layout
