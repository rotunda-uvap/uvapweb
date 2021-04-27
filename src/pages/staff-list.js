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
          <h2 className="py-10 px-3 font-light">UVaP Staff</h2>
          
          <section >
          <div className="text-center mb-10">
           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Operations</h1>
           </div>
           <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>
      <div className="container px-5 py-12 mx-auto">
       <div className="flex flex-wrap -m-4 text-center">
           {opss.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
           <div className="text-center mb-10">
           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Acquisitions</h1>
           </div>  
           <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>
      <div className="container px-5 py-12 mx-auto">
       <div className="flex flex-wrap -m-4 text-center">
            {acqs.edges.map(edge => (
              <>
               <MiniBio frontmatter={edge.node.frontmatter} />                 
              </>
                  
              ))}
              </div>
            </div>
            <div className="text-center mb-10">
           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Editorial, Design and Production</h1>
           </div>
           <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>
      <div className="container px-5 py-12 mx-auto">
       <div className="flex flex-wrap -m-4 text-center">

            {edps.edges.map(edge => (
              <>
               <MiniBio frontmatter={edge.node.frontmatter} />                 
              </>
                  
              ))}
              </div>
              </div>
              <div className="text-center mb-10">
           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Marketing</h1>
           </div>
           <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>

      <div className="container px-5 py-12 mx-auto">
       <div className="flex flex-wrap -m-4 text-center">
           
           {mkgs.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
         
           <div className="text-center mb-10">
           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Publicity</h1>
           </div>
           <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>
      <div className="container px-5 py-12 mx-auto">
       <div className="flex flex-wrap -m-4 text-center">
           
           {pubs.edges.map(edge => (
             <>
              <MiniBio frontmatter={edge.node.frontmatter} />                 
             </>
                 
             ))}
             </div>
           </div>
           <div className="text-center mb-10">
           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">ROTUNDA Digital Imprint</h1>
           </div>
           <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-gray-800 inline-flex"></div>
      </div>
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
