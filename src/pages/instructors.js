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
 <section id="desk">
   <p>Desk and Exam Copy info from CMS</p>
 </section>
        

        <section id="subjects" className="py-5 bg-blue-500">
        <h2 className="text-2xl pb-5 pl-5 text-white uppercase">Subjects</h2>
          <div className="grid md:grid-cols-4 md:grid-4">
            {subs.distinct.map(d => (
            <>
           <button className="text-sm py-3 px-7 hover:bg-black text-white hover:text-white" key={d}><Link to={`../../subject/${ d }`}>{ d }</Link></button>
             </>
        ))}
        </div>
        <Link to={`#top`} className="uppercase text-xs">Go to top</Link>
        </section>
        <section id="series">
             <h2 className="py-5 text-2xl uppercase">Series</h2>
            <div className="grid md:grid-cols-4 md:grid-4">
            {sers.distinct.map(serie => (
            <>
            <button className="text-sm py-3 px-7 hover:bg-black hover:text-white" key={serie}><Link to={`../series/${ serie }`}>{ serie }</Link></button>
            
            </>
        ))}
        </div>
        <Link to={`#top`} className="uppercase text-xs">Go to top</Link>
          </section>

        
   
    </Layout>
  )
  
}

export const query = graphql`
    query  {
      series: allBooksJson {
        distinct(field: Series)
    }
    subjects: allBooksJson {
      distinct(field: Subject)
  }
  }`
