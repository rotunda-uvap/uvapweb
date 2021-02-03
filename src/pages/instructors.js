import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function InstructorPage({data}) {
  const sers = data.series
  const subs = data.subjects
  return (
    <Layout>
        <h2 id="top" className="py-10">For Instructors</h2>
        <ul className="grid md:grid-cols-4 md:auto-rows-fr content-center justify-center py-7">
   <li><Link to={`#subjects`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Our Subjects</button></Link></li>
   <li><Link to={`#series`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Our Series</button></Link></li>
   <li><Link to={`#desk`}><button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Desk/Exam Copy Information</button></Link></li>

 </ul>
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
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
      {subs.distinct.map(sub => (
            <>
           
           <li className="lg:w-1/3 mb-1 w-1/2" key={sub}>
          <Link to={`../../subject/${ sub }`} className="text-gray-600 hover:text-gray-800">{ sub }</Link>
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
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">
      <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">SERIES CATEGORIES</h2>
      <nav className="flex flex-wrap list-none -mb-1">
      {sers.distinct.map(serie => (
            <>
           
           <li className="lg:w-1/3 mb-1 w-1/2" key={serie}>
          <Link to={`../series/${ serie }`} classNameName="text-gray-600 hover:text-gray-800">{ serie }</Link>
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
      series: allBooksJson {
        distinct(field: Series___seriesID)
    }
    subjects: allBooksJson {
      distinct(field: Subject___subjectID)
  }
  }`
