import React from 'react'
import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Banner = ({id, author, quote, subtitle, book_title, attr}) => {
  const cover = "https://www.upress.virginia.edu/sites/default/files/covers/" + id + ".jpg"
  const booklink = "../../title/" + id

   return (
    <section className=" w-full lg:w-3/4 mx-auto py-5 border-b-2 border-gray-100">
    <Link to={booklink}> <div className="mx-auto grid gap-4 grid-cols-2 lg:grid-cols-3  place-content-center justify-center content-center  ">
       <div id="1" className="col-span-2 lg:col-span-3 py-5 place-content-center"><div className=" text-center pb-5"><StaticImage src="../../static/uvap_logo_full.png" alt="uvap logo" /></div></div> 
       <div id="2" className="col-span-1 flex flex-col justify-center">
         <div className=" font-sans font-light text-xs md:text-xs tracking-wide text-right uppercase">{author}</div>
         <div className=" font-display text-xl md:text-3xl font-light text-right tracking-wide uppercase">{book_title}</div>
<div className=" font-serif text-lg text-xl max-w-xs text-right">{subtitle}</div>
         </div>
         
        <div id="3" className="col-span-1 flex flex-col justify-center items-center"><div className="self-center">
        <img width={200} src={cover} alt="feat book" className="drop-shadow-img" /></div>
          </div>
        
          <div id="4" className="hidden lg:block lg:col-span-1 py-3 font-serif font-light text-2xl quoted self-center">
        {quote}{attr && <div className="self-center italic text-lg">- { attr}</div>}</div>
        
      </div></Link>
    </section>
 
     )
 }
 
 export default Banner


