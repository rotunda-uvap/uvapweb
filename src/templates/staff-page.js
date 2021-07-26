import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"

const staffPage = ({ data }) => {
    const staffMember = data.markdownRemark
    const staff_image = getImage(data.Img)
 return (
   <Layout>
     <SeO title={staffMember.frontmatter.title}/>
     <div className="container px-5 py-7 mx-auto">
        <h2 className="text-5xl font-medium title-font text-gray-900 mb-4 text-center">{staffMember.frontmatter.title}</h2>
        {staffMember.frontmatter.profile_photo && <div className="text-center py-2"><GatsbyImage image={staff_image} alt={staffMember.frontmatter.title}/></div>}
        {staffMember.frontmatter.job_title && <h5 className="pt-4 pb-2 text-gray-500 text-center italic">{staffMember.frontmatter.job_title}</h5> }

        {staffMember.frontmatter.email && <h6 className="text-center"><a href={`mailto:${ staffMember.frontmatter.email }`}>{staffMember.frontmatter.email}</a></h6>}
        {staffMember.html && <article 
          dangerouslySetInnerHTML={{ __html: staffMember.html }} className="md:w-1/2 md:mx-auto py-7 cms dropCap"/> }
    </div>
    
   </Layout>
    
 )
}

export default staffPage

export const query = graphql`
  query($id: String!,$relDir: String!) {
    markdownRemark(frontmatter: {templateKey: {eq: "bio"}}, id: { eq: $id }) {
      html
      id
      frontmatter {
          templateKey
          title
          name_slug
          job_title
          profile_photo
          email
          phone
          
        }
    }
    Img: file(extension: {eq: "jpg"}, relativeDirectory: {eq: $relDir}) {
      childImageSharp {
        fixed {
          src
        }
        gatsbyImageData(width:250, layout: CONSTRAINED, placeholder: TRACED_SVG)
        
      }
    }
  } 
`
