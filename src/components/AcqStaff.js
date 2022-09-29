import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import MiniBio from "../components/MiniBio"


const AcqStaff = () => {
  const data = useStaticQuery(graphql`
  query  {
    acq: allMarkdownRemark(filter: {frontmatter: {department: {in: "ACQ"}}},sort: {fields: frontmatter___title}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
  }
  
  `);
  return <div className="container px-5 py-12 mx-auto">
  <div className="flex flex-wrap -m-4 text-center">
   {data.acq.edges.map(edge => (
               
                <MiniBio frontmatter={edge.node.frontmatter} />
               
               ))}
               </div>
 </div> ;
}

export default AcqStaff

