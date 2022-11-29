import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RotCard from "./RotundaListFragment"

const ACList = () => {
  const data = useStaticQuery(graphql`
  query ACQuery {
      AC: allRotundaJson(filter: {SubCollection: {eq: "American Century Collection"}}, sort: {StartYear:ASC}) {
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
  return data.AC.edges.map((edge, index) => (
    <div className="p-2 sm:w-1/2 w-full" key={`amc${index}`}>
        <RotCard fields={edge.node}/>
      </div>
  ));
}

export default ACList

