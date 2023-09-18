import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "OLMS.jpg" }) {
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
                  <div className=" text-ceci-gray-mid font-serif text-sm pl-3 pt-1">2023-08-13</div>
              </div>
                
              <div className="md:px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2 font-thin"  to={`https://olmsted.org/open-access-the-papers-of-frederick-law-olmsted/`}>The Papers of Frederick Law Olmsted Go Open Access</Link>
            <div><p className="font-serif text-ceci-gray-dark leading-relaxed dropCap">Thanks to generous subvention from the Olmsted Network, the <a href="https://rotunda.upress.virginia.edu/founders/OLMS.html">Papers of Frederick Law Olmsted</a> are now freely available to all!</p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`https://olmsted.org/open-access-the-papers-of-frederick-law-olmsted/`}><FaArrowAltCircleRight className="inline mx-4"/>read full press release at the Olmsted Network</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}