import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import { FaSearch } from "react-icons/fa";
import "./sidebar.css"


const Burger = () => {
 
    return (
      <div className="burger-menu">
        <Link to={`/book-search`}> <FaSearch className="text-right search-icon text-gray-700" /></Link>
        <h6 className="text-right menu-text text-gray-700 uppercase">Menu</h6>
        <Menu right isOpen={ false } noOverlay width={ 400 }>
        <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0 " id="about" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="about">ABOUT</label>
               <div className="tab-content overflow-hidden leading-normal">
               <Link to={`/about`} className="uppercase block text-lg hover:text-gray-300">
                    About UVa Press
              </Link>
              <Link to={`/publicity`} className="uppercase block text-lg hover:text-gray-300">
      Latest News and Events
    </Link>
              <Link to={`/about#contact`} className="uppercase block text-lg hover:text-gray-300 mr-4">
      Contact US
    </Link>
    <Link to={`/career`} className="uppercase block text-lg hover:text-gray-300">
      Career Opportunities
    </Link>
              <Link to={`/support`} className="uppercase block text-lg  hover:text-gray-300">
      Support UVa Press
    </Link>
              

               </div>
            </div>
        <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0 " id="books" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="books">BOOKS</label>
               <div className="tab-content overflow-hidden leading-normal">
               <Link to={`/book-search`} className="uppercase block text-lg hover:text-gray-300">
                    Search Books
              </Link>
              <Link to={`/books`} className="uppercase block text-lg hover:text-gray-300">
                Browse All
                </Link>
                <Link to={`/recent-books`} className="uppercase block text-lg hover:text-gray-300">
                New Releases
                </Link>
                <Link to={`/catalog`} className="uppercase block text-lg hover:text-gray-300">
                Seasonal Catalog
                </Link>
                <Link to={`/all-exhibits`} className="uppercase block text-lg  hover:text-gray-300">
      Conference Exhibits
    </Link>
    <Link to={`/permissions`} className="uppercase block text-lg   hover:text-gray-300 mr-4">
      Rights and Permissions
    </Link>
                <Link to={`/order`} className="uppercase block text-lg hover:text-gray-300">
                Vendor Ordering
              </Link>
              <Link to={`#`} className="uppercase block text-lg hover:text-gray-300">
                Open Access
              </Link>

               </div>
            </div>
        <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0 " id="authors" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="authors">FOR AUTHORS</label>
               <div className="tab-content overflow-hidden leading-normal">
               <Link to={`/prospective`} className="uppercase block text-lg hover:text-gray-300 mr-4">
      Prospective Authors
    </Link>
    <Link to={`/authors`} className="uppercase block text-lg hover:text-gray-300 mr-4">
      Current Authors
    </Link>
              

               </div>
            </div>
            <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0 " id="instructors" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="instructors">FOR INSTRUCTORS</label>
               <div className="tab-content overflow-hidden leading-normal">
               <Link to={`/permissions`} className="uppercase block text-lg hover:text-gray-300">
                    Desk/Exam Copy requests
              </Link>
              <a href={`/books/#series`} className="uppercase block text-lg hover:text-gray-300">
                    Our Book Series
              </a>
              <Link to={`/books/#subjects`} className="uppercase block text-lg hover:text-gray-300">
                    Our Book Subjects
              </Link>
              <Link to={`/collection/American%20History%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    Rotunda's History Collection
              </Link>
              <Link to={`/collection/Literature%20and%20Culture%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    Rotunda's Literature Collection
              </Link>
               </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0 " id="rotunda" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="rotunda">ROTUNDA DIGITAL</label>
               <div className="tab-content overflow-hidden leading-normal">
               <Link to={`/rotunda`} className="uppercase block text-lg hover:text-gray-300">
                    About Rotunda
              </Link>
              <a href={`https://rotunda.upress.virginia.edu/entrance.xqy`} className="uppercase block text-lg hover:text-gray-300">
                    Customer Entrance
              </a>
              <Link to={`/collection/American%20History%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    American History Collection
              </Link>
              <Link to={`/collection/Literature%20and%20Culture%20Collection`} className="uppercase block text-lg hover:text-gray-300">
                    Literature & Culture Collection
              </Link>
              <Link to={`/collection/Architecture`} className="uppercase block text-lg hover:text-gray-300">
                    Architecture
              </Link>
               </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
               <input className="absolute opacity-0 " id="social" type="checkbox" name="tabs"/>
               <label className="block p-5 leading-normal cursor-pointer" htmlFor="social">SOCIAL</label>
               <div className="tab-content overflow-hidden leading-normal">
               <a href="https://www.facebook.com/uvapress" className="hover:text-gray-300 text-lg uppercase block">Facebook</a>
     <a href="https://twitter.com/uvapress"  className="hover:text-gray-300 uppercase text-lg block">Twitter</a>
      <a href="https://www.instagram.com/uvapress"  className="hover:text-gray-300 uppercase text-lg block">Insta</a> 
               </div>
        </div>
  
  
    
        </Menu>
      </div>
    )
  }
  
  export default Burger