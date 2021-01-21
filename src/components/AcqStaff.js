import React from "react"
import { StaticQuery, graphql} from "gatsby"
import MiniBio from "../components/MiniBio"

export default function AcqStaff({data}) {

  return (
    <StaticQuery
      query={graphql`
      query  {
        acq: allMarkdownRemark(filter: {frontmatter: {department: {in: "ACQ"}}},sort: {fields: frontmatter___title}) {
          edges {
            node {
              ...MiniBioFragment
            }
          }
        }
      }
      
      `}
      render={data => (
        <>
        {data.acq.edges.map(edge => (
                    <>
                     <MiniBio frontmatter={edge.node.frontmatter} />
                    </>
                  
                    ))}
      </>
      )}
    />
  )
}