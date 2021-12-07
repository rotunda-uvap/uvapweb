import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import SectionHeader from "../components/SectionHeader"


export default function InstructorPage({data}) {
  const sers = data.series
  const subs = data.subjects
  // const pagedata = data.markdownRemark
  const book_colls = data.markdownRemark.frontmatter.related_collection
  return (
    <Layout>
        <SeO title="For Instructors"/>
<div className="flex flex-col text-center w-full">
  <PageHeader text={"For Instructors"} id="top"/>
      {/* <div className="lg:w-2/3 mx-auto leading-relaxed text-base"><span className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div> */}
    </div>


    {/* <div className="container w-2/3 flex flex-row border-b-2 border-gray-100 pt-5 pb-7 mx-auto text-gray-700 font-thin space-x-5 place-content-center items-center">
  
    <span><a href={`#copyinfo`}>Desk and Exam Copies</a></span>
      </div> */}

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
          
              <div className="b-2 px-4 font-display items-center" key={index}>
                <Link to={`../../collections/${coll.frontmatter.title }`}>{coll.frontmatter.title}</Link>
           
              </div>
            
        ))}
            </>
        } 
        </div>
</section>
<a href={`#top`} className="uppercase text-gray-500 text-xs">Go to top</a>


        

 <section className="py-4 text-gray-700 border-b-2 border-gray-100" id="subjects">
  <SectionHeader text={"Our Subjects"}/> 
  <div className="container flex flex-wrap py-10 mx-auto items-center">
       
      {subs.edges.map((edge, index) => (
                     
           <div className="mb-2 px-4 font-display items-center" key={`subs${index}`}>
          <Link to={`../../subject/${ edge.node.subjectID }`} className="text-gray-600 hover:text-gray-800">{ edge.node.subjectName }</Link>
        </div>            
           
        ))}
     
    
  </div>
  <a href={`#top`} className="uppercase text-gray-500 text-xs">Go to top</a>

</section>  
<section className="text-gray-700 py-4" id="series">
<SectionHeader className="py-4" text={"Our Series"}/>
<div className="p-4 text-center uppercase text-gray-700 text-xs font-thin tracking-widest mx-auto font-sans"><Link to={'../series'}>See all Active Series</Link></div>

  <div className="container flex flex-wrap py-10 mx-auto items-center">

      {sers.edges.map((edge, index) => (
                     
           <div className="md:w-1/2 mb-2 px-2 font-display" key={`sers${index}`}>
          <Link to={`../series/${ edge.node.jsonId }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
        </div>            
           
        ))}
    
  </div>
  <a href={`#top`} className="uppercase text-gray-500 text-xs">Go to top</a>
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
  subjects: allSubjectsJson(sort: {fields: subjectName}) {
    edges {
      node {
          subjectID
          subjectName
        
      }
    }
  }
  }`
