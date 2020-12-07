import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

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
                        <div className="flex flex-auto">
                            <img src="../scooter.jpg" alt="placeholder"/>
                             <ul className="flex flex-col px-10">
                                <li className="font-black"><Link to={`../staff/${ edge.node.slug }`}>{ edge.node.name }
                                </Link></li> 
                                <li>{edge.node.jobtitle}</li>
                                <li>{edge.node.phone}</li>
                                <li><a href={`mailto:${ edge.node.email }`}>{edge.node.email}</a></li>
                          </ul>
                        </div>
                    </>

                    ))}
      </>
      )}
    />
  )
}