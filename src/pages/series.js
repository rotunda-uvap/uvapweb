import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ActiveSeries from "../components/active-series"
import CompletedSeries from "../components/CompletedSeries"


export default function Series({ data }) {
    const series = data.allSeriesJson
 return (    
        <Layout>
          <ActiveSeries/>
          <div id="completed">
         <CompletedSeries/></div>
         {/* {series.edges.map(edge => (
            <>           
           <li className="lg:w-1/3 mb-1 w-1/2" >
          <Link to={`../series/${ edge.node.id }`} className="text-gray-600 hover:text-gray-800">{ edge.node.seriesName }</Link>
        </li>            
            </>
        ))}  */}      
        </Layout>
 )
}
export const query = graphql`
  query {
    allSeriesJson {
      edges {
        node {
            id
            seriesName
        }
      }
    }
  }
`
