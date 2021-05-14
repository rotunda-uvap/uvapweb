import React from 'react'
import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
    return(
       <section className="border-b-2 border-gray-200"><Link to={'../title/5628'}>
         <div className="py-5 flex flex-row justify-center place-content-center"><StaticImage src="../../static/uvap_logo_full.png" alt="uvap logo" /></div>
         <div className="flex flex-1 flex-row justify-center place-content-center space-x-8 py-10 text-gray-600">
         <div className="flex flex-col text-center space-y-3 place-content-center">
           <div className="font-sans light text-sm tracking-wide text-right uppercase">JOHNNETTA BETSCH COLE</div>
           <div className="font-display text-3xl font-light text-right w-64 tracking-wide uppercase">RACISM IN
AMERICAN LIFE</div>
           <div className="font-serif text-xl max-w-xs text-right">a call to action</div>
         </div>
         <div><StaticImage width={100} src="https://www.upress.virginia.edu/sites/default/files/covers/5628.jpg" alt="feat book" /></div>
         <div className="flex flex-col flex-wrap text-left place-content-center font-serif font-light w-64 text-2xl quoted">opportunities
for honest, interracial,
"courageous conversations"
to confront...</div>
         </div></Link>
       </section>
    )
}

export default Banner

