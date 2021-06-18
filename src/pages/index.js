import React from "react"
import { graphql, Link} from "gatsby"
import Layout from "../components/layout"
import FeatPromo from "../components/FeatPromo"
import ReadingSeries from "../components/ReadingSeries"
import FeatNews from "../components/FeatNews"
import FeatExhibit from "../components/FeatExhibit"
import NewsletterMain from "../components/NewsletterMain"
import HomepageBanner from "../components/HomepageBanner"
import RotundaNews from "../components/RotundaNews"
// import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import GoogleCalendar from "../components/Calendar"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import SEO from 'react-seo-component'

export default function Home(data) {
  const meta = useSiteMetadata()
  return (
    <Layout>
<SEO
  title={meta.title}
  description={meta.description}
  image={meta.logo}
/>
 <HomepageBanner/>


<section className="border-b-2 py-10">
<p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Recent News</p>

      
      <FeatNews/>

      

      <button className="text-lg p-4 w-full uppercase text-center"><Link to={`/publicity`}>see all the latest news</Link></button>
</section>
<section className="py-10 border-b-2">
<p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Featured Books:</p>
<div className="grid grid-cols-5 md:gap-6 justify-center place-content-center">
    <Link to={`/title/5628`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5628.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5617`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5617.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5679`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5679.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5417`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5417.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
    <Link to={`/title/5493`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5493.jpg" className="object-contain object-scale-down shadow-lg" alt="cover"/></Link>
      </div>
</section>


<section className="py-10 border-b-2">
<p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">rotunda</p>
<RotundaNews/>
</section>
       
       <section className="py-10 border-b-2">
       <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">exhibits</p>

         <FeatExhibit/>
       </section>
   
      
   
<section className="xs:flex xs:flex-col md:grid md:grid-cols-3 border-b-2 py-10 gap-3">
  <div className="md:col-span-1">
  <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Events:</p>
<GoogleCalendar/>
  </div>  
  <FeatPromo/>
  </section>
  
  <section className="py-10 border-b-2">
       <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Open Access</p>
          <a href="https://open.upress.virginia.edu/"><h5>Virginia Open</h5></a>
          <p className="py-4">V/O: Virginia Open, a collection of University of Virginia Press titles made freely available. On this imprint, you will find both open-access monographs from The University of Virginia Press, readable in your browser or via download, and links to open-access websites published under our Rotunda imprint or in collaboration with partner institutions.</p>
          <a href="https://open.upress.virginia.edu/" className="tracking-wide font-sans">Learn More</a>
       </section>
       <section className="py-10 border-b-2">
       <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">2021 Reading Series</p>

         <ReadingSeries/>
       </section>


       <section className="py-10 border-b-2">
       <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide">Catalog</p>

       <p>Catalog Feature here</p>

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