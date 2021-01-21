import React from "react"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import MiniBio from "../components/MiniBio"

export default function RotundaHome({ data }) {
    const RotundaLogo = getImage(data.rotLogo)
    const staff = data.staffs
    const pubs = data.allRotundaJson
 return (
   <Layout>
     <div>
         <div className="grid md:grid-cols-3 py-10">
         <GatsbyImage image={RotundaLogo} alt="Rotunda logo" className="justify-self-center" />
         <p class="tracking-wide leading-normal md:col-span-2 font-light ">Rotunda was created for the publication of original digital scholarship along with newly digitized critical and documentary editions in the humanities and social sciences. The collection combines the originality, intellectual rigor, and scholarly value of traditional peer-reviewed university press publishing with thoughtful technological innovation designed for scholars and students.</p>
         </div>
         
    <section class="subs">
      <p className="font-light">If you are connecting via a campus Internet connection, you can expect to gain access to any Rotunda publication purchased by your institution. If your institution has not purchased a particular Rotunda publication, contact your institution’s library about ordering. You may also sign up for an individual free trial to evaluate Rotunda before making a purchase decision.</p>
      <div className="grid md:grid-cols-4 md:gap-4 py-7">
      
      <button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Customer Entrance</button>
      <button className="border-b-4 border-white hover:border-black w-full h-full uppercase">MARC Records</button>
      <button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Purchase</button>
      <button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Free Trial</button>
      </div>
    </section>
    <section class="coll">
      <h5>Collections</h5>
      <div class="collections">
          <p className="font-light pt-2">Rotunda publications are available to both libraries and independent scholars as single titles or as collections. The American History Collection includes the sub-collections American Founding Era; Antebellum, Civil War, and Reconstruction; and the American Century.</p>
          <p className="font-light">Rotunda publications are produced by staff members of UVA Press. We have in-house expertise in Web development; MarkLogic Server programming and administration; development using XQuery, XSLT, JavaScript, JQuery and related tools; and markup or conversion of documents to XML using the TEI Guidelines.</p></div>
          <div className="grid md:grid-cols-3 md:gap-3 py-7">

        
        <button className="border-b-4 border-white hover:border-black w-full h-full uppercase">American History Collection</button>
        <button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Architecture</button>
        <button className="border-b-4 border-white hover:border-black w-full h-full uppercase">Literature and Culture Collection</button>
      </div>
    </section>
    <section>
        <h5>Contacts</h5>
        <p className="font-light py-2">If you are the author or editor of a digital project that you think might be a suitable candidate for publication within Rotunda, please send an inquiry to UVa Press editor in chief Eric Brandt.

</p>
    <div className="grid md:grid-cols-3 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                  <MiniBio frontmatter={edge.node.frontmatter} />                 </>


                    ))}

    </div>
                
    </section>
    <section>
    <h5 className="py-2">Publications</h5>
    {pubs.edges.map(edge => (
            <>
            <div>
                <Link to={`../title/${ edge.node.RotID }`} className="py-3 text-light text-lg">{edge.node.Title}</Link>
                {edge.node.Subtitle && <span className="py-3 text-light text-lg text-italic">: {edge.node.Subtitle}</span>}
            </div>
            </>
        ))}
    </section>
    </div>
   </Layout>
    
 )
}

export const query = graphql`
  query {
    rotLogo: file(relativePath: {eq: "rotunda_logo.png"}) {
        childImageSharp {
          gatsbyImageData(layout:FIXED, placeholder: TRACED_SVG)
        }
      }
      staffs: allMarkdownRemark(filter: {frontmatter: {department: {in: "ROT"}}},sort: {fields: frontmatter___title}) {
        edges {
          node {
            ...MiniBioFragment
          }
        }
      }
      allRotundaJson {
        edges {
          node {
            Title
            Subtitle
            RotID
            Facts
            EndYear
            imageFilename
            StartYear
            MainCollection
            SubCollection
          }
        }
      }
  }
`