import React from "react"
import { StaticQuery, graphql} from "gatsby"
import BioCard from "./BioCard"

export default function AcqStaff({data}) {

  return (
    <StaticQuery
      query={graphql`
      query  {
        allStaffJson(filter: {department: {eq: "Acquisitions"}}) {
            edges {
              node {
                name
                department
                jobtitle
                phone
                email
                photo
                slug
              }
            }
          }
      }
      
      `}
      render={data => (
          
        <>
      
    
        {data.allStaffJson.edges.map(edge => (
                    <>
                       <BioCard name={edge.node.name} title={edge.node.jobtitle} phone={edge.node.phone} email={edge.node.email} slug={edge.node.slug} photo={edge.node.photo}/>
                    </>

                    ))}
      </>
      )}
    />
  )
}