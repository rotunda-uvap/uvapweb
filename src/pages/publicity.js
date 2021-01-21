import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import MiniBio from "../components/MiniBio"


export default function PubPage({ data }) {
    const news = data.allMarkdownRemark
    const staff = data.staffs
    const pagedata = data.pubtext

 return (
    
        <Layout>
            <h2 className="py-10">Publicity</h2>
            <div className="grid md:grid-cols-3 md:gap-5 justify-center">
              <section className="py-10 md:col-span-2">
                
                {staff.edges.map(edge => (
                    <>
                  <MiniBio frontmatter={edge.node.frontmatter} />                    </>
                    ))}
                 <p className="py-5" dangerouslySetInnerHTML={{__html: pagedata.html}}/>
            </section>
            <section className="py-15 flex flex-col align-center">
            <Helmet>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=10916153062&autoLogAppEvents=1" nonce="Jr34ozA7"></script></Helmet>
            
            <div className="fb-page" data-href="https://www.facebook.com/uvapress" data-tabs="timeline" data-width="" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/uvapress" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/uvapress">University of Virginia Press</a></blockquote></div>
            <div><a className="twitter-timeline" data-chrome="noheader"  data-widget-id="702210505897807872" data-height="420" data-width="340" href="https://twitter.com/uvapress">Tweets by @uvapress</a></div>
           
            </section>
            </div>
            
            
            

            <section className="py-20">
                <h3 className="text-4xl py-7">All News, Media and Events</h3>
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
    allMarkdownRemark(filter: {frontmatter: {type: {in: ["news", "media", "event"]}}}) {
      edges {
          node {
            html
            frontmatter {
              title
              type
              description
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
