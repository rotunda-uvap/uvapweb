import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Series({ data }) {
    const subs = data.allBooksJson
 return (
    
        <Layout>
            {subs.distinct.map(d => (
            <>
           
                <h4  className="text-1xl mb-2" key={d}><Link to={`../series/${ d }`}>{ d }</Link></h4>
            
            
            </>
        ))}
        </Layout>

 )
}



export const query = graphql`
  query {
    allBooksJson {
        distinct(field: Series)
      }
  }
`
