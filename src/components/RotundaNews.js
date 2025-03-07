import React from "react"
import { graphql, useStaticQuery, Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "rotunda_logo.png" }) {
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
          <div className="text-ceci-gray-mid text-sm pt-1">2024-10</div>
        </div>
  
        <div className="md:px-10 flex flex-col">
          <Link
            className="font-display tracking-wide uppercase py-2 font-thin"
            to={`https://olmsted.org/open-access-the-papers-of-frederick-law-olmsted/`}
          >
            Content Additions
          </Link>
          <div className="font-serif text-ceci-gray-dark leading-relaxed">
            <p>The following volumes were added to our <Link to={'https://www.upress.virginia.edu/rotunda/#ahc'}>American History Collection</Link> in 2024:</p><p>
              <Link to={'https://www.upress.virginia.edu/title/ADMS/'}>
                Papers of John Adams, Volume 21
              </Link>
              <br />
              <Link to={'https://www.upress.virginia.edu/title/TSJN/'}>
                Papers of Thomas Jefferson, Volume 46
              </Link>
              <br />
              <Link to={'https://www.upress.virginia.edu/title/TSJN/'}>
                Papers of Thomas Jefferson, Retirement Series, Volume 19
              </Link>
              <br />
              <Link to={'https://www.upress.virginia.edu/title/JMDE/'}>
                Papers of James Madison, Secretary of State, Volume 13
              </Link>
              <br />
              <Link to={'https://www.upress.virginia.edu/title/RNCN/'}>
                Documentary History of the Ratification of the Constitution,
                Ratification of the Bill of Rights, Volume 2
              </Link>
              <br />
              <Link to={'https://prde.upress.virginia.edu/content/johnson'}>
                Presidential Recordings Digital Edition, Johnson Telephone Tapes,
                Volume 2
              </Link>
              <br />
              <Link to={'https://prde.upress.virginia.edu/content/reagan'}>
                Presidential Recordings Digital Edition, The Presidential
                Recordings of Ronald Reagan
              </Link>
            </p>
          </div>
  
          <div className="font-display uppercase text-xs tracking-widest">
            <Link
              className="inline mx-4"
              to={`https://rotunda.upress.virginia.edu/entrance.xqy/`}
            >
              <FaArrowAltCircleRight className="inline mx-4" />
              See our ROTUNDA Collections
            </Link>
          </div>
        </div>
      </>
    </article>
  </section>
    
     
  )
}