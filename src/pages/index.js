import React from "react"
import { graphql, Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import FeatPromo from "../components/FeatPromo"
import ReadingSeries from "../components/ReadingSeries"
import FeatTrio from "../components/NewsEventEx"
import NewsletterMain from "../components/NewsletterMain"
import HomepageBanner from "../components/HomepageBanner"
import RotundaNews from "../components/RotundaNews"
// import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

import SeO from "../components/SeoComponent"


export default function Home(data) {
  
  return (
    <Layout>
<SeO/>
 <HomepageBanner/>


<section className="py-4 border-b-2 border-gray-100">
<p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">Featured Books</p>
<div className="grid grid-cols-7 md:gap-4 justify-center place-content-center">
    <Link to={`/title/5744`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5744.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5617`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5617.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5679`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5679.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5417`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5417.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5493`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5493.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5292`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5292.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5410`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5410.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>

      </div>
</section>
<section className="py-4 border-b-2 border-gray-100">
<FeatTrio/>

      {/* <button className="text-lg p-2 w-full uppercase text-center"><Link to={`/publicity`}>see all the latest news</Link></button> */}
</section>

<section className="py-4 border-b-2 border-gray-100">
{/* <p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">rotunda</p> */}
<RotundaNews/>
</section>
       
{/* <section className="py-4">
<p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">exhibits</p>

         <FeatExhibit/>
       </section> */}
   
     <section className="py-4 border-b-2 border-gray-100">
     <FeatPromo/>
     
       </section>   
   
{/* <section className="xs:flex xs:flex-col md:grid md:grid-cols-3 border-b-2 py-10 gap-3">
  <div className="md:col-span-1">
  <p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">Events:</p>
<GoogleCalendar/>
  </div>  
  <FeatPromo/>
  </section> */}
  
  <section className="py-4 border-b-2 border-gray-100">
       {/* <p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">Open Access</p> */}
          <a href="https://open.upress.virginia.edu/"><h5>Virginia Open</h5></a>
          <p className="py-4">V/O: Virginia Open, a collection of University of Virginia Press titles made freely available. On this imprint, you will find both open-access monographs from The University of Virginia Press, readable in your browser or via download, and links to open-access websites published under our Rotunda imprint or in collaboration with partner institutions.</p>
          <a href="https://open.upress.virginia.edu/" className="tracking-wide font-sans">Learn More</a>
       </section>
       <section className="py-4 border-b-2 border-gray-100">
<p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">2021 Reading Series</p>

         <ReadingSeries/>
       </section>


       <section className="py-4 border-b-2 border-gray-100">
{/* <p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">Catalog</p> */}
    
    <div className="grid grid-cols-1 md:grid-cols-3 ">
       <button className="md:pb-0 pb-4"><a href={`spring21.pdf`}> <StaticImage  width={300} src="../images/spring21.jpg" alt="current catalog cover" /></a></button>
       <button className="text-gray-600">
       <div className="flex flex-col">
         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 self-center" viewBox="0 0 24 24">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg> 
<Link to={'recent-books'} className="text-2xl font-light">All New Releases</Link></div></button>
       <button className="text-gray-600">
         <div className="flex flex-col"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 self-center" viewBox="0 0 24 24">
              <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
             <Link to={'../catalog'} className="text-2xl font-light">Previous Catalogs</Link>
            </div>
            </button>
       </div>

       </section>
  <div className="py-4 greige">
        <div className="container mx-auto px-6">
       
       <div>
       <NewsletterMain/>

        </div>  

    </div>
      </div>

    </Layout>
  )
  
}

export const query = graphql`
    query  {
      site {
        siteMetadata {
          title
          logo
          description
        }
      }
  }`