import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FaArrowAltCircleRight, FaUserPlus} from "react-icons/fa"

const rotundaPage = ({ data }) => {
    const item = data.rotundaJson
    const summary = data.markdownRemark
    const related = data.rels
    const imageData = getImage(data.file)
 return (
   <Layout>
     <div>
        <h2 className="py-10">{item.Title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <GatsbyImage image={imageData} alt="publication image"/>
        <div className="flex flex-col pl-6"><a href={item.URL} className="py-7"><button> <FaArrowAltCircleRight className="inline"/> Go to Publication </button></a>
          <button className="py-1 text-left"> <FaUserPlus className="inline"/> No Access?  Click <a href="https://rotunda.upress.virginia.edu/register/default.xqy"> here for a free trial</a>, or here to tell your librarian that you'd like it</button></div>
       
        <section className="py-7">
          <hr className="py-2"/>
        <article dangerouslySetInnerHTML={{ __html:summary.html }}/>

        </section>
        <section>
          <h6 className="py-7">Highlights:</h6>
          <ul>
        {item.Facts && item.Facts.map(F => (
            <> 
            <li>{F}</li>
            
            
            </>
        ))}
        </ul>
        </section>
        <section className="py-7">
        {item.Prizes && item.Prizes}
        </section>
        <section className="text-8xl py-7 text-gray-300 font-black tracking-widest">{item.StartYear} - {item.EndYear}</section>
          </div>
          <section>
            <h6 className="py-7">Others in the <span className="font-bold">{item.SubCollection}</span>:</h6>
            
            {related.edges.map(edge => (
                <>
                <Link to={`../${ edge.node.RotID }`} className="p-3 text-light text-lg">&#8226;&ensp; {edge.node.Title}&ensp;</Link>
               
                </>
          ))}
          </section>
      </div>
   </Layout>
    
 )
}

export default rotundaPage

export const query = graphql`
  query($id: String!, $imageid: String!, $relSeries: String!) {
    rotundaJson(RotID: {eq: $id}) {
        RotID
        Title
        URL
        Facts
        Prizes
        SubCollection
        StartYear
        EndYear
    }
    file(relativePath: {eq: $imageid}) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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
     rels: allRotundaJson(filter: {SubCollection: {eq: $relSeries}}) {
      edges {
        node {
          Title
          RotID
          SubCollection
        }
      }
    }

  }
`

