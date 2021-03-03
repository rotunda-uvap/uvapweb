import React from 'react'
import "./homepagebanner.css"
import { Link} from "gatsby"

const Donate = () => {
    return(
        <section id="banner" className="mb-5">
        
        <div id="book">
          <Link to={`/title/5626`}><div className="text-box">
          <h4 className="font-black text-2xl text-center text-white">"A Best Book of 2020" <br/>- <span className="font-normal text-lg">Kirkus and LitHub</span> </h4>
          </div></Link>
        </div>
        
          <div id="rotunda">
          <Link to={`/news/booker-t-washington-has-a-new-charlottesville-connection-a-digital-edition-of-his-papers/`}>
              <div className="text-box">
                <h4 className="text-3xl font-black text-white">Booker T Washington Papers Coming to Rotunda's "American Century" Collection</h4>
            </div>
            </Link></div>

         
       
          <div id="newsa">
          <Link to={`/news/interview-with-dr-adrian-brettle-author-of-colossal-ambitions-confederate-planning-for-a-post-civil-war-world`}><div className="text-box">
                <h6 className="uppercase text-md font-black text-white text-center">News</h6>
              <h4 className="text-lg font-black text-white">INTERVIEW WITH DR. ADRIAN BRETTLE, AUTHOR OF COLOSSAL AMBITIONS: CONFEDERATE PLANNING FOR A POST-CIVIL WAR WORLD</h4>
            </div></Link>
          </div>
          <div id="newsb">
          <Link to={'/media/listen-uva-press-presents-interview-with-walter-hood-and-grace-mitchell-tada-on-black-landscapes-matter'}><div className="text-box">
            <h6 className="uppercase text-md font-black text-white text-center">Media</h6>

             <h4 className="text-lg font-black text-white">LISTEN: "UVA PRESS PRESENTS" INTERVIEW WITH WALTER HOOD AND GRACE MITCHELL TADA ON BLACK LANDSCAPES MATTER

</h4>
            </div></Link>
          </div>
       
        
      </section>  
    )
}

export default Donate

