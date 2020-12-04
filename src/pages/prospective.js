import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import ActiveSeries from "../components/active-series"


export default function ProspectiveAuthorsPage({ data }) {
    const staff = data.allStaffJson
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="text-4xl py-2">For Prospective Authors</h2>

         <p dangerouslySetInnerHTML={{__html: pagedata.html}}/>

         <ActiveSeries/>


            <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                        <div className="flex flex-auto">
                            <img src="scooter.jpg" alt="muppet placeholder"/>
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

                     </div>
                
            </section>
            <section className="py-20 bg-gray-100">
                <h3 className="text-4xl">Files</h3>
            <p>Files to download, how display? </p>
            </section>

           
        </Layout>

 )
}



export const query = graphql`
  query {
   
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
      markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "Prospective Authors"}}) {
        html
      }
  }
`
