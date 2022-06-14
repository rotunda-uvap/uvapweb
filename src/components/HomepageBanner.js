import React from 'react'
import { Link, useStaticQuery, graphql} from "gatsby"
import { GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image"
/* import { IKImage, IKContext } from 'imagekitio-react'
 */



const Banner = ({id, author, quote, subtitle, book_title, attr}) => {
   const cover = "https://ik.imagekit.io/uvapress/" + id + ".jpg"
  // const imageKitPath = id + ".jpg"
  const booklink = "../../title/" + id
  const data = useStaticQuery(graphql`
  query {
    uvalogofull: file(relativePath: { eq: "uvap_logo_full.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality:100
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    
  }
`)
const uvafullimage = getImage(data.uvalogofull)

   return (
    
  
    <section className=" max-w-sm md:max-w-4xl  mx-auto py-5  text-ceci-gray-dark">
 
       <div className="mx-auto grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-3   ">
       <div id="1" className="col-span-2 lg:col-span-3 md:w-full py-5 place-content-center"><div className="px-4 md:px-auto text-center pb-5"><GatsbyImage image={uvafullimage} alt="uva logo" width={400} height={119} className="homepageimage" loading="eager"/></div></div> 
       <div id="2" className="col-span-1 flex flex-col justify-center place-content-center pr-2"><Link to={booklink} aria-label={`click to featured book:${book_title}`}>
         <div className=" mx-auto font-sans font-light justify-self-center text-xs md:text-lg tracking-wide text-ceci-gray-mid text-right uppercase">{author}</div>
         <div className=" font-display text-xl md:text-3xl font-light text-right tracking-wide uppercase">{book_title}</div>
<div className="font-serif py-2 text-lg text-xl max-w-sm text-right text-ceci-gray-mid">{subtitle}</div>
        </Link> </div>
         
        <div id="3" className="col-span-1 flex flex-col justify-center items-center"><div className="self-center">
        <Link to={booklink} aria-label={`click to featured book:${book_title}`}>
         
           {<img src={cover} alt="feat book" width={200} height={375} className="aspect-[67/100] drop-shadow-img homepageimage" loading="eager" /> }
           </Link></div>
          </div>
        
          <div id="4" className="hidden lg:block lg:col-span-1 py-3 font-serif font-light text-2xl quoted self-center text-left md:pl-2">
          <Link to={booklink} aria-label={`click to featured book:${book_title}`}>{quote}{attr && <div className="self-center text-ceci-gray-mid italic text-lg">- { attr}</div>}</Link></div>
        
      </div>
    </section>

     )
 }
 
 export default Banner


