import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RotundaCard from "./RotundaCard"
export default function FEList() {
  return (
    <StaticQuery
      query={graphql`
        query FEQuery {
            FE: allRotundaJson(filter: {SubCollection: {eq: "Founding Era Collection"}}, sort: {fields: StartYear, order: ASC}) {
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
            data.FE.edges.map(edge => (
                <>
                 <RotundaCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} ID={edge.node.RotID}/>
                </>
            ))
        )}
      />
    )
  }