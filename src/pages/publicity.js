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
                <h3 className="text-4xl">All News, Media and Events</h3>
            <div className="grid md:grid-cols-3">
              
              {news.edges.map(edge => (
            <>
            <article className="flex flex-wrap p-5 shadow-md">
                <h3  className="text-lg uppercase pb-1 pt-1"key={edge.node.frontmatter.title}><Link to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}>{ edge.node.frontmatter.title }</Link></h3>
            <div key={`teaser`} dangerouslySetInnerHTML={{ __html: edge.node.html.split(' ').splice(0, 25).join(' ') + '...' }}></div>
            <Link className="w-full" to={`../${ edge.node.frontmatter.type }${ edge.node.fields.slug }`}><button className="w-full bg-green-400 p-4 text-center uppercase">go to article</button></Link>
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
