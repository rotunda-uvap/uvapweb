import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RotCard from "./RotundaListFragment"
export default function ACRList() {
  return (
    <StaticQuery
      query={graphql`
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
        `}
        render={data => (
            data.ANT.edges.map((edge, index) => (
              <div className="p-2 sm:w-1/2 w-full" key={index}>
                  <RotCard fields={edge.node}/>
                </div>
              
            ))
        )}
      />
    )
  }