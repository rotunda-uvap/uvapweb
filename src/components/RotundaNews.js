import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "arch_sm.png" }) {
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
          <GatsbyImage image={rotimage} alt="SAH Archipedia" />
           <article className="flex flex-1 flex-col flex-wrap px-2 py-5 md:p-5">
           
            <>
              <div className="flex flex-row md:px-10 "> 
              
                  <div className="border-r-2 font-serif uppercase tracking-wider text-sm self-center text-ceci-gray-dark font-serif text-md pr-3">rotunda news</div>
                  <div className=" text-ceci-gray-mid font-serif text-sm pl-3 pt-1">2023-06-13</div>
              </div>
                
              <div className="md:px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2 font-thin"  to={`https://www.sah.org/about-sah/news/news-detail/2023/07/24/celebrating-10-years-of-sah-archipedia`}>SAH Archipedia Turns Ten!</Link>
            <div><p className="font-serif text-ceci-gray-dark leading-relaxed dropCap">A decade ago, the Society of Architectural Historians and University of Virginia Press first published <a href="https://sah-archipedia.org/">SAH Archipedia</a>, the authoritative online architectural encyclopedia of the U.S. built environment. Since then, over a million visitors have enjoyed the essays, entries, and images of sites all over the country—from prehistoric to contemporary, vernacular to high style, landscapes to urban settings.</p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`https://www.sah.org/about-sah/news/news-detail/2023/07/24/celebrating-10-years-of-sah-archipedia`}><FaArrowAltCircleRight className="inline mx-4"/>read full article at SAH.org</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}