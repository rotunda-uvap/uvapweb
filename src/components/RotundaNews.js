import React from "react"
import { Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  return (
    
        <section className="md:flex md:flex-row justify-center place-content-center md:space-x-8">
            <StaticImage  width={300} src="../images/btwn_entr.png" alt="Booker T Washington Digital Edition" />
           <article className="flex flex-1 flex-col flex-wrap px-2 py-5 md:p-5">
           
            <>
              <div className="flex flex-row md:px-10 "> 
              
                  <div className="border-r-2 border-gray-600 uppercase tracking-wider text-ceci-gray-dark font-serif text-md pr-3">rotunda news</div>
                  <div className="tracking-widest text-ceci-gray-mid font-serif text-xs pl-3 pt-1">July 4, 2021</div>
              </div>
                
              <div className="md:px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2" to={`../title/BTWN`}>ROTUNDA Launches the Booker T. Washington Digital Edition</Link>
            <div><p className="font-serif text-md text-ceci-gray-dark leading-relaxed dropCap">The ROTUNDA digital edition includes the full contents of the 14-volume letterpress edition, including speeches, correspondence, major autobiographical writing, and cumulative index.</p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`../title/BTWN`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}