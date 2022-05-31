import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import { FaPhone, FaMapMarkedAlt, FaEnvelope, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FooterLink from "./FooterLink";

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    uvalogo: file(relativePath: { eq: "rev_uva_logo_color.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    auplogo: file(relativePath: { eq: "aup_member.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    bstack: file(relativePath: { eq: "book-stack.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 75
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`)
const uvaimage = getImage(data.uvalogo)
const aupimage  = getImage(data.auplogo)
const bookstack  = getImage(data.bstack)
    return (
      <footer>
         <div className="border-t-2 border-b-2 text-ceci-gray-mid text-md  grid grid-cols-1 md:grid md:grid-cols-4 items-center">
            <div id="links col-span-1">
              <h6 className="hidden">QuickLinks</h6>
            <div className="px-5 py-4 flex flex-col gap-2 ">
          <FooterLink dest={"book-search"} text="Find a Book"/>
          <FooterLink dest={"authors"} text={"For Our Authors"}/>
          <FooterLink dest={"permissions"} text={"Rights and Permissions"}/>
          <FooterLink dest={"rotunda"} text={"Rotunda Digital Imprint"}/> 
          <FooterLink dest={"support"} text={"Support UVA Press"}/>
          <FooterLink dest={"career"} text={"Career Opportunities"}/>
          <FooterLink dest={"walker-cowen-award"} text={"Walker Cowen Memorial Prize"}/>
          <FooterLink dest={"privacy"} text={"Privacy Policy"}/>
         
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
                <li>Charlottesville, VA 22903-2417</li>
              </ul>
              </section> 
              <section className="flex flex-row  py-2">
              <FaEnvelope className="hidden md:block self-center justify-self-center text-2xl" aria-label="email"/>
                <ul className="flex flex-col md:pl-3">
                  <li className="p-2 md:p-0"><a href="mailto:vapress@virginia.edu">General Inquiries</a></li>
                  <li className="p-2 md:p-0"><Link to={'/staff-list'}>Staff Directory</Link></li>
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
           <div className="flex flex-col px-5"><Link to={`/support`} className="hover:text-gray-300">
           <GatsbyImage image={bookstack} alt="support uva press" />
             <div className="uppercase font-thin py-2 tracking-wide text-xl">Be a part of<br/> the future<br/> of publishing</div><div className="uppercase text-2xl font-bold">          
           
Support UVA Press</div></Link></div>
           <div id="affiliates" className="py-4  col-span-1 px-4 md:py-0"><h6 className="hidden">Affiliates</h6>
           <ul>

             <li><a href="http://www.virginia.edu/"> <GatsbyImage image={uvaimage} alt="uva logo" /> </a></li>
             <li><a href="http://www.aupresses.org"> <GatsbyImage image={aupimage} alt="aup member" /> </a></li>
             </ul></div>
        </div>
        <div className="text-center uppercase text-ceci-gray-mid text-md font-thin tracking-wider py-2">© 2021 UNIVERSITY OF VIRGINIA PRESS</div>
      </footer>
      
    )
  }
  
  export default Footer