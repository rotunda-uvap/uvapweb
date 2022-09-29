import React from "react"
import {useStaticQuery, graphql } from "gatsby"
import RotCard from "./RotundaListFragment"

const LACList = () => {
  const data = useStaticQuery(graphql`
  query LCCQuery {
      LAC: allRotundaJson(filter: {SubCollection: {eq: "Literature"}}, sort: {fields: StartYear, order: ASC}) {
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
  return data.LAC.edges.map((edge, index) => (
    <div className="p-2 sm:w-1/2 w-full" key={`lac${index}`}>
          <RotCard fields={edge.node}/>     
      </div>
  )) ;
}

export default LACList

