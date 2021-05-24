import React from "react"
import { FaSearch,FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import {Link } from "gatsby"
import "./megamenu.css"


const MegaHeader = () => {
  
    return (
        <nav className="text-gray-500 uppercase divght border-b-2 border-t-2 flex flex-row justify-center place-content-center z-40">
        <div className="flex flex-row justify-center place-content-center">
 
    <nav className="flex">
    <divide className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <div className="block"><Link to={`/`}> <img src="/black.png" alt="logo"/> </Link></div>
    </divide>
      <div className="toggleable">
        <input type="checkbox" value="selected" id="toggle-one" className="toggle-input"/>
          
<div className="space-x-6 flex flex-wrap items-center justify-center place-content-center py-3 text-sm">
<a className="hover:text-gray-900 md:ml-5" href="/">Home</a>
<label htmlFor="toggle-one"><span className="hover:text-gray-900">About</span></label>
<label htmlFor="toggle-one"><span className="hover:text-gray-900">Books</span></label>
<label htmlFor="toggle-one"><span className="hover:text-gray-900">For Authors</span></label>
<label htmlFor="toggle-one"><span className="hover:text-gray-900">For Instructors</span></label>
<label htmlFor="toggle-one"><span className="hover:text-gray-900">Rotunda Digital</span></label>
<a className="hover:text-gray-900 md:ml-5" href="/support">Give</a>

      <a href="https://www.facebook.com/uvapress"><FaFacebookSquare  aria-label="facebook button" className="hover:text-gray-900 text-gray-500" /></a>
      <a href="https://twitter.com/uvapress"><FaTwitterSquare aria-label="twitter button" className="hover:text-gray-900 text-gray-500" /></a>
      <a href="https://www.instagram.com/uvapress"><FaInstagramSquare aria-label="insta button" className="hover:text-gray-900 text-gray-500" /></a>
      <Link to={`/book-search`} > <FaSearch aria-label="search button" className="hover:text-gray-900 text-gray-500" /></Link>
</div>

          <div role="toggle" className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-800">
            <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
              <div className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 className="font-bold text-xl text-white text-bold mb-2">About</h3>
                <div>
                <Link to={`/about`} className="uppercase block text-lg hover:text-gray-300">
                    About UVa Press
              </Link>
                </div>
                <div>
                <Link to={`/publicity`} className="uppercase block text-lg hover:text-gray-300">
      Latest News and Events
    </Link></div>
    <div>
    <Link to={`/about#contact`} className="uppercase block text-lg hover:text-gray-300">
      Contact US
    </Link>
                </div>
                <div>
                <Link to={`/career`} className="uppercase block text-lg hover:text-gray-300">
      Career & Internships
    </Link>
                </div>
                <div>
                <Link to={`/support`} className="uppercase block text-lg hover:text-gray-300">
      Support UVa Press
    </Link>
                </div>
            
              </div>
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 className=" text-xl text-white font-sans mb-2">Books</h3>
                <div>
                <Link to={`/book-search`} className="uppercase block text-lg hover:text-gray-300">
                    Search Books
              </Link>
                </div>
                <div>
                <Link to={`/books`} className="uppercase block text-lg hover:text-gray-300">
                Browse All
                </Link>
                </div>
                <div>
                <Link to={`/recent-books`} className="uppercase block text-lg hover:text-gray-300">
                New Releases
                </Link>
                </div>
                <div>
                <Link to={`/catalog`} className="uppercase block text-lg hover:text-gray-300">
                Seasonal Catalog
                </Link>
                </div>
                <div>
                <Link to={`/all-exhibits`} className="uppercase block text-lg  hover:text-gray-300">
      Conference Exhibits
    </Link>
                </div>
                <div>
                <Link to={`/permissions`} className="uppercase block text-lg   hover:text-gray-300 mr-4">
      Rights and Permissions
    </Link>
                </div>
                <div>
                <Link to={`/order`} className="uppercase block text-lg hover:text-gray-300">
                Vendor Ordering
              </Link>
                </div>
                <div>
                <a href="https://open.upress.virginia.edu/" className="uppercase block text-lg hover:text-gray-300">
                Open Access
              </a>
                </div>
              </ul>
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 className="font-sans text-xl text-white ">For Authors</h3>
                <div>
                <Link to={`/prospective`} className="uppercase block text-lg hover:text-gray-300 mr-4">
      Prospective Authors
    </Link>
                </div>
                <div>
                <Link to={`/authors`} className="uppercase block text-lg hover:text-gray-300 mr-4">
      Current Authors
    </Link>
                </div>
                
              </ul>
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 className="font-sans text-xl text-white ">For Instructors</h3>
                <div>
                <Link to={`/instructors`} className="uppercase block text-lg hover:text-gray-300">
                    Instructor Resource Hub
              </Link>
                <Link to={`/permissions`} className="uppercase block text-lg hover:text-gray-300">
                    Desk/Exam Copy requests
              </Link>
                </div>
                <div>
                <Link to={`/books/#series`} className="uppercase block text-lg hover:text-gray-300">
                    Our Book Series
              </Link>
                </div>
                <div>
                <Link to={`/books/#subjects`} className="uppercase block text-lg hover:text-gray-300">
                    Our Book Subjects
              </Link>
                </div>
                <div>
                <Link to={`/rotunda`} className="uppercase block text-lg hover:text-gray-300">
                    Rotunda Digital Collections
              </Link>
                </div>
                <div>
                <a href="https://open.upress.virginia.edu/" className="uppercase block text-lg hover:text-gray-300">
                Open Access Resources
              </a>
                </div>
              </ul>
              <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3">
                <h3 className="font-bold text-xl text-white text-bold mb-2">Rotunda Digital</h3>
                <div>
                <Link to={`/rotunda`} className="uppercase block text-lg hover:text-gray-300">
                    About Rotunda
              </Link>
                </div>
                <div>
                <a href={`https://rotunda.upress.virginia.edu/entrance.xqy`} className="uppercase block text-lg hover:text-gray-300">
                    Customer Entrance
              </a>
                </div>
                <div>
                <Link to={`/collection/American%20History%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    American History Collection
              </Link>
                </div>
                <div>
                <Link to={`/collection/Literature%20and%20Culture%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    Literature & Culture Collection
              </Link>
                </div>
                <div>
                <Link to={`/collection/Architecture`} className="uppercase block text-lg hover:text-gray-300">
                    Architecture
              </Link>
                </div>
                </ul>
              </div>
            </div>
          </div>
		  
 
      
        </nav>
      </div>
    </nav>
    )
  }
  
  export default MegaHeader
