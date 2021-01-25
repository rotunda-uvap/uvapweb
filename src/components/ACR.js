import React from "react"
import { StaticQuery, graphql } from "gatsby"
import RotundaCard from "./RotundaCard"
export default function ACRList() {
  return (
    <StaticQuery
      query={graphql`
        query ACRQuery {
            ANT: allRotundaJson(filter: {SubCollection: {eq: "Antebellum, Civil War and Reconstruction"}}, sort: {fields: StartYear, order: ASC}) {
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
            data.ANT.edges.map(edge => (
                <>
                <div>
                <RotundaCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} ID={edge.node.RotID}/>

                </div>
                </>
            ))
        )}
      />
    )
  }