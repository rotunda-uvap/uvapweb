import React from 'react'
import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
    return(
<>
        <section className=" w-full md:w-3/4 mx-auto py-5 border-b-2 border-gray-100">
        <Link to={'../title/5628'}> <div className="mx-auto grid gap-4 md:gap-2 grid-cols-2 md:grid-cols-3  place-content-center justify-center content-center  md:w-8/12">
           <div id="1" className="col-span-2 md:col-span-3 py-5 place-content-center"><div className=" text-center pb-5"><StaticImage src="../../static/uvap_logo_full.png" alt="uvap logo" /></div></div> 
           <div id="2" className="col-span-1 flex flex-col justify-center">
             <div className=" font-sans font-light text-sm tracking-wide text-right uppercase">JOHNNETTA BETSCH COLE</div>
             <div className=" font-display text-3xl font-light text-right tracking-wide uppercase">RACISM IN
AMERICAN LIFE</div>
<div className=" font-serif text-xl max-w-xs text-right">a call to action</div>
             </div>
             
            <div id="3" className="col-span-1 flex flex-col justify-center items-center"><div className="self-center">
            <StaticImage width={100} src="https://www.upress.virginia.edu/sites/default/files/covers/5628.jpg" alt="feat book" className="drop-shadow-img" /></div>
              </div>
            
              <div id="4" className="hidden md:block md:col-span-1 py-2 font-serif font-light text-2xl quoted">
            opportunities for honest, interracial, 
            courageous conversations to confront...</div>
            
          </div></Link>
        </section>


       {/* <section className="border-b-2 border-gray-200"><Link to={'../title/5628'}>
         <div className="py-5 flex flex-row justify-center place-content-center"><StaticImage src="../../static/uvap_logo_full.png" alt="uvap logo" /></div>
         <div className="flex flex-1 flex-row justify-center place-content-center space-x-8 py-10 text-gray-600">
         <div className="flex flex-col text-center space-y-1 place-content-center">
           <div className="font-sans font-light text-sm tracking-wide text-right uppercase">JOHNNETTA BETSCH COLE</div>
           <div className="font-display text-3xl font-light text-right w-64 tracking-wide uppercase">RACISM IN
AMERICAN LIFE</div>
           <div className="font-serif text-xl max-w-xs text-right">a call to action</div>
         </div>
         <div><StaticImage width={100} src="https://www.upress.virginia.edu/sites/default/files/covers/5628.jpg" alt="feat book" className="drop-shadow-img" /></div>
         <div className="text-left  font-serif font-light w-64 place-content-center">
           <div className="grid grid-cols-4"><span className="text-4xl col-span-3">&#8220;</span><span>&#x2060;</span></div>
          <div><div className="col-span-4 text-2xl">opportunities
            for honest, interracial,
            "courageous conversations"
            to confront...</div></div>
         <div className="grid grid-cols-4">
           <span>&#x2060;</span>
           <span className="text-5xl col-span-3">&#8221;</span>
           </div>
         </div></div></Link>
       </section> */}
       </>
    )
}

export default Banner

