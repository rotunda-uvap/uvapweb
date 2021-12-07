import React from "react"
import {StaticQuery, graphql } from "gatsby"
import RotundaCard from "./RotundaCard"
export default function LACList() {
  return (
    <StaticQuery
      query={graphql`
        query LCCQuery {
            LAC: allRotundaJson(filter: {SubCollection: {eq: "Literature"}}, sort: {fields: StartYear, order: ASC}) {
                edges {
                  node {
                    Title
                    Subtitle
                    RotID
                    EndYear
                    imageFilename
                    StartYear
                    MainCollection
                    SubCollection
                  }
                }
              }
        }
        `}
        render={data => (
            data.LAC.edges.map((edge, index) => (
              <div className="p-2 sm:w-1/2 w-full" key={index}>
                 <RotundaCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} ID={edge.node.RotID} Image={edge.node.imageFilename}/>
                </div>
            ))
        )}
      />
    )
  }