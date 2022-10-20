import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RotCard from "./RotundaListFragment"


const ACRList = () => {
  const data = useStaticQuery(graphql`
  query ACRQuery {
      ANT: allRotundaJson(filter: {SubCollection: {eq: "Antebellum, Civil War and Reconstruction"}}, sort: {fields: StartYear, order: ASC}) {
          edges {
            node {
              ...RotFieldFragment
              StartYear
              SubCollection
            }
          }
        }
  }
  `);
  return data.ANT.edges.map((edge, index) => (
    <div className="p-2 sm:w-1/2 w-full" key={`acr${index}`}>
        <RotCard fields={edge.node}/>
      </div>
    
  ));
}

export default ACRList
