import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import MiniBio from "../components/MiniBio"


export default function Marketing({data}) {
  const staff = data.staffs
  const exhibitList = data.exhibs

  return (
    <Layout>
        <h2 className="py-10">Marketing</h2>
        
        <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                  <MiniBio frontmatter={edge.node.frontmatter} />                 </>


                    ))}

                     </div>
                
            </section>
       
        <h3 className="text-3xl py-5">Exhibits</h3>
        {exhibitList.edges.map(edge => (
            <>
             <div className="mt-6" key={edge.node.title}>
                    <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                        <div className="flex justify-between items-center"><span class="font-light text-gray-800">{edge.node.frontmatter.date}</span>
                        </div>
                        <div className="mt-2"><Link className="text-2xl text-gray-700 font-bold hover:underline" to={`../exhibits${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link>
                        </div>
                        <div className="flex justify-between items-center mt-4"><Link  to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>Read more</Link>
                                
                            
                        </div>
                    </div>
            </div>
            
            </>
        ))}

       

   
    </Layout>
  )
  
}

export const query = graphql`
    query  {
      staffs: allMarkdownRemark(filter: {frontmatter: {department: {in: "MKG"}}}) {
        edges {
          node {
            ...MiniBioFragment
          }
        }
      }
      exhibs: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "exhibit"}}}) {
        edges {
          node {
            html
            frontmatter {
              title
              templateKey
              description
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
  
  }`
