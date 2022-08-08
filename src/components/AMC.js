import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RotCard from "./RotundaListFragment"
export default function ACList() {
  return (
    <StaticQuery
      query={graphql`
        query ACQuery {
            AC: allRotundaJson(filter: {SubCollection: {eq: "American Century Collection"}}, sort: {fields: StartYear, order: ASC}) {
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
            data.AC.edges.map((edge, index) => (
              <div className="p-2 sm:w-1/2 w-full" key={`amc${index}`}>
                  <RotCard fields={edge.node}/>
                </div>
            ))
        )}
      />
    )
  }