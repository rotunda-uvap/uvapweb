import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ data }) => {
    const item = data.rotundaJson
    const summary = data.markdownRemark
    const imageData = getImage(data.file)
 return (
   <Layout>
     <div>
        <h2 className="py-10">{item.Title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <GatsbyImage image={imageData} alt="publication image" />
          <Link to={item.URL} className="py-7"><button>Go to Publication</button></Link>
        <article dangerouslySetInnerHTML={{ __html:summary.html }}/>
        <section className="text-8xl py-7 text-gray-300 font-black tracking-widest">{item.StartYear} - {item.EndYear}</section>
          </div>
      </div>
   </Layout>
    
 )
}



export const query = graphql`
  query($id: String!, $imageid: String!) {
    rotundaJson(RotID: {eq: $id}) {
        RotID
        Title
        URL
        StartYear
        EndYear
    }
    file(relativePath: {eq: $imageid}) {
      childImageSharp {
        gatsbyImageData(width: 250, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "rotunda"}, rid: { eq: $id }}) {
      html
      frontmatter {
          templateKey
          title
          rid
          related_books {
            book_id
            book_title
          }
      }
  }
  }
`

