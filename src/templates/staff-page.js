import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    const staffMember = data.staffJson
 return (
   <Layout>
     <div>
        <h2 className="py5 text-1xl font-black mt-5 mb-2">{staffMember.name}</h2> 
        {staffMember.jobtitle && <h3 className="py5 text-1xl mt-2 mb-2">{staffMember.jobtitle}</h3> }

        {staffMember.email && <h3 className="py5 text-1xl italic mt-2 mb-2"><a href={`mailto:${ staffMember.email }`}>{staffMember.email}</a></h3>}
        <p dangerouslySetInnerHTML={{ __html: staffMember.bio.html }}/> 
    </div>
   
    
    
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!) {
    staffJson(id: { eq: $id }) {
      id
      name
      slug
      department
      jobtitle
      email
      phone
      bio {
        html
      }
      
    }
  }
`
