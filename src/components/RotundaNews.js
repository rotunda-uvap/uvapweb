import React from "react"
import { Link} from "gatsby"
import {FaArrowAltCircleRight} from "react-icons/fa"

export default function rotundaNews() { 
  return (
    
        <section className="flex flex-row justify-center place-content-center space-x-8 py-10">
            <img src="../static/7bc9ac842932d37df002324345febb9a/9b21f/btwashington.webp"/>
           <article className="flex flex-1 flex-col flex-wrap p-5">
           
            <>
              <div className="flex flex-row px-10"> 
              
                  <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3">rotunda news</div>
                  <div className="tracking-widest font-serif text-xs pl-3">Dec 15, 2020</div>
              </div>
                
              <div className="px-10 flex flex-col">
              <Link className="font-display tracking-wide uppercase py-2" to={`../news/booker-t-washington-has-a-new-charlottesville-connection-a-digital-edition-of-his-papers`}>Booker T. Washington Has a New Charlottesville Connection: A Digital Edition of His Papers</Link>
            <div className="font-serif text-base dropCap"><p>Booker T. Washington, who emerged from slavery to become one of the leading African American intellectuals around the turn of the 20th century, had ties to Charlottesville that eventually led to a city park being named after him.</p> </div>  
            <div className="font-display uppercase text-xs tracking-widest"><Link className="font-display tracking-wide uppercase py-2" to={`../news/booker-t-washington-has-a-new-charlottesville-connection-a-digital-edition-of-his-papers`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link> </div></div>
         
            
            </>
            </article>
          
          
        </section>
     
  )
}