import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import {FaArrowAltCircleRight} from "react-icons/fa"
import GoogleCalendar from "../components/Calendar"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
export default function PubPage({ data }) {
    const news = data.allMarkdownRemark
    // const pagedata = data.markdownRemark

 return (
    
        <Layout>
          <SeO title="Publicity Information: News and Events"/>
          <div className="container md:p-5 mx-auto">
            <div className="flex flex-col text-center w-full">
            <PageHeader text={'Media, News and Events'}/>
              </div>
            </div>
        
          <section>
            <div className="container items-center flex flex-col md:flex-row py-12">
              
              <div className="flex flex-col text-center items-center md:w-2/4 ">
              <Link to={'../staff/jason-coleman'}><h5 className="title-font font-medium text-md text-ceci-gray-mid">Jason Coleman</h5></Link>
       <span className="text-ceci-gray-mid font-light font-serif">Marketing Director</span>
       <span className="text-base leading-relaxed text-ceci-gray-dark">(434) 982-1450</span>
         <a className="text-ceci-gray-mid text-base inline-flex items-center" href="mailto:jcoleman@virginia.edu">Email Jason
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
             <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
           </svg>
         </a>
                </div>
                 <div className="md:w-2/4 pt-5 md:pt-0">
                    <GoogleCalendar/>
                    </div>          
            </div>
            </section>
 <section id="review">
   <SectionHeader text="Review Copy Requests"/>
 <p className="cms leading-relaxed text-base text-left">
 If you are a journalist or journal interested in a copy of a book for review, we can supply gratis copies of titles published within the past two years.  </p>
 <p>Please include the following in your email:</p>
 <ul className="pl-5 bulleted">
   <li className="font-serif">Name of book and author</li>
<li className="font-serif">Your media outlet</li>
<li className="font-serif">Full contact information (name, mailing address), along with any deadlines</li>
<li className="font-serif">Links to your outlet's website</li>
 </ul>
 <p className="pt-2">Review copy requests can take up to four weeks to process. Due to the volume of requests, we are unable to provide status updates. Upon publication, please send PDFs and/or links to coverage to <a href="mailto:uvapressintern@gmail.com">uvapressintern@gmail.com.</a></p>
 </section>

          <div className="grid md:grid-cols-3">
            <section className="md:col-span-2 mr-5">
            {news.edges.map((edge, index) => (
            
              <div className="flex flex-col md:flex-row" key={`ns${index}`}>
                  
                    {edge.node.frontmatter.related_book ? <img src={'https://ik.imagekit.io/uvapress/mediums/' + edge.node.frontmatter.related_book[0].jsonId + "_M.jpg"} alt="cover" className="xs:hidden md:block object-contain self-center justify-self-center"/> : <div></div>}
                  
                    <div className="py-6 px-10 ">
                        <div className="flex items-center"><span className="font-light text-ceci-gray-mid">{edge.node.frontmatter.date}</span>
                        </div>
                        <div className="mt-2"><Link className="text-xl text-ceci-gray-dark font-thin tracking-wide hover:underline hover:text-ceci-gray-dark" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
                          {edge.node.html &&  <div className="mt-2 text-ceci-gray-dark font-light" dangerouslySetInnerHTML={{ __html: edge.node.html.split(' ').splice(0, 50).join(' ') + '...' }}></div>}
                        </div>
                        <div className="flex justify-between items-center mt-4 text-ceci-gray-mid"><Link  to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link>
                                
                            
                    </div>
                    </div>
              </div>
           
            ))}<hr className="my-10"/>
            </section>
            <div className="md:col-span-1 p-10">
            <section className="flex flex-col">
            <h5 className="py-2 text-ceci-gray-mid">UVAP on Facebook</h5>
            <Helmet>
            
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=10916153062&autoLogAppEvents=1" nonce="Jr34ozA7"></script></Helmet>
            
            <div className="fb-page" data-href="https://www.facebook.com/uvapress" data-tabs="timeline" data-width="" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/uvapress" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/uvapress">University of Virginia Press</a></blockquote></div>
            <div className="py-5"><h5 className="py-2 text-ceci-gray-mid">UVAP on Twitter</h5><a className="twitter-timeline" data-chrome="noheader"  data-widget-id="702210505897807872" data-height="800" data-width="340" href="https://twitter.com/uvapress">Tweets by @uvapress</a></div>
           
            </section>
            </div>
            </div>
            
        
        </Layout>

 )
}



export const query = graphql`
  query {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}},sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
            html
            frontmatter {
              title
              type
              related_book {
                jsonId
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
