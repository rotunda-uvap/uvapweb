import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"
import GoToTop from "../components/GoToTop"
import kebabCase from "lodash/kebabCase"


export default function InstructorPage({data}) {
  const sers = data.series
  const subs = data.subjects
  // const pagedata = data.markdownRemark
  const book_colls = data.markdownRemark.frontmatter.related_collection
  return (
    <Layout>
        <SeO title="For Instructors"/>
<div className="flex flex-col text-center w-full" id="top">
  <PageHeader text={"For Instructors"} />
      {/* <div className="lg:w-2/3 mx-auto leading-relaxed text-base"><span className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div> */}
    </div>


   
<section className="py-4 border-b-2 border-gray-100" id="copyinfo">
   <SectionHeader text={'Desk and Exam Copies'} />
 <p className="leading-relaxed text-base text-gray-700"><span className="font-bold">Complimentary desk copies</span> are provided to professors who have already adopted a title for course use and an order with a university or local bookstore has been placed or will be forthcoming. Please indicate the name of this bookstore in your request. To receive a desk copy, <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM83xFI63YLUWkuv7zEko9cMBD-9csrbizC_VH7U7Mmmr5sg/viewform">please fill out this form.</a>  </p>
 <p className="leading-relaxed text-base text-gray-700"><span className="font-bold">Examination copies</span> are available to qualified instructors of relevant courses at the discretion of UVA Press. Please provide affiliation and course details to be considered. Examination copies are available in print format only. To request an exam copy, <a href="https://docs.google.com/forms/d/e/1FAIpQLSdM83xFI63YLUWkuv7zEko9cMBD-9csrbizC_VH7U7Mmmr5sg/viewform">please fill out this form.</a></p>
 <p className="leading-relaxed text-base text-gray-700">For classroom and academic permission requests, please see <Link to={'../permissions'}>this page</Link></p>


   
 </section>

<section className="py-5 text-gray-700 border-b-2 border-gray-100">
  <SectionHeader text={'Course Collections'}/>
  <div className="container flex flex-wrap py-10 mx-auto items-center">

{book_colls && 
            <>
            {book_colls.map((coll, index) => (
          
              <div className="b-2 px-4 font-display items-center" key={`cor${index}`}>
                <Link to={`../../collections/${coll.frontmatter.title }`}>{coll.frontmatter.title}</Link>
           
              </div>
            
        ))}
            </>
        } 
        </div><GoToTop/>
</section>



        

 <section className="py-4 text-gray-700 border-b-2 border-gray-100" id="subjects">
  <SectionHeader text={"Our Subjects"}/> 
  <div className="container flex flex-wrap py-10 mx-auto items-center">
       
  {subs.group.map((g, index) => (
                   
                   <div className="md:w-1/2 mb-2 px-2 font-display" key={`sub${index}`}>
<Link to={`../../subject/${kebabCase(g.fieldValue) }`} className="text-ceci-gray-dark hover:text-gray-800">{ g.fieldValue } ({g.totalCount})</Link>
        </div>            
           
        ))} 
     
    
  </div>
 <GoToTop/> 

</section>  
<section className="text-gray-700 py-4" id="series">
<SectionHeader className="py-4" text={"Our Series"}/>
<Link to={'../series'}><div className="text-sm text-right uppercase font-thin text-ceci-gray-mid">All Active Series <span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg></span></div></Link>

  <div className="md:flex md:flex-wrap py-6 mx-auto">

      {sers.edges.map((edge, index) => (
                     
           <div className="md:w-1/2 mb-2 px-2 font-display" key={`sers${index}`}>
          <Link to={`../series/${ edge.node.jsonId }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
        </div>            
           
        ))}
   
  </div>
  <GoToTop/> 
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
            title
            related_book {
              Title
              jsonId
          }
          description
        }
      }
    }
      }
      series: allSeriesJson(sort: {fields: seriesName}) {
      edges {
        node {
            jsonId
            seriesName
        }
      }
    }
    subjects: allBooksJson {
      group(field: Subjects___name) {
        totalCount
        fieldValue
      }
    }
  }`
