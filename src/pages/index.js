import React from "react"
import { graphql, Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import FeatColl from "../components/FeaturedCollection"
import FeatTrio from "../components/NewsEventEx"
import NewsletterMain from "../components/NewsletterMain"
import Banner from "../components/HomepageBanner"
import RotundaNews from "../components/RotundaNews"
// import GoogleCalendar from "../components/Calendar"
import Gallery from "../components/ExCarousel.js"
// import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"

const Home = ({ data }) => {
  const featured_slider = data.markdownRemark.frontmatter.featured_books
  const top = data.markdownRemark.frontmatter.top_banner[0]
  return (
    <Layout>
<SeO/>
 <Banner id={top.banner_id} book_title={top.banner_title} author={top.banner_author} quote={top.banner_quote} subtitle={top.banner_subtitle} attr={top.banner_attr}/>

<section className="py-4 border-b-2 border-gray-100">
  <SectionHeader text="Featured Books"/>
<div className="py-5">
<Gallery book_id_array={featured_slider}/>
           </div>

</section>
<section className="py-4 border-b-2 border-gray-100">
<FeatTrio/>

</section>

<section className="py-4 border-b-2 border-gray-100">
<RotundaNews/>
</section>
       

   
   {/*   <section className="py-4 border-b-2 border-gray-100">
     <FeatPromo/>
     
       </section>  */}  
   
{/* <section className="xs:flex xs:flex-col md:grid md:grid-cols-3 border-b-2 py-10 gap-3">
  <div className="md:col-span-1">
  <p className="text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">Events:</p>
<GoogleCalendar/>
  </div>  
  <FeatPromo/>
  </section> */}
  
  <section className="py-4 border-b-2 border-gray-100">
    <SectionHeader text="Open Access"/>
          <div className="flex flex-col items-center"><a href="https://open.upress.virginia.edu/">
          <StaticImage src="../images/vo.png" width={500} alt="virginia open"/></a>
          <p className="py-4 dropCap text-md text-gray-800">V/O: Virginia Open, a collection of University of Virginia Press titles made freely available. On this imprint, you will find both open-access monographs from The University of Virginia Press, readable in your browser or via download, and links to open-access websites published under our Rotunda imprint or in collaboration with partner institutions.</p>
          </div>
       </section>
       <section className="py-4 border-b-2 border-gray-100">
         <SectionHeader text="Featured Collection"/>

       <FeatColl/>
       </section>


       <section className="py-4 border-b-2 border-gray-100">
         <SectionHeader text={"Current Catalog"}/>

    {/* <div className="grid grid-cols-1 md:grid-cols-2 "> */}
    <div className="flex flex-col items-center">
       <div className="md:pb-0 pb-4"><Link to={'../catalog'}> <StaticImage  width={300} src="../images/spring22.jpg" alt="current catalog cover" /></Link></div>
       {/* <GoogleCalendar/> */}
      {/*  <button className="text-gray-600">
       <div className="flex flex-col">
         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 self-center" viewBox="0 0 24 24">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg> 
<Link to={'recent-books'} className="text-2xl font-light">All New Releases</Link></div></button> */}
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

export default Home
export const query = graphql`
  query  {
    markdownRemark(frontmatter: {title: {eq: "Current"}, templateKey: {eq: "homepage"}}) {
      frontmatter {
        top_banner {
          banner_author
          banner_id
          banner_quote
          banner_subtitle
          banner_attr
          banner_title
        }
        featured_books
        title
      }
    }
  }`