import React from "react"
import { Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"

export default function RotundaNews() { 
  return (
    
        <section className="md:flex md:flex-row justify-center place-content-center md:space-x-8">
            <StaticImage  width={300} src="../images/monroe_home.png" alt="Papers of James Monroe Digital Edition" />
           <article className="flex flex-1 flex-col flex-wrap px-2 py-5 md:p-5">
           
            <>
              <div className="flex flex-row md:px-10 "> 
              
                  <div className="border-r-2 border-gray-600 uppercase tracking-wider text-ceci-gray-dark font-serif text-md pr-3">rotunda news</div>
                  <div className="tracking-widest text-ceci-gray-mid font-serif text-xs pl-3 pt-1">January 25, 2022</div>
              </div>
                
              <div className="md:px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2" to={`../title/MONR`}>ROTUNDA Launches the Papers of James Monroe Digital Edition</Link>
            <div><p className="font-serif text-md text-ceci-gray-dark leading-relaxed dropCap">The latest title in ROTUNDA's American Founding Era Collection is a fully searchable online edition of the Papers of James Monroe. This digital archive on one of America's most notable presidents and statesmen is available for subscription through your library or institution.</p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`../title/MONR`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}