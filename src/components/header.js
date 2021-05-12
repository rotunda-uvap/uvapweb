import React from "react"
import { FaSearch,FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import {Link } from "gatsby"
// import SearchPanel from "./search/SearchPanel"

/* const searchIndices = [
  { name: `Books`, title: `Books`, hitComp: `Hit` },
] */

const Header = () => {
  
    return (
    
      <div className="text-gray-500 uppercase light border-b-2 border-t-2 flex flex-row justify-center place-content-center">
  <div className="flex flex-row justify-center place-content-center">
    {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <div className="hidden md:block"><Link to={`/`}> <img src="/black.png" alt="logo"/> </Link></div>
      <div className="md:hidden"><Link to={`/`}> <img src="/uvap_orb_sm.png" alt="mobile logo"/> </Link></div>
    </a> */}
    
    <div className="space-x-6 flex flex-wrap items-center justify-center place-content-center py-3 text-sm">
    <a className="hover:text-gray-900 md:ml-5" href="/">Home</a>
    <Link to={`/about`} className="hover:text-gray-900">About</Link>
      <a className="hover:text-gray-900">Books</a>
      <a className="hover:text-gray-900">For Authors</a>
      <a className="hover:text-gray-900">For Instructors</a>
      <a className="hover:text-gray-900">Rotunda Digital</a>
      <a href="https://www.facebook.com/uvapress"><FaFacebookSquare className="hover:text-gray-900 text-gray-500" /></a>
      <a href="https://twitter.com/uvapress"><FaTwitterSquare className="hover:text-gray-900 text-gray-500" /></a>
      <a href="https://www.instagram.com/uvapress"><FaInstagramSquare className="hover:text-gray-900 text-gray-500" /></a>
      <Link to={`/book-search`} > <FaSearch className="hover:text-gray-900 text-gray-500" /></Link>

    </div>
   
  </div>
</div>
    )
  }
  
  export default Header

  
  

