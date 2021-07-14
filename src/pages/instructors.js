import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import RelatedBookList from "../components/RelatedBookList"



export default function InstructorPage({data}) {
  const sers = data.series
  const subs = data.subjects
  const pagedata = data.markdownRemark
  const book_colls = data.markdownRemark.frontmatter.related_collection
  return (
    <Layout>
        
<div className="flex flex-col text-center w-full mb-10">
       <h1 id="top" className="sm:text-3xl text-2xl pt-5 font-sans uppercase mb-4 text-gray-900">For Instructors</h1> 
      <div className="lg:w-2/3 mx-auto leading-relaxed text-base"><span className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div>
    </div>

<section>
<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Course Collections</h1>
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
 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Desk and Exam Copies</h1>
   <p className="leading-relaxed text-base text-gray-700">Desk and Exam Copy info from CMS</p>
 </section>
        

 <section className="text-gray-700 body-font" id="subjects">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Subject Categories</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about our subjects.</p>
      <Link className="text-teal-500 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
     
        {subs.edges.map(edge => (
            <>
           
           <li className="lg:w-1/3 mb-1 w-1/2" key={edge.node.subjectID}>
          <Link to={`../../subject/${ edge.node.subjectID }`} className="text-gray-600 hover:text-gray-800">{ edge.node.subjectName }</Link>
        </li>
            
            </>
        ))}
       
      </nav>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font" id="series">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-300">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Series</h1>
      <p className="leading-relaxed text-base">This paragraph should have introductory information about our series.</p>
      <Link className="text-teal-500 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">SERIES CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
      {sers.edges.map(edge => (
            <>           
           <li className="lg:w-1/3 mb-1 w-1/2" key={edge.node.id}>
          <Link to={`../series/${ edge.node.id }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
        </li>            
            </>
        ))}
        
       
      </nav>
    </div>
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
