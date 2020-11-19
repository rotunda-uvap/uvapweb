import React from "react"
import { Link } from "gatsby"

const Header = () => {
   
    return (
      <header className="text-gray-700 body-font border-b border-gray-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
           <span className="sitename"><Link to={`/`}>UNIVERSITY <i>of</i> VIRGINIA PRESS</Link></span>
           
        </div>
       
      </header>
    )
  }
  
  export default Header