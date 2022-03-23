import React from "react"
import { graphql, Link } from "gatsby"
import RotundaCard from "../components/RotundaCard"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"



const RotundaCollTemplate = ({ data }) => {
    const items = data.allRotundaJson
    return (
    <div>
        <Layout>
            <SeO title={items.edges[0].node.MainCollection}/> 
            <PageHeader text={items.edges[0].node.MainCollection}/>
                
                <section>
                    <div className="container px-5 py-5 grid md:grid-cols-3 md:gap-4">
                        {items.edges.map(edge => (
                  <>  
                   <RotundaCard Title={edge.node.Title} Subtitle={edge.node.Subtitle} ID={edge.node.RotID} Image={edge.node.imageFilename}/>

                     </>
                    ))}
                        </div> 
                       
                </section>
             
                <section className="py-5 pl-5 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
</svg><Link to={'../../rotunda'}><h6 className="pl-5 font-thin">Back to all Rotunda</h6></Link>
          </section>
            
        </Layout>
  </div>
    )
    
    ;
};

export default RotundaCollTemplate; 

export const query = graphql`
    query($coll: String!){
        allRotundaJson(filter: {MainCollection: { eq: $coll }}) {
            edges {
                node {
                  Title
                  Subtitle
                  RotID
                  MainCollection
                  SubCollection
                  imageFilename
                }
            }
        } 
         
        
    }
`