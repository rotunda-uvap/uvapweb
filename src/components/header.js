import React from "react"
import {Link } from "gatsby"
// import SearchPanel from "./search/SearchPanel"

/* const searchIndices = [
  { name: `Books`, title: `Books`, hitComp: `Hit` },
] */

const Header = () => {
  
    return (
      <header className="bg-black text-white body-font">
       <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
      <div className="hidden md:block"><Link to={`/`}> <img src="/uvap_white.png" alt="logo"/> </Link></div>
      <div className="md:hidden"><Link to={`/`}> <img src="/uvap_stacked.png" alt="mobile logo"/> </Link></div>
     
       
      </div>
     
    </nav>
      </header>
    )
  }
  
  export default Header

  
  

