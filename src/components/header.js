import React , { useState }from "react"
import {Link } from "gatsby"
// import SearchPanel from "./search/SearchPanel"

/* const searchIndices = [
  { name: `Books`, title: `Books`, hitComp: `Hit` },
] */

const Header = () => {
  
        
  const [isExpanded, toggleExpansion] = useState(false)
    return (
      <header className="bg-black text-white body-font">
       <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
      <div className="hidden md:block"><Link to={`/`}> <img src="/uvap_white.png" alt="logo"/> </Link></div>
      <div className="md:hidden"><Link to={`/`}> <img src="/uvap_stacked.png" alt="mobile logo"/> </Link></div>

      </div>
      <div className="block mt-2 md:mt-0">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-blue-200 hover:border-white">
         <span className="uppercase text-sm mr-1">MENU</span> <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow mt-3 md:mt-0`}>
        <div className="text-sm lg:flex-grow">
          <Link to={`/about`} href="#responsive-header" className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            About
          </Link>
          <Link to={`/book-search`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Search
          </Link>
          
          <Link to={`/prospective`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            Prospective Authors
          </Link>
          <Link to={`/authors`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            Current Authors
          </Link>
          <Link to={`/books`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Books
          </Link>
          <Link to={`/rotunda`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            ROTUNDA DIGITAL IMPRINT
          </Link>
          <Link to={`/news-posts`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            News
          </Link>
          <Link to={`/media-posts`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Media
          </Link>
          <Link to={`/all-exhibits`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Exhibits
          </Link>
          <Link to={`/support`} className="uppercase block mt-4 text-teal-200 hover:text-gray-300">
            Give
          </Link>
          <Link to={`/publicity`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            Publicity
          </Link>
          <Link to={`/contact`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            Contact
          </Link>
          <Link to={`/career`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Career
          </Link>
          <Link to={`/order`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Order
          </Link>
        </div>
        {/* <SearchPanel collapse indices={searchIndices} /> */}
      </div>
    </nav>

        
        
       
      </header>
    )
  }
  
  export default Header

  
  

