import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"



const RotundaCollTemplate = ({ data }) => {
    const items = data.allRotundaJson
    return (
    <div>

        <Layout>
            <section>
            <div className="grid grid-cols-3 content-center">
                <h3 className="py-3 col-span-2">{items.edges[0].node.MainCollection} </h3>
                </div>
               </section> 
                
                <section>
                     <h3 className="text-2xl font-black py-2">Publications in This Collection:</h3>
                    <div className="container px-5 py-5 grid md:grid-cols-5 md:gap-4">
                        {items.edges.map(edge => (
                  <>  
                  <Link to={`../../title/${ edge.node.RotID }`}><h5>{edge.node.Title}</h5></Link>
                     </>
                    ))}
                        </div> 
                       
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
                }
            }
        }  
        
    }
`