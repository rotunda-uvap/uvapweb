import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "FDR.jpg" }) {
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
    
    <section className="md:flex justify-center mx-auto md:space-x-8 md:ml-5">
    <GatsbyImage className="p-5" image={rotimage} alt="ROTUNDA Digital Imprint" />
    <article className="flex flex-col flex-1 px-2 py-5 md:p-5">
      <>
        <div className="flex items-center md:px-10 space-x-3 font-serif uppercase tracking-wider text-sm text-ceci-gray-dark">
          <div className="border-r-2 pr-2 font-serif uppercase tracking-wider self-center">rotunda news</div>
          <div className="text-ceci-gray-mid text-sm pt-1">2025-05</div>
        </div>
  
        <div className="md:px-10 flex flex-col">
          <Link
            className="font-display tracking-wide uppercase py-2 font-thin"
            to={`https://prde.upress.virginia.edu/`}
          >
            FDR Audio Comes to the Presidential Recordings Digital Edition
          </Link>
          <div className="font-serif text-ceci-gray-dark text-base leading-relaxed">
           <p>This collection of 22 transcripts comprises approximately 6 hours of material recorded by President Franklin D. Roosevelt Sr. from 23 August 1940 through 8 November 1940. It includes the proceedings of 14 news conferences, the private exchanges that immediately preceded and followed those events, and various other conversations with Cabinet members, legislators, White House staffers, foreign officials, and private individuals. Each of these conversations took place in the Oval Office, which Roosevelt outfitted with a recording device in the summer of 1940. </p>
          <p>This content is the latest addition to the <Link to={"https://prde.upress.virginia.edu/"}>Presidential Recordings Digital Edition (PRDE)</Link>, the online portal for annotated transcripts of the White House tapes. Created by a team of scholars and researchers at the <Link to={"https://millercenter.org/"}>University of Virginia’s Miller Center</Link>, and published via our <Link to={"https://www.upress.virginia.edu/rotunda/"}>Rotunda Digital Imprint</Link>, these transcripts are presented in PRDE alongside the corresponding audio, enabling users to read and listen to these conversations simultaneously. PRDE is available via institutional subscription. </p>
          </div>
  
          <div className="font-display uppercase text-sm tracking-widest">
            <Link
              className="inline mx-4"
              to={`https://rotunda.upress.virginia.edu/entrance.xqy/`}
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