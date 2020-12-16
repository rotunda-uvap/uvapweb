import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BioCard from "../components/BioCard"


export default function PubPage({ data }) {
    const news = data.allMarkdownRemark
    const staff = data.allStaffJson

 return (
    
        <Layout>
            <h2 className="text-5xl py-2">Publicity</h2>

            <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                    <BioCard name={edge.node.name} title={edge.node.jobtitle} phone={edge.node.phone} email={edge.node.email} slug={edge.node.slug} photo={edge.node.photo}/>
                 </>


                    ))}

                     </div>
                
            </section>
            <section className="py-20 bg-gray-100">
                <h3 className="text-4xl">Social Media</h3>
            <p>Facebook and Twitter integration (how much?) </p>
            </section>

            <section className="py-20">
                <h3 className="text-4xl py-7">All News, Media and Events</h3>
            <div className="grid md:grid-cols-3">
              
              {news.edges.map(edge => (
            <>
            <article className="flex flex-wrap place-content-center p-5 shadow-md hover:bg-black hover:text-white">
              <div><button className="text-center uppercase px-5 py-3 rounded text-xs">{edge.node.frontmatter.type}</button></div>
                <div className="mx-auto w-4/5"><h3 className="text-2xl font-black uppercase py-5 text-center" key={edge.node.frontmatter.title}><Link to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link></h3>
                </div>
                <Link to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>
                  <button className="rounded bg-blue-400 text-white font-black p-5 text-center uppercase">go to article</button></Link>
                </article>
            </>
        ))}  
        
            </div>
            
        </section>
        </Layout>

 )
}



export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {in: ["news", "media", "event"]}}}) {
      edges {
          node {
            html
            frontmatter {
              title
              type
              description
            }
            fields {
              slug
            }
          }
        }
      }
      allStaffJson(filter: {department: {eq: "Publicity"}}) {
        edges {
          node {
            name
            department
            jobtitle
            phone
            email
            slug
            photo
          }
        }
      }
  }
`
