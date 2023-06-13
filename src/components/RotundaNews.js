import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "franklin.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality: 100
          width: 300
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
    `)
    const rotimage = getImage(data.image)
  return (
    
        <section className="md:flex md:flex-row justify-center place-content-center md:space-x-8">
          <GatsbyImage image={rotimage} alt="Founders Online" />
           <article className="flex flex-1 flex-col flex-wrap px-2 py-5 md:p-5">
           
            <>
              <div className="flex flex-row md:px-10 "> 
              
                  <div className="border-r-2 font-serif uppercase tracking-wider text-sm self-center text-ceci-gray-dark font-serif text-md pr-3">rotunda news</div>
                  <div className=" text-ceci-gray-mid font-serif text-sm pl-3 pt-1">2023-06-13</div>
              </div>
                
              <div className="md:px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2 font-thin"  to={`https://founders.archives.gov/`}>ROTUNDA celebrates 10th Anniversary of Founders Online</Link>
            <div><p className="font-serif text-ceci-gray-dark leading-relaxed dropCap">Ten years ago, UVA Press, supported by the National Archives and the National Historial Publications and Records Commission, launched the website for Founders Online, an open access version of much of ROTUNDA's Founding Era content. Through this website, you can read and search through thousands of records from George Washington, Benjamin Franklin, Alexander Hamilton, John Jay, John Adams, Thomas Jefferson, and James Madison and see firsthand the growth of democracy and the birth of the Republic. </p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`https://founders.archives.gov/`}><FaArrowAltCircleRight className="inline mx-4"/>visit Founders Online</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}