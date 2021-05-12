import React from "react"
import { Link} from "gatsby"
import Layout from "../components/layout"
import FeatPromo from "../components/FeatPromo"
import FeatNews from "../components/FeatNews"
import FeatExhibit from "../components/FeatExhibit"
import NewsletterMain from "../components/NewsletterMain"
import HomepageBanner from "../components/HomepageBanner"
import rotundaNews from "../components/RotundaNews"

export default function Home() {
  
  return (
    <Layout>

 <HomepageBanner/>

<section className="py-10">
<p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Featured Books:</p>
<div className="md:grid xs:hidden sm:hidden md:grid md:grid-cols-5 md:gap-6 justify-center place-content-center">
    <Link to={`/title/5628`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5628.jpg" className="object-contain object-scale-down shadow-lg"/></Link>
    <Link to={`/title/5617`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5617.jpg" className="object-contain object-scale-down shadow-lg"/></Link>
    <Link to={`/title/5679`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5679.jpg" className="object-contain object-scale-down shadow-lg"/></Link>
    <Link to={`/title/5417`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5417.jpg" className="object-contain object-scale-down shadow-lg "/></Link>
    <Link to={`/title/5493`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5493.jpg" className="object-contain object-scale-down shadow-lg"/></Link>
      </div>
</section>
<section className="border-b-2">
<p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Recent News</p>

      
      <FeatNews/>

      

      <button className="text-lg p-4 w-full uppercase text-center"><Link to={`/publicity`}>see all the latest news</Link></button>
</section>


<section className="py-10 border-b-2">
<p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">rotunda</p>
<rotundaNews/></section>
       
       <section className="py-10 border-b-2">
       <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">exhibits</p>

         <FeatExhibit/>
       </section>
   

<section className="grid grid-cols-3 border-b-2 py-10">
  <div className="col-span-1">
  <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Events:</p>

    <ul>
      <li>Event 1</li>
    <li>Event 1</li>
    <li>Event 1</li>
    </ul>
  </div>  
  <FeatPromo/>
  </section>
  

  <div className="py-10 greige">
        <div className="container mx-auto px-6">
       
       <div>
       <NewsletterMain/>

        </div>  

    </div>
      </div>

    </Layout>
  )
  
}

