import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import sanitizeHtml from 'sanitize-html'

const staffPage = ({ data }) => {
    const staffMember = data.markdownRemark
    const staff_image = getImage(data.Img)
 return (
   <Layout>
     <SeO title={staffMember.frontmatter.title}/>
     <div className="mx-auto">
       <PageHeader text={staffMember.frontmatter.title}/>
        {staffMember.frontmatter.profile_photo && <div className="text-center py-2"><GatsbyImage image={staff_image} alt={staffMember.frontmatter.title}/></div>}
        {staffMember.frontmatter.job_title && <h5 className="pt-4 pb-2 text-ceci-gray-mid font-thin tracking-wide text-center italic">{staffMember.frontmatter.job_title}</h5> }

        {staffMember.frontmatter.email && <h6 className="text-center tracking-wide font-thin"><a href={`mailto:${ staffMember.frontmatter.email }`}>{staffMember.frontmatter.email}</a></h6>}
        {staffMember.html && <article 
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(staffMember.html )}} className="md:w-1/2 md:mx-auto py-7 cms dropCap text-lg"/> }
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
          job_title
          profile_photo 
          email
          phone
          
        }
    }
    
    Img: file(extension: {regex: "/(jpeg|jpg|gif|png)/"}, relativeDirectory: {eq: $relDir}) {
      publicURL
            childImageSharp {
        gatsbyImageData(width:300, layout: CONSTRAINED, placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        
      }
    }
  } 
`
