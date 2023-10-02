import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MiniBio from "../components/MiniBio"
import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"
import PageHeader from "../components/PageHeader"
import { StaticImage } from "gatsby-plugin-image"


export default function StaffList({ data }) {
    const acqs = data.acq
    const edps = data.edp
    const opss = data.ops
    const rots = data.rot
    const dirz = data.dirs
    const mkgs = data.mkg
    

 return (
    
        <Layout>
          <SeO title="Staff Directory"/>
          <div className=" mx-auto">
          <PageHeader text={'Our Team'}/>
          <div className="w-full flex place-items-center"><StaticImage src="../images/staff_2023.jpg" alt="photo of UVA Press Staff as of Sept 2023" quality="100" placeholder="blurred" className="mx-auto"/></div>
          
          <section className="py-4 border-b-2 border-gray-100">
            <SectionHeader text={'Director'}/>
         
          <div className="py-2 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {dirz.edges.map((edge, index)=> (
            
              <MiniBio frontmatter={edge.node.frontmatter} key={`dir${index}`} />                 
             
                 
             ))}
             </div>
           </div>
         </section>
          <section className="py-4 border-b-2 border-gray-100">
            <SectionHeader text={'Operations'}/>
         
          <div className="py-2 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {opss.edges.map((edge, index)=> (
            
              <MiniBio frontmatter={edge.node.frontmatter} key={`ops${index}`} />                 
             
                 
             ))}
             </div>
           </div>
         </section>  

          

            <section className="py-4 border-b-2 border-gray-100">
            <SectionHeader text={'Acquisitions'}/>
         
          <div className="py-2 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {acqs.edges.map((edge, index) => (
             
              <MiniBio frontmatter={edge.node.frontmatter} key={`acqs${index}`} />                 
             
                 
             ))}
             </div>
           </div>
         </section>  


              <section className="py-4 border-b-2 border-gray-100">
              <SectionHeader text={'Editorial, Design, and Production'}/>
         
          <div className="py-2 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {edps.edges.map((edge, index) => (
            
              <MiniBio frontmatter={edge.node.frontmatter} key={`edps${index}`}/>                 
            
                 
             ))}
             </div>
           </div>
         </section>  

         <section className="py-4 border-b-2 border-gray-100">
         <SectionHeader text={'Sales, Marketing, and Publicity'}/>
         
          <div className="py-2 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {mkgs.edges.map((edge, index) => (
            
              <MiniBio frontmatter={edge.node.frontmatter} key={`mkgs${index}`}/>                 
             
                 
             ))}
             </div>
           </div>
         </section>  

         
         <section className="py-4" >
         <SectionHeader text={'ROTUNDA Digital Imprint'}/>
         
          <div className="py-2 mx-auto">
             <div className="flex flex-wrap -m-4 text-center">
           {rots.edges.map((edge, index) => (
             
              <MiniBio frontmatter={edge.node.frontmatter} key={`rots${index}`}/>                 
            
                 
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
    acq: allMarkdownRemark(filter: {frontmatter: {department: {in: "ACQ"}}},sort: {frontmatter: {title:ASC}}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }
    edp: allMarkdownRemark(filter: {frontmatter: {department: {in: "EDP"}}},sort: {frontmatter: {title:ASC}}) {
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
    rot: allMarkdownRemark(filter: {frontmatter: {department: {in: "ROT"}}},sort: {frontmatter: {title:ASC}}) {
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
    dirs: allMarkdownRemark(filter: {frontmatter: {department: {in: "DIR"}}}) {
      edges {
        node {
          ...MiniBioFragment
        }
      }
    }

  }
`
