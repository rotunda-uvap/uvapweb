import React from "react"
import { FaSearch,FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import {Link } from "gatsby"
import "./megamenu.css"


const MegaHeader = () => {
  
    return (
        <nav className="text-gray-500 uppercase light border-b-2 border-t-2 flex flex-row justify-center place-content-center z-40">
        <div className="flex flex-row justify-center place-content-center">
 
    <nav class="flex">
	 
      <div class="toggleable">
        <input type="checkbox" value="selected" id="toggle-one" class="toggle-input"/>
          
<div className="space-x-6 flex flex-wrap items-center justify-center place-content-center py-3 text-sm">
<a className="hover:text-gray-900 md:ml-5" href="/">Home</a>
<label for="toggle-one"><a className="hover:text-gray-900">About</a></label>
<label for="toggle-one"><a className="hover:text-gray-900">Books</a></label>
<label for="toggle-one"><a className="hover:text-gray-900">For Authors</a></label>
<label for="toggle-one"><a className="hover:text-gray-900">For Instructors</a></label>
<label for="toggle-one"><a className="hover:text-gray-900">Rotunda Digital</a></label>
      <a href="https://www.facebook.com/uvapress"><FaFacebookSquare className="hover:text-gray-900 text-gray-500" /></a>
      <a href="https://twitter.com/uvapress"><FaTwitterSquare className="hover:text-gray-900 text-gray-500" /></a>
      <a href="https://www.instagram.com/uvapress"><FaInstagramSquare className="hover:text-gray-900 text-gray-500" /></a>
      <Link to={`/book-search`} > <FaSearch className="hover:text-gray-900 text-gray-500" /></Link>
</div>

          <div role="toggle" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-800">
            <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">About</h3>
                <li>
                <Link to={`/about`} className="uppercase block text-lg hover:text-gray-300">
                    About UVa Press
              </Link>
                </li>
                <li>
                <Link to={`/publicity`} className="uppercase block text-lg hover:text-gray-300">
      Latest News and Events
    </Link></li>
    <li>
    <Link to={`/about#contact`} className="uppercase block text-lg hover:text-gray-300">
      Contact US
    </Link>
                </li>
                <li>
                <Link to={`/career`} className="uppercase block text-lg hover:text-gray-300">
      Career Opportunities
    </Link>
                </li>
                <li>
                <Link to={`/support`} className="uppercase block text-lg hover:text-gray-300">
      Support UVa Press
    </Link>
                </li>
            
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class=" text-xl text-white font-sans mb-2">Books</h3>
                <li>
                <Link to={`/book-search`} className="uppercase block text-lg hover:text-gray-300">
                    Search Books
              </Link>
                </li>
                <li>
                <Link to={`/books`} className="uppercase block text-lg hover:text-gray-300">
                Browse All
                </Link>
                </li>
                <li>
                <Link to={`/recent-books`} className="uppercase block text-lg hover:text-gray-300">
                New Releases
                </Link>
                </li>
                <li>
                <Link to={`/catalog`} className="uppercase block text-lg hover:text-gray-300">
                Seasonal Catalog
                </Link>
                </li>
                <li>
                <Link to={`/all-exhibits`} className="uppercase block text-lg  hover:text-gray-300">
      Conference Exhibits
    </Link>
                </li>
                <li>
                <Link to={`/permissions`} className="uppercase block text-lg   hover:text-gray-300 mr-4">
      Rights and Permissions
    </Link>
                </li>
                <li>
                <Link to={`/order`} className="uppercase block text-lg hover:text-gray-300">
                Vendor Ordering
              </Link>
                </li>
                <li>
                <Link to={`#`} className="uppercase block text-lg hover:text-gray-300">
                Open Access
              </Link>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-sans text-xl text-white ">For Authors</h3>
                <li>
                <Link to={`/prospective`} className="uppercase block text-lg hover:text-gray-300 mr-4">
      Prospective Authors
    </Link>
                </li>
                <li>
                <Link to={`/authors`} className="uppercase block text-lg hover:text-gray-300 mr-4">
      Current Authors
    </Link>
                </li>
                
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                <h3 class="font-sans text-xl text-white ">For Instructors</h3>
                <li>
                <Link to={`/permissions`} className="uppercase block text-lg hover:text-gray-300">
                    Desk/Exam Copy requests
              </Link>
                </li>
                <li>
                <Link to={`/books/#series`} className="uppercase block text-lg hover:text-gray-300">
                    Our Book Series
              </Link>
                </li>
                <li>
                <Link to={`/books/#subjects`} className="uppercase block text-lg hover:text-gray-300">
                    Our Book Subjects
              </Link>
                </li>
                <li>
                <Link to={`/collection/American%20History%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    Rotunda's History Collection
              </Link>
                </li>
                <li>
                <Link to={`/collection/Literature%20and%20Culture%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    Rotunda's Literature Collection
              </Link>
                </li>
              </ul>
              <ul class="px-4 w-full sm:w-1/2 lg:w-1/5 border-gray-600 pb-6 pt-6 lg:pt-3">
                <h3 class="font-bold text-xl text-white text-bold mb-2">Rotunda Digital</h3>
                <li>
                <Link to={`/rotunda`} className="uppercase block text-lg hover:text-gray-300">
                    About Rotunda
              </Link>
                </li>
                <li>
                <a href={`https://rotunda.upress.virginia.edu/entrance.xqy`} className="uppercase block text-lg hover:text-gray-300">
                    Customer Entrance
              </a>
                </li>
                <li>
                <Link to={`/collection/American%20History%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    American History Collection
              </Link>
                </li>
                <li>
                <Link to={`/collection/Literature%20and%20Culture%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    Literature & Culture Collection
              </Link>
                </li>
                <li>
                <Link to={`/collection/Architecture`} className="uppercase block text-lg hover:text-gray-300">
                    Architecture
              </Link>
                </li>
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
