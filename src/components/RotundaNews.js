import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "hollydm.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality: 100
          width: 250
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
    `)
    const rotimage = getImage(data.image)
  return (
    
    <section className="md:flex justify-center mx-auto md:space-x-8 md:ml-5">
    <GatsbyImage className="p-5" image={rotimage} alt="ROTUNDA Digital Imprint" />
    <article className="flex flex-col flex-1 px-2 py-5 md:p-5">
      <>
        <div className="flex items-center md:px-10 space-x-3 font-serif uppercase tracking-wider text-sm text-ceci-gray-dark">
          <div className="border-r-2 pr-2 font-serif uppercase tracking-wider self-center">rotunda news</div>
          <div className="text-ceci-gray-mid text-sm pt-1">2025-12</div>
        </div>
  
        <div className="md:px-10 flex flex-col">
          <Link
            className="font-display tracking-wide uppercase py-2 font-thin"
            to={`https://www.eastwingmagazine.com/p/holly-shulman-named-2025-gould-award`}
          >
            Dr. Holly Schulman wins Award for Career, Work on The Dolley Madison Digital Edition
          </Link>
          <div className="font-serif text-ceci-gray-dark text-base leading-relaxed">
           <p>We're delighted to report that the <Link to={"https://www.upress.virginia.edu/title/2913/"}>UVAP author</Link> and historian repsonsible for Rotunda's first publication, the <Link to={"https://rotunda.upress.virginia.edu/dmde/"}>Dolley Madison Digital Edition</Link>, Dr. Holly Schulman, has won the 2025 GOULD award from the First Ladies Association for Research and Education for her achievements and trailblazing approach to digital scholarship. Dr. Schulman's vision for an authoritative online resource of Dolley's correspondence was instrumental in shaping the first decade of digital scholarly publishing and Rotunda's brand in the field of documentary editing. </p>
          <p><Link to={"https://www.eastwingmagazine.com/p/holly-shulman-named-2025-gould-award"}>Read more here</Link> from coverage in East Wing Magazine, or request that your institution to acquire the <Link to={"https://rotunda.upress.virginia.edu/dmde/"}>Dolley Madison Digital Edition</Link> which in 2024 celebrated its 20th year online!</p>
          </div>
  
          <div className="font-display uppercase text-sm tracking-widest">
            <Link
              className="inline mx-4"
              to={`/rotunda`}
            >
              <FaArrowAltCircleRight className="inline mx-4" />
              See all ROTUNDA Collections
            </Link>
          </div>
        </div>
      </>
    </article>
  </section>
    
     
  )
}