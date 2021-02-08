import React from "react"
import Header from "./header" 
import Footer from "./footer" 
import "./layout.css"


const Layout = ({ children }) => {
 
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <Header/>
      <div className="max-w-7xl mx-auto pb-5">
         {children}
      </div>
      <Footer />
      <button data-netlify-identity-button className="p-5 bg-blue-500 text-white">Login</button>
    </div>
  )
}
export default Layout
