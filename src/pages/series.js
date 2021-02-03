import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Series({ data }) {
    const series = data.allBooksJson.edges.node
 return (
    
        <Layout>
          <section>
             <h2 className="py-10">Series</h2>
           {console.log(series)}
          </section>
         

       
        </Layout>

 )
}



export const query = graphql`
  query {
    allBooksJson {
      edges {
        node {
          Series {
            seriesID
            name
          }
        }
      }
    }
    
  }
`
