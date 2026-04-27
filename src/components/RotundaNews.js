import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RotundaNews() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "tge_hall.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            quality: 85
            width: 500
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)
  const rotimage = getImage(data.image)

  return (
    <section className="md:flex justify-center mx-auto md:space-x-8 md:ml-5">
      <GatsbyImage
        className="px-5 pb-5 pt-5 md:block mx-auto md:self-start md:shrink-0 md:max-w-xs lg:max-w-none"
        image={rotimage}
        alt="ROTUNDA Digital Imprint"
      />
      <article className="flex flex-col flex-1 px-2 py-5 md:p-5">
        <div className="flex items-center md:px-10 space-x-3 font-serif uppercase tracking-wider text-sm text-ceci-gray-dark">
          <div className="border-r-2 pr-2 font-serif uppercase tracking-wider self-center">rotunda news</div>
          <div className="text-ceci-gray-mid text-sm pt-1">2026-04</div>
        </div>

        <div className="md:px-10 flex flex-col">
          <h5 className="font-display tracking-wide uppercase py-2 font-thin">
            <a
              href="https://upress.virginia.edu/great-experiment"
              target="_blank"
              rel="noopener noreferrer"
            >
              Experience the Constitutional Convention in Virtual Reality
            </a>
          </h5>
          <div className="font-serif text-ceci-gray-dark text-base leading-relaxed">
            <p>An innovative new resource resulting from half a decade of development, The Great Experiment places users within a virtual Independence Hall in Philadelphia during the Constitutional Convention of 1787. Through a series of progressively immersive and interactive stages, participants join the country’s founders as they discuss and debate how to select the chief executive of the new republic.</p>
            <p>The Great Experiment is being offered as a virtual reality app to primary and secondary schools and universities, museums and historical sites, researchers and scholars, and any individual wanting to learn more about the Constitution, the Constitutional Convention, and the origins of the Electoral College. State-of-the-art spatial computing and immersive content combine to bring to life some of the most iconic personages in American history, from George Washington and Ben Franklin to James Madison and Gouverneur Morris. Like the Constitutional Convention itself, The Great Experiment is vital, visionary, and something wholly new.</p>
            <p><a href="https://upress.virginia.edu/great-experiment" target="_blank" rel="noopener noreferrer">Read more here</a> or visit the <a href="https://www.su.edu/scil/projects/the-great-experiment/" target="_blank" rel="noopener noreferrer">project homepage</a> at Shenandoah University</p>
          </div>

          <div className="font-display uppercase text-sm tracking-widest">
            <Link className="flex items-center gap-2 mx-4" to="/rotunda">
              <FaArrowAltCircleRight aria-hidden="true" focusable="false" />
              See all ROTUNDA Collections
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}
