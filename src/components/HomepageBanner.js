import React from 'react'
import { Link, useStaticQuery, graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Banner = ({id, author, quote, subtitle, book_title, attr}) => {
  const cover = "https://ik.imagekit.io/uvapress/" + id + ".jpg"
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
    <section className=" w-full md:w-3/4 lg:w-2/3 mx-auto py-5  text-ceci-gray-dark">
   
       <div className="mx-auto grid gap-4 grid-cols-2 lg:grid-cols-3  place-content-center justify-center content-center  ">
       <div id="1" className="col-span-2 lg:col-span-3 w-full py-5 place-content-center"><div className=" text-center pb-5"><GatsbyImage image={uvafullimage} alt="uva logo"width={500} height={119} className="homepageimage" /></div></div> 
       <div id="2" className="col-span-1  flex flex-col justify-center"><Link to={booklink}>
         <div className=" font-sans font-light text-xs md:text-lg tracking-wide text-ceci-gray-mid text-right uppercase">{author}</div>
         <div className=" font-display text-xl md:text-3xl font-light text-right tracking-wide uppercase">{book_title}</div>
<div className="font-serif py-2 text-lg text-xl max-w-sm text-right text-ceci-gray-mid">{subtitle}</div>
        </Link> </div>
         
        <div id="3" className="col-span-1 flex flex-col justify-center items-center"><div className="self-center">
        <Link to={booklink}> <img width={200} height={112} src={cover} alt="feat book" className="drop-shadow-img homepageimage" /></Link></div>
          </div>
        
          <div id="4" className="hidden lg:block lg:col-span-1 py-3 font-serif font-light text-2xl quoted self-center text-left">
          <Link to={booklink}>{quote}{attr && <div className="self-center text-ceci-gray-mid italic text-lg">- { attr}</div>}</Link></div>
        
      </div>
    </section>
 
     )
 }
 
 export default Banner


