import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import {FaArrowAltCircleRight} from "react-icons/fa"
import GoogleCalendar from "../components/Calendar"
import SeO from "../components/SeoComponent"
export default function PubPage({ data }) {
    const news = data.allMarkdownRemark
    // const staff = data.staffs
    // const pagedata = data.pubtext

 return (
    
        <Layout>
          <SeO title="Publicity Information: News and Events"/>
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl uppercase font-medium title-font mb-4 text-gray-900">News and Events</h1>
              </div>
            </div>
        
          <section>
            <div className="container flex md:flex-row px-5 py-12">
              
              <div className="flex flex-col text-center items-center w-2/4">
              <Link to={'../staff/emily-grandstaff'}><h5 className="title-font font-medium text-md text-gray-900">Emily Grandstaff</h5></Link>
       <p className="text-gray-500 font-light">Publicity and Social Media Director</p>
       <p className="text-base leading-relaxed">(434) 982-2932</p>
         <a className="text-gray-500 text-base inline-flex items-center" href="mailto:egrandstaff@virginia.edu">Email Emily
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
             <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
           </svg>
         </a>
                </div>
                 <div className="w-2/4">
                    <GoogleCalendar/>
                    </div>          
            </div>
            </section>


          <div className="grid md:grid-cols-3">
            <section className="md:col-span-2 mr-5">
            {news.edges.map(edge => (
            <>
              <div className="flex flex-row">
                  
                    {edge.node.frontmatter.related_book ? <img src={'https://www.upress.virginia.edu/sites/default/files/covers/' + edge.node.frontmatter.related_book[0].id + "_M.jpg"} alt="cover" className="object-contain self-center justify-self-center"/> : <div></div>}
                  
                    <div className="py-6 px-10 ">
                        <div className="flex items-center"><span className="font-light text-gray-800">{edge.node.frontmatter.date}</span>
                        {/* <span className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">{edge.node.frontmatter.type}</span> */}
                        </div>
                        <div className="mt-2"><Link className="text-xl text-gray-700 font-bold hover:underline" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
                          {edge.node.frontmatter.description &&  <p className="mt-2 text-gray-600 font-light" dangerouslySetInnerHTML={{ __html: edge.node.frontmatter.description.split(' ').splice(0, 50).join(' ') + '...' }}></p>}
                        </div>
                        <div className="flex justify-between items-center mt-4"><Link  to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}><FaArrowAltCircleRight className="inline mx-4"/> Read more</Link>
                                
                            
                    </div>
                    </div>
              </div>
            <hr className="my-10"/>
            </>))}
            </section>
            <div className="md:col-span-1 p-10">
            <section className="flex flex-col">
            <h5 className="py-2">UVaP on Facebook</h5>
            <Helmet>
            
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=10916153062&autoLogAppEvents=1" nonce="Jr34ozA7"></script></Helmet>
            
            <div className="fb-page" data-href="https://www.facebook.com/uvapress" data-tabs="timeline" data-width="" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/uvapress" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/uvapress">University of Virginia Press</a></blockquote></div>
            <div className="py-5"><h5 className="py-2">UVaP on Twitter</h5><a className="twitter-timeline" data-chrome="noheader"  data-widget-id="702210505897807872" data-height="800" data-width="340" href="https://twitter.com/uvapress">Tweets by @uvapress</a></div>
           
            </section>
            </div>
            </div>
            
            <section className="py-20">
            <div className="grid md:grid-cols-3">
              
              {news.edges.map(edge => (
            <>
            <article className="flex flex-wrap place-content-center p-5 shadow-md hover:bg-black hover:text-white">
              <div><button className="text-center uppercase px-5 py-3 rounded text-xs">{edge.node.frontmatter.type}</button></div>
                <div className="mx-auto w-4/5"><h3 className="text-2xl font-black uppercase py-5 text-center" key={edge.node.frontmatter.title}><Link to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link></h3>
                </div>
                <Link to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>
                  <button className="rounded bg-blue-400 text-white font-black p-5 text-center uppercase">go to article</button></Link>
                </article>
            </>
        ))}  
        
            </div>
            
        </section>
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {in: ["news", "media", "event"]}}},sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
            html
            frontmatter {
              title
              type
              related_book {
              id
              Title
            }
              description
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
      }
    }

    staffs: allMarkdownRemark(filter: {frontmatter: {department: {in: "PUB"}}}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
    pubtext:  markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Publicity"}}) {
        html
      }
  }
`
