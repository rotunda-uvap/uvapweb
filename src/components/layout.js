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

  <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-ceci-gray-dark focus:px-4 focus:py-2 focus:font-sans focus:text-lg focus:underline">
    Skip to main content
  </a>

    <div className="max-w-full mx-auto px-12 py-5">

      <header>
        <MegaHeader/>
      </header>
      <main id="main-content" className="max-w-full md:max-w-8xl mx-auto pb-5">
         {children}
      </main>
      <footer className="max-w-full md:max-w-8xl mx-auto pb-5">
        <Footer />
      </footer>

    </div>
    </>
  )
}
export default Layout
