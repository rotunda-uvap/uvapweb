import React from "react"
import { Link} from "gatsby"
import Layout from "../components/layout"
import FeatMedia from "../components/FeatMedia"
import FeatPromo from "../components/FeatPromo"
import { SocialIcon } from 'react-social-icons';
import NewsletterMain from "../components/NewsletterMain"
import Banner from "../components/BannerPromo"
import FeatExhibit from "../components/FeatExhibit"
import FeatNews from "../components/FeatNews"
import RotundaPromo from "../components/RotundaPromo"


export default function Home() {
  
  return (
    <Layout>
      <section>
        <Banner/>
      </section>
       

<section>
  <div className="mx-auto">
 <ul className="grid grid-cols-2 md:grid-cols-8 content-center justify-center">
   <li key="1"><Link to={`/books`}><button className="hover:bg-white hover:text-black bg-black text-white p-4 w-full h-full uppercase">Browse Books</button></Link></li>
   <li key="2"><Link to={`/catalog`}><button className="hover:bg-white hover:text-black bg-black text-white p-4 text-white w-full h-full uppercase">Current Catalog</button></Link></li>
   <li key="3"><Link to={`/recent-books`}><button className="hover:bg-white hover:text-black bg-black text-white p-4 text-white w-full h-full uppercase">New Releases</button></Link></li>
   <li key="4"><Link to={`/authors`}><button className="hover:bg-white hover:text-black  bg-black text-white p-4 text-white w-full h-full uppercase">For Authors</button></Link></li>
   <li key="5"><Link to={`/instructors`}><button className="hover:bg-white hover:text-black  bg-black text-white p-4 text-white w-full h-full uppercase">For Instructors</button></Link></li>
   <li key="7"><Link to={`/content/order`}><button className="hover:bg-white hover:text-black p-4 bg-black text-white w-full h-full uppercase">Order</button></Link></li>
   <li key="8"><Link to={`/`}><button className="hover:bg-white hover:text-black bg-black text-white p-4  w-full h-full uppercase">ROTUNDA Digital Imprint</button></Link></li>

   <li key="9"><Link to={`/content/support-uva-press`}><button className="hover:bg-white hover:text-black bg-black text-white p-4  w-full h-full uppercase">Support</button></Link></li>

 </ul>
</div>
</section>
<section >
<div className="grid md:grid-cols-4 md:gap-4 py-7">
     <FeatExhibit/>
     <FeatNews/>
      <FeatMedia />

      <article className="flex flex-wrap place-content-center p-5 hover:bg-black hover:text-white">
              <div><button className="px-4 py-2 border-2 border-gray-700 uppercase">social media</button></div>
                <div className="mx-auto w-4/5 py-10">
                <div><a href="https://twitter.com/uvapress" className="px-5"><SocialIcon network="twitter" aria-label="twitter button" bgColor="#00000" /></a>
                <a href="https://facebook.com/uvapress" className="px-5"><SocialIcon network="facebook" aria-label="facebook button" bgColor="#00000" /></a></div>
                <div><a href="https://twitter.com/uvapress" className="px-5"><SocialIcon network="twitter" aria-label="twitter button mobile" bgColor="#ffffff" /></a>
                <a href="https://facebook.com/uvapress" className="px-5"><SocialIcon network="facebook" aria-label="facebook button mobile" bgColor="#ffffff" /></a></div>
                </div>
                <div></div>
      </article>
      </div>
      <button className="bg-black text-lg text-white p-4 w-full uppercase text-center"><Link className to={`/news-posts`}>see all news posts</Link></button>
</section>

<div className="py-10 bg-blue-500">
        <RotundaPromo/>
      </div>

<section><FeatPromo /></section>
  

  <div className="py-10 bg-blue-500">
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

