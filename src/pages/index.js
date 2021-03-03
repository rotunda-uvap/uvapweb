import React from "react"
import { Link} from "gatsby"
import Layout from "../components/layout"
import FeatMedia from "../components/FeatMedia"
import FeatPromo from "../components/FeatPromo"
import NewsletterMain from "../components/NewsletterMain"
import FeatExhibit from "../components/FeatExhibit"
import FeatNews from "../components/FeatNews"
import RotundaPromo from "../components/RotundaPromo"
import { FaSearch } from "react-icons/fa";
import HomepageBanner from "../components/HomepageBanner"

export default function Home() {
  
  return (
    <Layout>

 <HomepageBanner/>

<section>
<div className="grid md:grid-cols-4 md:gap-4 py-7 bg-gray-100 ">
<article className="flex flex-wrap place-content-center p-5 hover:bg-black hover:text-white">
              <div><button className="px-4 py-2 border-2 border-gray-700 uppercase">search</button></div>
                <div className="mx-auto w-4/5 py-10 flex flex-col justify-center">
                <FaSearch className="self-center" />
                <div className="mx-auto"><h3 className="text-xl font-black uppercase py-5 text-center"><Link to={'/book-search'}>Find a book</Link></h3>
            </div>  
            </div>  
      </article>
      <FeatNews/>
      <FeatMedia />
     <FeatExhibit/>

      
      </div>
      <button className="bg-black text-lg text-white p-4 w-full uppercase text-center"><Link to={`/news-posts`}>see all news posts</Link></button>
</section>

<div className="py-10 bg-gray-300">
        <RotundaPromo/>
      </div>

<section><FeatPromo/></section>
  

  <div className="py-10 bg-gray-500">
        <div className="container mx-auto px-6">
        <div className="bg-cover bg-center h-auto text-white py-5 px-10 object-fill">
       <div>
       <NewsletterMain/>

        </div>  
    </div>
    </div>
      </div>

    </Layout>
  )
  
}

