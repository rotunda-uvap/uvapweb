import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "OLMS_home.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality: 70
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
          <GatsbyImage image={rotimage} alt="Papers of Frederick Law Olmsted Digital Edition" />
           <article className="flex flex-1 flex-col flex-wrap px-2 py-5 md:p-5">
           
            <>
              <div className="flex flex-row md:px-10 "> 
              
                  <div className="border-r-2 font-serif uppercase tracking-wider text-sm self-center text-ceci-gray-dark font-serif text-md pr-3">rotunda news</div>
                  <div className=" text-ceci-gray-mid font-serif text-sm pl-3 pt-1">2022-04-26</div>
              </div>
                
              <div className="md:px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2 font-thin"  to={`../title/OLMS`}>ROTUNDA Launches the Papers of Frederick Law Olmsted Digital Edition</Link>
            <div><p className="font-serif text-sm text-ceci-gray-dark leading-relaxed dropCap">The latest title in ROTUNDA's American History Collection is a fully searchable online edition of the Papers of Frederick Law Olmsted. This digital archive is available through institutional subscription. </p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`../title/OLMS`}><FaArrowAltCircleRight className="inline mx-4"/>More information and free trial</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}