import React from "react"
import { graphql, Link} from "gatsby"
import Layout from "../components/layout"
import FeatColl from "../components/FeaturedCollection"
import FeatTrio from "../components/NewsEventEx"
import NewsletterMain from "../components/NewsletterMain"
import Banner from "../components/HomepageBanner"
import RotundaNews from "../components/RotundaNews"
// import GoogleCalendar from "../components/Calendar"
import Gallery from "../components/ExCarousel.js"
// import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"

const Home = ({ data }) => {
  const featured_slider = data.markdownRemark.frontmatter.featured_books
  const top = data.markdownRemark.frontmatter.top_banner[0]
  const vologo = getImage(data.vaopenlogo)
  const catalog  = getImage(data.catalogimage)  
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

<section className="py-4 border-b-2 border-gray-100 greige w100">
<SectionHeader text="ROTUNDA DIGITAL IMPRINT"/>
<RotundaNews/>
</section>
       


  
  <section className="py-4 border-b-2 border-gray-100">
         <SectionHeader text="IN THE NEWS"/>

       <FeatColl/>
       </section>
  <section className="py-4 border-b-2 border-gray-100">
    <SectionHeader text="Open Access"/>
          <div className="flex flex-col items-center"><a href="https://open.upress.virginia.edu/">
          
          <GatsbyImage image={vologo} alt="virginia open logo"  /></a>
          <p className="py-4 dropCap text-md text-gray-800">V/O: Virginia Open, a collection of University of Virginia Press titles made freely available. On this imprint, you will find both open-access monographs from The University of Virginia Press, readable in your browser or via download, and links to open-access websites published under our Rotunda imprint or in collaboration with partner institutions.</p>
          </div>
       </section>
       


       <section className="py-4 border-b-2 border-gray-100">
         <SectionHeader text={"Current Catalog"}/>

    {/* <div className="grid grid-cols-1 md:grid-cols-2 "> */}
    <div className="flex flex-col items-center">
       <div className="md:pb-0 pb-4"><Link to={'../catalog'}> <GatsbyImage image={catalog} alt="current catalog cover"  /></Link></div>
       {/* <GoogleCalendar/> */}
     
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
    vaopenlogo: file(relativePath: { eq: "vo.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality:100
          width:500
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    catalogimage: file(relativePath: { eq: "fall24.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality:100
          width:300
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }`