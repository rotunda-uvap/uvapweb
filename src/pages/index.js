import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import FeatNews from "../components/FeatNews"
import FeatMedia from "../components/FeatMedia"
import FeatPromo from "../components/FeatPromo"
import { SocialIcon } from 'react-social-icons';




export default function Home({data}) {
  const newsPost = data.news.edges[0].node
  const mediaPost = data.media.edges[0].node
  const promoPost = data.promos.edges[0].node
  const topspot = data.primary
  const rotpromo = data.rot
  return (
    <Layout>
      <div className="py-15 bg-blue-500">
        <div className="container mx-auto px-6">
        <Link to={'../../title/5626'}><div className="grid md:grid-cols-2 hover:text-underline">
            <div className="flex flex-col mx-auto place-content-center">
  <h2 className="text-5xl font-bold mb-2 text-white">{topspot.frontmatter.body1}</h2>
             <h3 className="text-3xl font-light text-gray-200">{topspot.frontmatter.body2}</h3>
            </div>
         <Link to={'../../title/5626'}><StaticImage className="mx-auto" src="../../images/5626.jpg" width={250} alt="Three Rings" /></Link>
        </div></Link>
        </div>
      </div>

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
    <article className="flex flex-wrap place-content-center p-5 hover:bg-black hover:text-white">
              <div><button className="px-4 py-2 border-2 border-gray-700 uppercase">exhibits</button></div>
                <div className="mx-auto w-4/5"><h3 className="text-2xl font-black uppercase py-5 text-center" >Featured Exhibit Title Here</h3>
                </div>
                  <button className="rounded bg-blue-400 text-white text-lg px-5 py-2 text-center uppercase">see all</button>
      </article>
      <FeatNews title={newsPost.frontmatter.title} slug={newsPost.fields.slug} />
      <FeatMedia title={mediaPost.frontmatter.title} slug={mediaPost.fields.slug} />

      <article className="flex flex-wrap place-content-center p-5 hover:bg-black hover:text-white">
              <div><button className="px-4 py-2 border-2 border-gray-700 uppercase">social media</button></div>
                <div className="mx-auto w-4/5 py-10">
                <div><a href="https://twitter.com/uvapress" className="px-5"><SocialIcon network="twitter" bgColor="#00000" /></a>
                <a href="https://facebook.com/uvapress" className="px-5"><SocialIcon network="facebook" bgColor="#00000" /></a></div>
                <div><a href="https://twitter.com/uvapress" className="px-5"><SocialIcon network="twitter" bgColor="#ffffff" /></a>
                <a href="https://facebook.com/uvapress" className="px-5"><SocialIcon network="facebook" bgColor="#ffffff" /></a></div>
                </div>
                <div></div>
      </article>
      </div>
      <button className="bg-black text-lg text-white p-4 w-full uppercase text-center"><Link className to={`/publicity`}>see all news posts</Link></button>
</section>




<div className="py-10 bg-blue-500">
        <div className="container mx-auto px-6">
        <div className="bg-cover bg-center h-auto text-white py-20 px-10 object-fill grid md:grid-cols-2">
       <div>
        <p className="font-bold text-sm uppercase">Featured Rotunda:</p>
        <Link to={'../../title/5477'}><p className="text-3xl font-bold">{rotpromo.frontmatter.body1}</p></Link>

        <p className="body-text p-5">{rotpromo.frontmatter.body2} </p>
        </div>  
        <div>
        <Link to={'/'}><StaticImage className="mx-auto" src="../../images/pfe1.jpg" alt="People of the Founding Era" /></Link>
        
        </div>  
    </div>
    </div>
      </div>

  <FeatPromo title={promoPost.frontmatter.title} relbooks={promoPost.frontmatter.relbook} body={promoPost.html} />

  <div className="py-10 bg-blue-500">
        <div className="container mx-auto px-6">
        <div className="bg-cover bg-center h-auto text-white py-20 px-10 object-fill grid md:grid-cols-2">
       <Link to={'/newsletters'}><div>
       <p className="text-3xl font-bold">Our Newsletters</p>
        <p className="body-text p-5">Subscribe to our e-newsletter and receive notifications of new releases and special offers in your choice of subjects.
</p>
        </div>  </Link>
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
      news: allMarkdownRemark(limit: 1, filter: {frontmatter: {type: {eq: "news"}}}) {
        edges {
          node {
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
          }
        }
      }
      media: allMarkdownRemark(limit: 1, filter: {frontmatter: {type: {eq: "media"}}}) {
        edges {
          node {
            frontmatter {
              title
              type
            }
            fields {
              slug
            }
          }
        }
      }
      promos: allMarkdownRemark(limit: 1, filter: {frontmatter: {type: {eq: "promo"}}}) {
        edges {
          node {
            frontmatter {
              title
              type
              relbook
            }
            html
            fields {
              slug
            }
          }
        }
      }
    primary:  markdownRemark(frontmatter: {templateKey: {eq: "homepage-primary"}}) {
      frontmatter {
        body1
        body2
        relbook
      }
    }
    rot:  markdownRemark(frontmatter: {templateKey: {eq: "homepage-rotunda"}}) {
      frontmatter {
        body1
        body2
      }
    }
  }`
