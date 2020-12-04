import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function AboutPage({ data }) {
    const staff = data.allStaffJson
    const pagedata = data.markdownRemark
 return (
    
        <Layout>
            <h2 className="text-4xl py-2">About UVa Press</h2>
            <section className="grid md:grid-cols-5 py-5">
                <Link to={'/contact'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Contact</button></Link>
                <Link to={'/staff-list'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Staff Directory</button></Link>
                <Link to={'/content/career'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Career Opportunties</button></Link>
                <Link to={'/content/support'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Support</button></Link>
                <Link to={'/content/permissions'}><button className="p-3 border-b-4 border-white hover:border-black w-full">Rights and Permissions</button></Link>

            </section>

         <p className="py-5" dangerouslySetInnerHTML={{__html: pagedata.html}}/>



            <section className="py-20">
                
                <div id="staff" className="grid md:grid-cols-2 gap-2"> 
                <h4 className="py-2 font-black text-2xl">UVa Staff</h4>
                {staff.edges.map(edge => (
                    <>
                        <div className="flex flex-auto">
                            <img src="/images/scooter.jpg" alt="muppet placeholder"/>
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
          

           
        </Layout>

 )
}



export const query = graphql`
  query {
   
      allStaffJson{
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
      markdownRemark(frontmatter: {type: {eq: "page"}, title: {eq: "About"}}) {
        html
      }
     
  }
`
