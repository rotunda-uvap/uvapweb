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
    </div>
  )
}
export default Layout
