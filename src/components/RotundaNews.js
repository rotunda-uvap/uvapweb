import React from "react"
import { Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"

export default function RotundaNews() { 
  return (
    
        <section className="flex flex-row justify-center place-content-center space-x-8 py-10">
            <img alt="booker " src="../static/7bc9ac842932d37df002324345febb9a/9b21f/btwashington.webp"/>
           <article className="flex flex-1 flex-col flex-wrap p-5">
           
            <>
              <div className="flex flex-row px-10"> 
              
                  <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3">rotunda news</div>
                  <div className="tracking-widest font-serif text-xs pl-3">July 4, 2021</div>
              </div>
                
              <div className="px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2" to={`../title/BTWN`}>ROTUNDA Launches the Booker T. Washington Digital Edition</Link>
            <div className="font-serif text-base dropCap"><p>The ROTUNDA digital edition includes the full contents of the 14-volume letterpress edition, including speeches, correspondence, major autobiographical writing, and cumulative index.</p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`../title/BTWN`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}