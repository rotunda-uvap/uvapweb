import React from "react"
import { Link} from "gatsby"
import Layout from "../components/layout"
import FeatPromo from "../components/FeatPromo"
import FeatMedia from "../components/FeatMedia"
import FeatExhibit from "../components/FeatExhibit"
import FeatNews from "../components/FeatNews"
import NewsletterMain from "../components/NewsletterMain"
import RotundaPromo from "../components/RotundaPromo"
import { FaSearch } from "react-icons/fa";
import HomepageBanner from "../components/HomepageBanner"

export default function Home() {
  
  return (
    <Layout>

 <HomepageBanner/>

<section className="py-10">
<p className="font-bold text-sm uppercase text-gray-600">Featured Books:</p>
<div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid md:grid-cols-6 md:gap-4">
    <Link to={`/title/5628`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5628.jpg" className="object-contain"/></Link>
    <Link to={`/title/5617`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5617.jpg" className="object-contain"/></Link>
    <Link to={`/title/5679`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5679.jpg" className="object-contain"/></Link>
    <Link to={`/title/5417`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5417.jpg" className="object-contain "/></Link>
    <Link to={`/title/5493`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5493.jpg" className="object-contain"/></Link>
    <Link to={`/title/5390`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5390.jpg" className="object-contain "/></Link>
      </div>
</section>
<section>
<div className="grid md:grid-cols-4 md:gap-4 py-7">
<article className="flex flex-wrap place-content-center p-5 hover:bg-gray-800 hover:text-white">
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
      <button className="bg-gray-800 text-lg text-white p-4 w-full uppercase text-center"><Link to={`/news-posts`}>see all news posts</Link></button>
</section>
<section>
<div className="container mx-auto px-6">
        <div className="bg-cover bg-center text-gray-600 py-10 grid md:grid-cols-6 gap-6 content-center items-center">
        <div className="bg-gray-300 hover:bg-gray-500 py-20">
        <p className="font-bold text-sm uppercase">Catalog:</p>
        <p className="text-3xl font-bold">Spring 2021</p>
        </div> 
        <div className="bg-gray-400 hover:bg-gray-800 hover:text-white py-20">
        <p className="font-bold text-sm uppercase">Catalog:</p>
        <p className="text-3xl font-bold">Fall 2020</p>
        </div> 
        <div className="bg-gray-300 py-20 hover:bg-gray-500 hover:text-white">
        <p className="font-bold text-sm uppercase">Catalog:</p>
        <p className="text-3xl font-bold">Spring 2020</p>
        </div> 
        <div className="bg-gray-400 hover:bg-gray-800 hover:text-white py-20">
        <p className="font-bold text-sm uppercase">Catalog:</p>
        <p className="text-3xl font-bold">Fall 2019</p>
        </div> 
        <div className="bg-gray-300 hover:bg-gray-500 hover:text-white py-20">
        <p className="font-bold text-sm uppercase">Catalog:</p>
        <p className="text-3xl font-bold">Spring 2019</p>
        </div> 
        <div className="bg-gray-400 hover:bg-gray-800 hover:text-white py-20">
        <p className="font-bold text-sm uppercase">Catalog:</p>
        <p className="text-3xl font-bold">Fall 2018</p>
        </div>  
       
    </div>
    </div>
</section>
<div className="bg-gray-300">
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

