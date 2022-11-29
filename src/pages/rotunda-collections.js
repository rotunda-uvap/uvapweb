import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"


export default function Colls({ data }) {
    const colls = data.allRotundaJson
 return (
    
        <Layout>
          <SeO title="ROTUNDA Digital Collections"/>
          <h2 className="py-10 px-3 font-light">All Subjects</h2>
          <div className="grid md:grid-cols-4 md:grid-4">
            {colls.distinct.map(d => (
            <>
           <div className="inline-flex items-center">
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-10 h-10" viewBox="0 0 24 24">
           
           <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
         </svg>
           <button className="pl-2 text-ceci-gray-dark text-lg font-thin tracking-wide mb-3" key={d}><Link to={`../../collection/${ d }`}>{ d }</Link></button>
            </div>
            
            </>
        ))}
        </div>
        </Layout>

 )
}



export const query = graphql`
  query {
    allRotundaJson {
      distinct(field: {MainCollection: SELECT})
      }
  }
`
