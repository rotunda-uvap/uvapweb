import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import RelatedBookList from "../components/RelatedBookList"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"


export default function InstructorPage({data}) {
  const sers = data.series
  const subs = data.subjects
  const pagedata = data.markdownRemark
  const book_colls = data.markdownRemark.frontmatter.related_collection
  return (
    <Layout>
        <SeO title="For Instructors"/>
<div className="flex flex-col text-center w-full mb-10">
  <PageHeader text={"For Instructors"} id="top"/>
      <div className="lg:w-2/3 mx-auto leading-relaxed text-base"><span className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div>
    </div>

<section className="py-4 border-b-2 border-gray-100">
  <SectionHeader text={'Course Collections'}/>
{book_colls && 
            <>
            {book_colls.map(coll => (
          
              <div>
                <h5 className="py-2 font-thin text-gray-500 font-display">{coll.frontmatter.title}</h5>
                <span className="cms py-5 text-base font-serif" dangerouslySetInnerHTML={{__html: coll.frontmatter.description}}/>
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

 <section id="desk" className="py-4 border-b-2 border-gray-100">
   <SectionHeader text={'Desk and Exam Copies'}/>
 <h3 className="text-2xl py-5 uppercase text-gray-500"></h3>
   <p className="leading-relaxed text-base text-gray-700">Desk and Exam Copy info from CMS</p>
 </section>
        

 <section className="py-5 text-gray-700 border-b-2 border-gray-100" id="subjects">
  <SectionHeader text={"Our Subjects"}/> 
  <div className="container flex flex-wrap py-10 mx-auto items-center">
       
      {subs.edges.map(edge => (
            <>           
           <div className="mb-2 px-4 font-display items-center" key={edge.node.subjectid}>
          <Link to={`../../subject/${ edge.node.subjectID }`} className="text-gray-600 hover:text-gray-800">{ edge.node.subjectName }</Link>
        </div>            
            </>
        ))}
     
    
  </div>
  <Link to={`#top`} className="uppercase text-gray-500 text-xs">Go to top</Link>

</section>  
<SectionHeader className="py-4" text={"Our Series"}/>
<div className="p-4 text-center uppercase text-gray-700 text-xs font-thin tracking-widest mx-auto font-sans"><Link to={'../series'}>See all Active Series</Link></div>
<section className="text-gray-700 py-4" id="series">

  <div className="container flex flex-wrap py-10 mx-auto items-center">

      {sers.edges.map(edge => (
            <>           
           <div className="md:w-1/2 mb-2 px-2 font-display" key={edge.node.id}>
          <Link to={`../series/${ edge.node.id }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
        </div>            
            </>
        ))}
    
  </div>
  <Link to={`#top`} className="uppercase text-gray-500 text-xs">Go to top</Link>

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
