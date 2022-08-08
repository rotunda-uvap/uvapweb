import React from "react"
import {StaticQuery, graphql } from "gatsby"
import RotCard from "./RotundaListFragment"
export default function LACList() {
  return (
    <StaticQuery
      query={graphql`
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
        `}
        render={data => (
            data.LAC.edges.map((edge, index) => (
              <div className="p-2 sm:w-1/2 w-full" key={`lac${index}`}>
                    <RotCard fields={edge.node}/>     
                </div>
            ))
        )}
      />
    )
  }