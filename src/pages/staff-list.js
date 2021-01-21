import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MiniBio from "../components/MiniBio"



export default function StaffList({ data }) {
    const acqs = data.acq
    const edps = data.edp
    const opss = data.ops
    const rots = data.rot
    const pubs = data.pub
    const mkgs = data.mkg
    

 return (
    
        <Layout>
          <h2 className="py-10">UVaP Staff</h2>
          
          <section >
          <h5 className="text-2xl font-black py-2">Operations</h5>
          <div className="container py-5 grid md:grid-cols-2">
           {opss.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
           </div>
           <h5 className="text-2xl font-black py-2">Acquisitions</h5>

          <div className="container py-5 grid md:grid-cols-2">

            {acqs.edges.map(edge => (
              <>
               <MiniBio frontmatter={edge.node.frontmatter} />                 
              </>
                  
              ))}
            </div>
            <h5 className="text-2xl font-black py-2">Editorial, Design and Production</h5>

            <div className="container py-5 grid md:grid-cols-2">

            {edps.edges.map(edge => (
              <>
               <MiniBio frontmatter={edge.node.frontmatter} />                 
              </>
                  
              ))}
              </div>
              <h5 className="text-2xl font-black py-2">Marketing</h5>

              <div className="container py-5 grid md:grid-cols-2">
           
           {mkgs.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
           </div>
           <h5 className="text-2xl font-black py-2">Publicity</h5>

           <div className="container py-5 grid md:grid-cols-2">
           
           {pubs.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
           </div>
           <h5 className="text-2xl font-black py-2">ROTUNDA Digital Imprint</h5>

           <div className="container py-5 grid md:grid-cols-2">
           
           {rots.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
           </div>
        </section>
        </Layout>

 )
}



export const query = graphql`
  query {
    acq: allMarkdownRemark(filter: {frontmatter: {department: {in: "ACQ"}}},sort: {fields: frontmatter___title}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
    edp: allMarkdownRemark(filter: {frontmatter: {department: {in: "EDP"}}},sort: {fields: frontmatter___title}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
    mkg: allMarkdownRemark(filter: {frontmatter: {department: {in: "MKG"}}}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
    ops: allMarkdownRemark(filter: {frontmatter: {department: {in: "OPS"}}}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
    rot: allMarkdownRemark(filter: {frontmatter: {department: {in: "ROT"}}},sort: {fields: frontmatter___title}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
    pub: allMarkdownRemark(filter: {frontmatter: {department: {in: "PUB"}}}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }


  }
`
