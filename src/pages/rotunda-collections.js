import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Colls({ data }) {
    const colls = data.allRotundaJson
 return (
    
        <Layout>
          <h2 className="py-10">Subjects</h2>
          <div className="grid md:grid-cols-4 md:grid-4">
            {colls.distinct.map(d => (
            <>
           
           <button className="text-xl py-3 px-7 hover:bg-black hover:text-white" key={d}><Link to={`../../collection/${ d }`}>{ d }</Link></button>
            
            
            </>
        ))}
        </div>
        </Layout>

 )
}



export const query = graphql`
  query {
    allRotundaJson {
        distinct(field: MainCollection)
      }
  }
`
