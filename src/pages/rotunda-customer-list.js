import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"

export default function RotundaCustomerList({data}) {
    const custs = data.allCustomersJson
    return (
       
           <Layout>
               <h2 className="py-10 px-3 font-light">Current Rotunda Customers</h2>
               <ul className="pl-2">
               {custs.edges.map(edge => (
            <>
           <li className="font-light py-1" key={edge.node.id}>{edge.node.name }</li>
            
            </>
        ))}</ul>
               

         
</Layout>

)
}
export const query = graphql`
  query {
    allCustomersJson {
        edges {
          node {
            id
            name
          }
        }
      }
  }
`