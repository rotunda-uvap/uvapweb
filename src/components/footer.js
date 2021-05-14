import React from "react"
import {Link } from "gatsby"
import { FaPhone, FaMapMarkedAlt, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
   
    return (
      <footer className="body-font border-t-2 border-b-2 text-gray-500 text-sm  md:grid md:grid-cols-4 items-center">
         
            <div id="links col-span-1">
              <h6 className="hidden">QuickLinks</h6>
            <div className="px-5 py-2">
            
          <Link to={`/book-search`} className="uppercase text-xs block mt-2   hover:text-gray-300">
            Find a Book
          </Link>
          <Link to={`/authors`} className="uppercase block mt-2  text-xs  hover:text-gray-300 mr-4">
            For Our Authors
          </Link>
          <Link to={`/permissions/`} href="#responsive-header" className="uppercase text-xs block mt-2   hover:text-gray-300 mr-4">
            Rights and Permissions</Link>
          <Link to={`/rotunda`} className="uppercase block mt-2  text-xs  hover:text-gray-300">
            ROTUNDA DIGITAL IMPRINT
          </Link>
          <Link to={`/support`} className="uppercase block mt-2 text-xs hover:text-gray-300">
            Support UVa Press
          </Link>
          <Link to={`/career`} className="uppercase block mt-2 text-xs  hover:text-gray-300">
            Career Opportunities
          </Link>
          <div className="flex flex-row py-2">
            <a href="https://www.facebook.com/uvapress" aria-label="facebook" className="pr-2"><FaFacebookSquare/></a>
          <a href="https://twitter.com/uvapress" aria-label="twitter" className="pr-2"><FaTwitterSquare/></a>
          <a href="https://www.instagram.com/uvapress" aria-label="instagram" className="pr-2"><FaInstagramSquare/></a>
          </div>
          
              </div>
            </div>
            <div id="contact" className="content-center col-span-2">
            <h6 className="hidden">Contact Us</h6>
              <section className="grid grid-cols-3 pt-7">
              <FaMapMarkedAlt className="self-center justify-self-center text-2xl" aria-label="physical address"/>
              <ul className="col-span-2 flex flex-col">
                <li>P.O. Box 400318 (Postal)</li>
                <li>210 Sprigg Lane (Courier)</li>
                <li>Charlottesville, VA 22904-4318</li>
              </ul>
              </section> 
              <section className="grid grid-cols-3  py-2">
              <FaEnvelope className="self-center justify-self-center text-2xl" aria-label="email"/>
                <ul className="col-span-2 flex flex-col">
                  <li><a href="mailto:vapress@virginia.edu">General Inquiries</a></li>
                  <li><Link to={'/staff-list'}>Staff Directory</Link></li>
                </ul>
              </section> 
              <section className="grid grid-cols-3  py-2">
              <FaPhone className="self-center justify-self-center text-2xl" aria-label="phone and fax numbers"/>
              <ul className="col-span-2 flex flex-col">
                <li>434 924-3468 (main)</li>
                <li>1-800-831-3406 (toll-free)</li>
                <li>434 982-2655 (fax)</li>
              </ul>
              </section> 
           </div>
           <div id="affiliates" className="py-4  col-span-1 px-4 md:py-0"><h6 className="hidden">Affiliates</h6>
           <ul>
             <li><a href="http://www.virginia.edu/"> <img src="/uva_white.png" alt="uva"/> </a></li>
             <li><a href="http://http//www.aupresses.org"> <img src="/aup_member.jpg" alt="aup"/> </a></li>
             </ul></div>
         
      </footer>
    )
  }
  
  export default Footer