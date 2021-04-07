import React from 'react'
import "./homepagebanner.css"
import { Link} from "gatsby"

const Donate = () => {
    return(
        <section id="banner" className="pb-10">
        
        <div id="book">
        {/* <h6 className="pt-10 pl-20 uppercase text-sm font-black">Featured Book Cover</h6> */}

          <Link to={`/title/5626`}><div className="text-box bg-black">
          <h4 className="text-2xl text-center text-white">"A Best Book of 2020" <br/>- <span className="font-normal text-lg">Kirkus and LitHub</span> </h4>
          </div></Link>
        </div>
        
          <div id="rotunda">
          <Link to={`/news/booker-t-washington-has-a-new-charlottesville-connection-a-digital-edition-of-his-papers/`}>
              <div className="text-box">
              <h6 className="uppercase text-sm font-black text-white text-left">Rotunda Announcement</h6>

                <h4 className="text-2xl font-medium uppercase text-left text-white leading-relaxed">Booker T Washington Papers Coming to Rotunda's "American Century" Collection</h4>
            </div>
            </Link></div>

       
          <div id="newsa" className="bg-gray-300">
          <Link to={`/news/uva-press-announces-new-series-the-black-soldier-in-war-and-society`}><div className="text-box">
                <h6 className="uppercase text-sm font-black text-white text-center">Featured News</h6>
              <h4 className="text-2xl font-medium text-white">UVA PRESS ANNOUNCES NEW SERIES "THE BLACK SOLDIER IN WAR AND SOCIETY"</h4>
            </div></Link>
          </div>
          <div id="newsb" className="bg-white">
          <Link to={'/media/listen-uva-press-presents-interview-with-daniel-mendelsohn-and-jahan-ramazani'}>
            <div className="text-box-media">
            <h6 className="uppercase text-sm font-black text-gray-700 text-center">Featured Media</h6>

            <div className="flex"><img className="float-left m-2" src="https://www.upress.virginia.edu/sites/default/files/UVA_Press_Presents_logo.png" width="150px;"></img><h4 className="text-xl text-gray-800 px-2">LISTEN: "UVA PRESS PRESENTS" INTERVIEW WITH DANIEL MENDELSOHN AND JAHAN RAMAZANI
</h4></div>
            </div></Link>
          </div>
       
        
      </section>  
    )
}

export default Donate

