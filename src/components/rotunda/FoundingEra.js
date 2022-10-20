import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RotCard from "./RotundaListFragment"

const FEList = () => {
  const data = useStaticQuery(graphql`
  query FEQuery {
      FE: allRotundaJson(filter: {SubCollection: {eq: "Founding Era Collection"}}, sort: {fields: StartYear, order: ASC}) {
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
  return data.FE.edges.map((edge, index) => (
    <div className="p-2 sm:w-1/2 w-full" key={`fe${index}`}>
      <RotCard fields={edge.node}/> 
    </div>
  ));
}

export default FEList

