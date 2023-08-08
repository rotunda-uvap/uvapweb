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
      {/* <div className="max-w-full md:max-w-8xl mx-auto pb-5">
        <p className="bg-ceci-gray-light font-display p-4">NOTICE: Due to a software transition at our partner fufillment center, we will be unable to take online orders between 5:00PM EDT Friday, July 28 through Thursday, August 8. During this time, you may still place orders by telephone by calling 1-800-848-6224 or (919) 966-7449 between the hours of 8:30AM and 5:00PM EDT M-F. Orders placed from 5:00PM Monday, July 24 through Friday, July 28 will be queued and subject to a short delay. We apologize for any inconvenience.</p>
      </div> */}
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
