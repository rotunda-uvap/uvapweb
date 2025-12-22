import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import RelatedBookList from "../components/RelatedBookList"
import SectionHeader from "../components/SectionHeader"
import Gallery from "../components/ExCarousel"
import PageHeader from "../components/PageHeader"
import sanitizeHtml from 'sanitize-html'
export default function PrivacyPage({ data }) {
    const pagedata = data.markdownRemark
    const book_colls = data.markdownRemark.frontmatter.related_collection
 return (
   
        <Layout> 
          <SeO title="UVA Magazine"/>
           <div className="container px-5 py-12 mx-auto">
           <PageHeader text={'SAVINGS FOR UVA ALUMNI'}/>

           <h5 className="py-4 pl-1">Thomas Jefferson said, “I cannot live without books.” Can you?</h5>


         <div className="cms" dangerouslySetInnerHTML={{__html: sanitizeHtml(pagedata.html)}}/>

         <section className="py-8">
           <SectionHeader text="Featured Books"/>
          {book_colls && 
        
            <>
            {/* <p className="text-center uppercase text-gray-500 mx-auto  font-sans tracking-wide py-4">Books</p> */}
            {book_colls.map((coll, index) => (
              <div key={`coll${index}`}>
                {/* <h6 className="py-2 font-display ">{coll.frontmatter.title}</h6> */}
                {coll.frontmatter.description && <span className="cms font-serif py-5 pl-4" dangerouslySetInnerHTML={{__html: coll.frontmatter.description}}/>   }
            <div className="flex flex-row flex-wrap gap-4 p-4">
             
            {coll.frontmatter.related_book && 
            coll.frontmatter.related_book.map((book, index) => (
              
              <RelatedBookList id={book.BookID} title={book.Title} key={`rl${index}`}/>
         
             
          ))}
           </div>
              </div>
            
        ))}
            </>
        }</section>
 
         
           </div>
        </Layout>

 )
}

export const query = graphql`
  query {
    markdownRemark(
      frontmatter: { templateKey: { eq: "page" }, title: { eq: "UVA Magazine" } }
    ) {
      html
      frontmatter {
        related_collection {
          frontmatter {
            title
            exhibit_slug
            related_book {
              Title
              BookID
            }
          }
        }
      }
    }
  }
`