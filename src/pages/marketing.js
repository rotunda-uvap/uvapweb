import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import AwardWinners from "../components/award-winners"


export default function Marketing({data}) {
  const staff = data.allStaffJson

  return (
    <Layout>
        <h2 className="text-4xl py-5">Marketing</h2>
        
        <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                        <div className="flex flex-auto">
                            <img src="chef.jpeg" alt="muppet placeholder"/>
                             <ul className="flex flex-col px-10">
                                <li><Link to={`../staff/${ edge.node.slug }`}>{ edge.node.name }
                                </Link></li> 
                                <li>{edge.node.jobtitle}</li>
                                <li>{edge.node.phone}</li>
                                <li><a href={`mailto:${ edge.node.email }`}>{edge.node.email}</a></li>
                          </ul>
                        </div>
                    </>

                    ))}

                     </div>
                
            </section>
       
        <h3 className="text-3xl py-5">Exhibits</h3>
        <section> <AwardWinners/></section>
       

   
    </Layout>
  )
  
}

export const query = graphql`
    query  {
      site {
        siteMetadata {
          title
          logo
          description
        }
      }
      allStaffJson(filter: {department: {eq: "Marketing"}}) {
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
  }`
