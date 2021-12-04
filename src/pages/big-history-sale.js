import React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import RelatedBookList from "../components/RelatedBookList"


export default function HistorySalePage({data}) {
  const pagedata = data.markdownRemark
  const book_colls = data.markdownRemark.frontmatter.related_collection
  return (
    <Layout>
        <SeO title="Big History Sale at UVA Press"/>
<div className="flex flex-col text-center w-full">
  <PageHeader text={"Big History Sale"} id="top"/>
      <div className="lg:w-2/3 mx-auto leading-relaxed "><span className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div>
    </div>


<section>

   <div className="w-full py-8 border-b-2 border-gray-100">

{book_colls && 
            <>
            {book_colls.map(coll => (
          
              <div className="flex flex-col w-full mx-auto">
                <span className="font-display text-ceci-gray-mid text-lg text-center  tracking-wide uppercase"><a href={`#${coll.frontmatter.title}`}>{coll.frontmatter.title}</a></span>
               
              </div>
              
            
        ))}
            </>
        } 
</div>
<div>
{book_colls && 
            <>
            {book_colls.map(coll => (
          
              <div className="b-2 px-4 font-display items-center" id={coll.frontmatter.title}>
                <SectionHeader text={coll.frontmatter.title}/>
                <div className="flex flex-row flex-wrap gap-4 py-4">
             
             {coll.frontmatter.related_book && 
             coll.frontmatter.related_book.map(book => (
               
               <RelatedBookList id={book.id} title={book.Title}/>
          
              
           ))}
          
          <a href={`#top`} className="uppercase text-gray-500 text-xs">Go to top</a>
            </div>
              </div>
              
            
        ))}
            </>
        } 
        </div> 
</section>


        





        

    </Layout>
  )
  
}

export const query = graphql`
    query  {
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "History Sale"}}) {
        html
        frontmatter {
          related_collection {
           frontmatter {
            title
            related_book {
              Title
              id
          }
          description
        }
      }
    }
      }
     
  
  }`
