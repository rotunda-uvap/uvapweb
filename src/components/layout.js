import React from "react"
import Header from "./header" 
import Footer from "./footer" 


const Layout = ({ children }) => {
  return (
    <div className="max-w-2xl mx-auto px-5 py-10">
      <Header />
      <div className="max-w-2xl mx-auto px-5 py-10">
         {children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
