import React from "react"
import {Link } from "gatsby"
import { FaPhone, FaMapMarkedAlt, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
   
    return (
      <footer>
         <div className="border-t-2 border-b-2 text-ceci-gray-mid text-md  grid grid-cols-1 md:grid md:grid-cols-4 items-center">
            <div id="links col-span-1">
              <h6 className="hidden">QuickLinks</h6>
            <div className="px-5 py-4">
            
          <Link to={`/book-search`} className="uppercase  block mt-2   hover:text-gray-300">
            Find a Book
          </Link>
          <Link to={`/authors`} className="uppercase block mt-2    hover:text-gray-300 mr-4">
            For Our Authors
          </Link>
          <Link to={`/permissions/`} href="#responsive-header" className="uppercase  block mt-2   hover:text-gray-300 mr-4">
            Rights and Permissions</Link>
          <Link to={`/rotunda`} className="uppercase block mt-2   hover:text-gray-300">
            ROTUNDA DIGITAL IMPRINT
          </Link>
          <Link to={`/support`} className="uppercase block mt-2  hover:text-gray-300">
            Support UVa Press
          </Link>
          <Link to={`/career`} className="uppercase block mt-2  hover:text-gray-300">
            Career Opportunities
          </Link>
          <Link to={`/walker-cowen-award`} className="uppercase block mt-2   hover:text-gray-300">
            Walker Cowen Memorial Prize
          </Link>
          <Link to={`/privacy`} className="uppercase block mt-2   hover:text-gray-300">
            Privacy Policy
          </Link>
          <div className="flex flex-row py-2">
            <a href="https://www.facebook.com/uvapress" aria-label="facebook" className="pr-2"><FaFacebookSquare  className="text-3xl"/></a>
          <a href="https://twitter.com/uvapress" aria-label="twitter" className="pr-2"><FaTwitterSquare className="text-3xl"/></a>
          <a href="https://www.instagram.com/uvapress" aria-label="instagram" className="pr-2"><FaInstagramSquare className="text-3xl"/></a>
          </div>
          
              </div>
            </div>
            <div id="contact" className="px-5 md:px-0 md:content-center">
            <h6 className="hidden">Contact Us</h6>
              <section className="flex flex-row">
              <FaMapMarkedAlt className="hidden md:block self-center justify-self-center text-2xl" aria-label="physical address"/>
              <ul className=" flex flex-col md:pl-3">
                <li>P.O. Box 400318 (Postal)</li>
                <li>210 Sprigg Lane (Courier)</li>
                <li>Charlottesville, VA 22904-4318</li>
              </ul>
              </section> 
              <section className="flex flex-row  py-2">
              <FaEnvelope className="hidden md:block self-center justify-self-center text-2xl" aria-label="email"/>
                <ul className="flex flex-col md:pl-3">
                  <li><a href="mailto:vapress@virginia.edu">General Inquiries</a></li>
                  <li><Link to={'/staff-list'}>Staff Directory</Link></li>
                </ul>
              </section> 
              <section className="flex flex-row py-2">
              <FaPhone className="hidden md:block self-center justify-self-center text-2xl" aria-label="phone and fax numbers"/>
              <ul className="md:pl-3 flex flex-col">
                <li>434 924-3468 (main)</li>
                <li>1-800-831-3406 (toll-free)</li>
                <li>434 982-2655 (fax)</li>
              </ul>
              </section> 
           </div>
           <div className="flex flex-col"><Link to={`/support`} className="hover:text-gray-300">
             <img src="/book-stack.png" alt="support uva press" width="75px"/>
             <div className="uppercase font-thin py-2 tracking-wide text-xl">Be a part of<br/> the future<br/> of publishing</div><div className="uppercase text-2xl font-bold">          
           
Support UVA Press</div></Link></div>
           <div id="affiliates" className="py-4  col-span-1 px-4 md:py-0"><h6 className="hidden">Affiliates</h6>
           <ul>
             <li><a href="http://www.virginia.edu/"> <img src="/rev_uva_logo_color.png" alt="uva"/> </a></li>
             <li><a href="http://http//www.aupresses.org"> <img src="/aup_member.jpg" alt="aup"/> </a></li>
             </ul></div>
        </div>
         <div className="text-center uppercase text-ceci-gray-mid font-light tracking-wider py-2">© 2021 UNIVERSITY OF VIRGINIA PRESS</div>
      </footer>
      
    )
  }
  
  export default Footer