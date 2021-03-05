import React from 'react'
import "./homepagebanner.css"
import { Link} from "gatsby"

const Donate = () => {
    return(
        <section id="banner" className="pb-10">
        
        <div id="book">
        <h6 className="pt-10 pl-20 uppercase text-sm font-black">Featured Book Cover</h6>

          <Link to={`/title/5626`}><div className="text-box">
          <h4 className="text-2xl text-center text-white">"A Best Book of 2020" <br/>- <span className="font-normal text-lg">Kirkus and LitHub</span> </h4>
          </div></Link>
        </div>
        
          <div id="rotunda">
          <Link to={`/news/booker-t-washington-has-a-new-charlottesville-connection-a-digital-edition-of-his-papers/`}>
              <div className="text-box">
              <h6 className="uppercase text-sm font-black text-white text-center">Rotunda Announcement</h6>

                <h4 className="text-2xl uppercase text-white">Booker T Washington Papers Coming to Rotunda's "American Century" Collection</h4>
            </div>
            </Link></div>

       
          <div id="newsa" className="bg-gray-300">
          <Link to={`/news/celebrating-black-history-month-an-excerpt-from-racism-in-american-public-life-by-dr-johnetta-betsch-cole`}><div className="text-box">
                <h6 className="uppercase text-sm font-black text-white text-center">Featured News</h6>
              <h4 className="text-lg  text-white">Celebrating Black History Month - An Excerpt from RACISM IN AMERICAN PUBLIC LIFE by Dr. Johnetta Betsch Cole</h4>
            </div></Link>
          </div>
          <div id="newsb" className="bg-gray-400">
          <Link to={'//media/listen-uva-press-presents-interview-with-daniel-mendelsohn-and-jahan-ramazani'}><div className="text-box">
            <h6 className="uppercase text-sm font-black text-white text-center">Featured Media</h6>

             <h4 className="text-lg text-white">LISTEN: "UVA PRESS PRESENTS" INTERVIEW WITH DANIEL MENDELSOHN AND JAHAN RAMAZANI


</h4>
            </div></Link>
          </div>
       
        
      </section>  
    )
}

export default Donate

