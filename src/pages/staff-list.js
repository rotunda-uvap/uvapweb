import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MiniBio from "../components/MiniBio"
import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"
import PageHeader from "../components/PageHeader"



export default function StaffList({ data }) {
    const acqs = data.acq
    const edps = data.edp
    const opss = data.ops
    const rots = data.rot
    const pubs = data.pub
    const mkgs = data.mkg
    

 return (
    
        <Layout>
          <SeO title="Staff Directory"/>
          <div className="container px-5 py-12 mx-auto">
          <PageHeader text={'Our Team'}/>
          
          <section className="py-4 border-b-2 border-gray-100">
            <SectionHeader text={'Operations'}/>
         
          <div className="container px-5 py-12 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {opss.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
         </section>  

          

            <section className="py-4 border-b-2 border-gray-100">
            <SectionHeader text={'Acquisitions'}/>
         
          <div className="container px-5 py-12 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {acqs.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
         </section>  


              <section className="py-4 border-b-2 border-gray-100">
              <SectionHeader text={'Editorial, Design and Production'}/>
         
          <div className="container px-5 py-12 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {edps.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
         </section>  

         <section className="py-4 border-b-2 border-gray-100">
         <SectionHeader text={'Marketing'}/>
         
          <div className="container px-5 py-12 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {mkgs.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
         </section>  

         <section className="py-4 border-b-2 border-gray-100">
         <SectionHeader text={'Publicity'}/>
         
          <div className="container px-5 py-12 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {pubs.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
         </section>  
         
         <section className="py-4" >
         <SectionHeader text={'ROTUNDA Digital Imprint'}/>
         
          <div className="container px-5 py-12 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {rots.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
         </section>  
          </div>
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
