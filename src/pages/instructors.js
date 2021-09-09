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
<div className="flex flex-col text-center w-full mb-5">
  <PageHeader text={"For Instructors"} id="top"/>
      <div className="lg:w-2/3 mx-auto leading-relaxed text-base"><span className="dropCap cms" dangerouslySetInnerHTML={{__html: pagedata.html}}/></div>
    </div>


  <div className="flex flex-row flex-wrap mx-auto w-full justify-center font-thin mb-10 ">
<div className="inline-flex items-center"> 
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg><a href={`../../examination_Copy_Form_2021.pdf`} className="px-4">Exam Copies</a></div>
              <div className="inline-flex items-center"> 
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg><a href={`https://forms.gle/H8J1NbtN4BBZZwgy7`}>Desk Copies</a></div>
              <div className="inline-flex items-center pl-4"> 
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg><a href={`#copyinfo`}>More Info</a></div>
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

<section className="py-4 border-b-2 border-gray-100" id="copyinfo">
   <SectionHeader text={'Desk and Exam Copies'} />
 <h3 className="text-2xl py-5 uppercase text-gray-500"></h3>
 <p className="leading-relaxed text-base text-gray-700">A desk copy may be requested if a book has been adopted and an order has been placed or will be forthcoming. To receive a desk copy, please fill out an online form here, or if you prefer, print out and complete the Desk Copy Request Form. Examination copies of most of our books are available to course instructors for a prepaid fee of $6.00 including shipping (see below). To receive an examination copy, please print out and complete the Examination Copy Request Form. If a paperback copy is not available, a hardback edition may be shipped to you. We ask that you provide a valid Visa or Mastercard number and expiration date. With your shipment you will receive an invoice with a 20% discount, plus postage. You have 60 days to notify us if you wish to adopt the book; you may notify us using the acceptance card included in your shipment. If you decide not to adopt, you may return the book or keep it and pay the invoice. If we receive no instructions after 60 days, we will charge the amount on the invoice to your credit card.</p>

<p className="leading-relaxed text-base text-gray-700">If you are requesting permission to photocopy or scan material for classroom use or place material on e-reserves, please contact: </p>
<ul className="leading-relaxed text-base text-gray-700 pb-5 mx-10">
<li>Copyright Clearance Center</li>
   <li>222 Rosewood Drive Danver, MA 01923 </li>
   <li>Fax: (978) 646-8600 </li>
   <li>Email: <a href="mailto:info@copyright.com">info@copyright.com</a> </li></ul>
   
   <p className="leading-relaxed text-base text-gray-700">If the Copyright Clearance Center cannot grant permission, you may request permission directly from our Permissions Manager (use contact information listed below). Please include:</p>

<ul className="leading-relaxed text-base text-gray-700 pb-5 mx-10 list-disc">
  <li className="font-serif">Name of the author(s)/editor(s) and title of the book in which the requested material was originally published, together with the inclusive page numbers you wish to reproduce (give the actual page numbers, e.g. pp. 24-48).</li>
<li className="font-serif font-normal" >Name of school and faculty member requesting material, together with the course name and number.</li>
<li className="font-serif text-base">Approximate number of copies needed; for electronic use, approximate number of students enrolled in the class.</li></ul>
   
 </section>
        
 <Link to={`#top`} className="uppercase text-gray-500 text-xs">Go to top</Link>
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
