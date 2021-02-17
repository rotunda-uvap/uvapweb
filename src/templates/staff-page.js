import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const staffPage = ({ data }) => {
    const staffMember = data.markdownRemark
 return (
   <Layout>
     <div>
        <h2 className="py-10">{staffMember.frontmatter.title}</h2> 
        {staffMember.frontmatter.job_title && <h4 className="py5 text-1xl mt-2 mb-2">{staffMember.frontmatter.job_title}</h4> }

        {staffMember.frontmatter.email && <h5 className="py5 text-1xl italic mt-2 mb-2"><a href={`mailto:${ staffMember.frontmatter.email }`}>{staffMember.frontmatter.email}</a></h5>}
        {staffMember.html && <article 
          dangerouslySetInnerHTML={{ __html: staffMember.html }}/> }
    </div>
    
   </Layout>
    
 )
}

export default staffPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "bio"}}, id: { eq: $id }) {
      html
      id
      frontmatter {
          templateKey
          title
          name_slug
          job_title
          email
          phone
        }
    }
  } 
`
