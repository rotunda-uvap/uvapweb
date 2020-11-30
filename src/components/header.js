import React , { useState }from "react"
import { Link } from "gatsby"

const Header = ({data}) => {
  const [isExpanded, toggleExpansion] = useState(false)
    return (
      <header className="text-gray-700 body-font border-b border-gray-300">
       <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="text-gray-700"><Link to={`/`}>UNIVERSITY <i>of</i> VIRGINIA PRESS</Link></span>
      </div>
      <div className="block">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-gray-400 hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow`}>
        <div className="text-sm lg:flex-grow">
          <Link to={`/content/about`} href="#responsive-header" className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            About
          </Link>
          <Link to={`/book-search`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Search
          </Link>
          <Link to={`/content/prospective-authors`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            Prospective Authors
          </Link>
          <Link to={`/content/current-authors`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300 mr-4">
            Current Authors
          </Link>
          <Link to={`/books`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Books
          </Link>
          <Link to={`/subjects`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Subjects
          </Link>
          <Link to={`/series`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Series
          </Link>
          <Link to={`/news-posts`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            News
          </Link>
          <Link to={`/media-posts`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Media
          </Link>
          <Link to={`/`} className="uppercase block mt-4 text-teal-200 hover:text-gray-300">
            Give
          </Link>
          <Link to={`/`} className="uppercase block mt-4  text-teal-200 hover:text-gray-300">
            Career
          </Link>
        </div>
        
      </div>
    </nav>

        
        
       
      </header>
    )
  }
  
  export default Header

  