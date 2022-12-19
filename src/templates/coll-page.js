import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import RelatedBookList from "../components/RelatedBookList"
//import BookCard from "../components/BookCard"
// import Gallery from "../components/RelCarousel.js"

const collPage = ({ data }) => {
 return (
   <Layout>
     <SeO title={data.markdownRemark.frontmatter.title}/>
     <div className="container px-5 py-7 mx-auto">
       <PageHeader text={data.markdownRemark.frontmatter.title}/>
       <div className="lg:w-2/3 mx-auto leading-relaxed text-base py-2"><p className="dropCap cms">{data.markdownRemark.frontmatter.description}</p></div>
 
           {/* <div>

             <Gallery book_obj_array={data.markdownRemark.frontmatter.related_book}/> 
           </div> */}
{/* 
            <div className="flex flex-row flex-wrap gap-4">
             
            {data.markdownRemark.frontmatter.related_book && 
            data.markdownRemark.frontmatter.related_book.map(book => (
              
              <BookCard Bookid={book.id} Title={book.Title}/>
         
             
          ))}
           </div> */}

<div className="flex flex-row flex-wrap gap-4">
             
             {data.markdownRemark.frontmatter.related_book && 
             data.markdownRemark.frontmatter.related_book.map((book, index)=> (
               
               <RelatedBookList id={book.jsonId} title={book.Title}  key={`related${index}`}/>
          
              
           ))}
            </div>
           
       </div>
   
    
   </Layout>
    
 )
}

export default collPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "collection"}}, id: { eq: $id }) {
      id
      frontmatter {
          templateKey
          title
          description
          related_book {
            Title
            jsonId
          }
        }
    }
  } 
`
