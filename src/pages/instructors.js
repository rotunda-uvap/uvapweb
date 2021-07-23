import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import RelatedBookList from "../components/RelatedBookList"
import SEO from "../components/SeoComponent"



export default function InstructorPage({data}) {
  const sers = data.series
  const subs = data.subjects
  const pagedata = data.markdownRemark
  const book_colls = data.markdownRemark.frontmatter.related_collection
  return (
    <Layout>
        <SEO title="For Instructors"/>
<div className="flex flex-col text-center w-full mb-10">
       <h1 id="top" className="sm:text-3xl text-2xl pt-5 font-sans uppercase mb-4 text-gray-900">For Instructors</h1> 
      <div className="lg:w-2/3 mx-auto leading-relaxed text-base"><span className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div>
    </div>

<section>
<h3 className="text-2xl py-5 uppercase text-gray-500">Course Collections</h3>
{book_colls && 
            <>
            {book_colls.map(coll => (
              <div>
                <h5 className="py-2">{coll.frontmatter.title}</h5>
                <span className="cms py-5" dangerouslySetInnerHTML={{__html: coll.frontmatter.description}}/>
            <div className="flex flex-row py-4 space-x-4">
            {coll.frontmatter.related_book.map(book => (
              
              <RelatedBookList id={book.id} title={book.Title}/>
         
             
          ))}
           </div>
              </div>
            
        ))}
            </>
        } 
</section>

 <section id="desk" className="py-8 px-5">
 <h3 className="text-2xl py-5 uppercase text-gray-500">Desk and Exam Copies</h3>
   <p className="leading-relaxed text-base text-gray-700">Desk and Exam Copy info from CMS</p>
 </section>
        

 <section className="text-gray-700 body-font" id="subjects">
  <div className="container flex flex-wrap py-10 mx-auto items-center">
   
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Subjects</h1>
      
      <nav className="flex flex-wrap py-5 list-none -mb-1">
      {subs.edges.map(edge => (
            <>           
           <li className="lg:w-1/2 mb-2 font-display" key={edge.node.subjectid}>
          <Link to={`../../subject/${ edge.node.subjectID }`} className="text-gray-600 hover:text-gray-800">{ edge.node.subjectName }</Link>
        </li>            
            </>
        ))}
      </nav>
    
  </div>
</section> 
<section className="text-gray-700 body-font" id="series">
  <div className="container flex flex-wrap py-10 mx-auto items-center">
   
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Series</h1>
      
      <Link to={'../series'} className="text-gray-700 pl-4 py-2">See all Active Series</Link>
      <nav className="flex flex-wrap py-5 list-none -mb-1">
      {sers.edges.map(edge => (
            <>           
           <li className="lg:w-1/2 mb-2 font-display" key={edge.node.id}>
          <Link to={`../series/${ edge.node.id }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
        </li>            
            </>
        ))}
      </nav>
    
  </div>
</section>

        
   
    </Layout>
  )
  
}

export const query = graphql`
    query  {
      markdownRemark(frontmatter: {templateKey: {eq: "page"}, title: {eq: "Instructors"}}) {
        html
        frontmatter {
          related_collection {
           frontmatter {
            Collection_Type
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
      series: allSeriesJson {
      edges {
        node {
            id
            seriesName
        }
      }
    }
  subjects: allSubjectsJson {
    edges {
      node {
          subjectID
          subjectName
        
      }
    }
  }
  }`
