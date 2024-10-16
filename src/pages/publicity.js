import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
//import { Helmet } from 'react-helmet'
import {FaArrowAltCircleRight} from "react-icons/fa"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import sanitizeHtml from 'sanitize-html'

export default function PubPage({ data }) {
    const news = data.allMarkdownRemark
    // const pagedata = data.markdownRemark

 return (
    
        <Layout>
          <SeO title="Publicity Information: News and Events"/>
          <div className="container md:p-5 px-5 mx-auto">
            <div className="flex flex-col text-center w-full">
            <PageHeader text={'Media, News and Events'}/>
              </div>
            </div>
        
          <section>
            
              <div className="flex flex-col text-center items-center border-b-2 pb-4">
              <Link to={'../staff/MK-Maco'}><h5 className="title-font font-medium text-md py-1 text-ceci-gray-mid">Mary Kate Maco</h5></Link>
       <span className="text-ceci-gray-mid font-light font-serif">Publicist</span>
       <span className="font-serif text-ceci-gray-mid">(434) 982-2932</span>
         <a className="text-ceci-gray-mid text-md font-serif inline-flex items-center" href="mailto:faa6je@virginia.edu">Email Mary Kate
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
             <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
           </svg>
         </a>
                
                      
            </div>
            </section>
 <section id="review">
   <SectionHeader text="Review Copy Requests"/>
 <p className="cms leading-relaxed text-small text-left">
 If you are a journalist or journal interested in a copy of a book for review, we can supply gratis copies of titles published within the past two years.  </p>
 <p className="cms text-small">Please include the following in your email:</p>
 <ul className="pl-8 list-disc">
   <li className="font-serif">Name of book and author</li>
<li className="font-serif">Your media outlet</li>
<li className="font-serif">Full contact information (name, mailing address), along with any deadlines</li>
<li className="font-serif">Links to your outlet's website</li>
 </ul>
 <p className="pt-2">Review copy requests can take up to four weeks to process. Due to the volume of requests, we are unable to provide status updates. Upon publication, please send PDFs and/or links to coverage to <a href="mailto:sborgatti@virginia.edu">sborgatti@virginia.edu.</a></p>
 </section>

          <div className="mx-auto px-4">
           
             <section className="flex flex-col">
               <SectionHeader text="All News Posts"/>
            {news.edges.map((edge, index) => (
           
            <Link to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`} key={`news${index}`} className="flex flex-col border-b-2 last:border-b-0 py-2">
             <div className="flex flex-col py-2">
              <div className="text-xs font-serif font-thin text-ceci-gray-mid">{edge.node.frontmatter.date}</div>
              <div className="font-thin uppercase tracking-wide font-display">{ edge.node.frontmatter.title }</div>
              </div>
              
              <div className="flex md:flex-row gap-2  ">
               
                  {edge.node.frontmatter.related_book ? <div className="md:base-1/5 shrink-0 pr-2"><img src={'https://ik.imagekit.io/uvapress/' + edge.node.frontmatter.related_book[0].BookID + "_M.jpg"} alt="cover"/></div> : <div></div>}
                 
                  {edge.node.html ?  <div><div className=" text-ceci-gray-dark font-light dropCap px-2 md:px-1" dangerouslySetInnerHTML={{ __html: sanitizeHtml(edge.node.html.split(' ').splice(0, 100).join(' ') + '...' )}}></div>            <div className="font-display uppercase text-xs tracking-widest py-3 md:py-2"><FaArrowAltCircleRight className="inline mx-4"/> Continue Reading</div>
</div> : <div></div>}
                  
            </div>

            </Link>
            ))}
             </section>
          
           




          
        {/*     <section className="md:col-span-1 p-10 flex flex-col">
            <h5 className="py-2 text-ceci-gray-mid">UVAP on Facebook</h5>
            <Helmet>
            
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=10916153062&autoLogAppEvents=1" nonce="Jr34ozA7"></script></Helmet>
            
            <div className="fb-page" data-href="https://www.facebook.com/uvapress" data-tabs="timeline" data-width="" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/uvapress" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/uvapress">University of Virginia Press</a></blockquote></div>
            <div className="py-5"><h5 className="py-2 text-ceci-gray-mid">UVAP on Twitter</h5>
            <p>Twitter's embedded timeline service is currently down</p>
            <a className="twitter-timeline" d  data-height="800" data-width="340" href="https://twitter.com/uvapress">Tweets by @uvapress</a></div>
             <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </section> */}
            </div>
          
            
        
        </Layout>

 )
}



export const query = graphql`
  query {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}},sort: { frontmatter: {date: DESC }})  {
      edges {
        node {
            html
            frontmatter {
              title
              type
              related_book {
                BookID
                Title
              }
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
      }
    }
    
    
  }
`
