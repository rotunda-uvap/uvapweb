import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"

const rotundaPage = ({ data }) => {
    const item = data.rotundaJson
    const summary = data.markdownRemark
    const related = data.rels
    const imageData = getImage(data.file)
 return (
   <Layout>
     <SeO title={item.Title} description="SAH Archipedia is an authoritative online encyclopedia of the built world published by the Society of Architectural Historians and the University of Virginia Press."/>
     <div className="container">
<PageHeader text={item.Title}/>       
        <div className="py-4 flex flex-1 flex-col md:flex-row  items-center">
          <div className="pl-6"><GatsbyImage image={imageData} alt="publication image"/></div>
          
          <div className="pl-4 text-5xl md:text-8xl text-ceci-gray-light font-black tracking-widest">{item.StartYear} - {item.EndYear}</div>
            
        </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        
        <div className="flex flex-row pl-6 inline-flex items-center text-ceci-gray-mid"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
</svg> <a href={item.URL} className="py-7 font-thin pl-5">Go to Publication </a></div>

        <div className="flex flex-row pl-6 inline-flex items-center text-ceci-gray-mid "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd" />
  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
</svg>  <span className="pl-5 font-thin">No Access?  Click <a href="https://rotunda.upress.virginia.edu/register/default.xqy" className="underline"> here for a free trial</a>, or <a href={`../../rot_rec_form.pdf`} className="underline">here</a> to tell your librarian that you'd like it</span></div>
       
        <section className="py-5">
          <hr className="pt-4"/>
        <article className="text-lg leading-8 dropCap cms text-ceci-gray-dark" dangerouslySetInnerHTML={{ __html:summary.html }}/>

        </section>
      {/*   <section>
          <h6 className="py-7">Highlights:</h6>
          <ul>
        {item.Facts && item.Facts.map(F => (
            <> 
            <li>{F}</li>
            
            
            </>
        ))}
        </ul>
        </section> */}
       
        {item.Prizes && <section className="items-center inline-flex px-5 pb-5"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
</svg> <span className="pl-5 font-thin">{item.Prizes}</span></section>}
        
          </div>
          <section className="pl-5 text-ceci-gray-mid">
            <h6 className="py-5 font-thin">Others in <span className="font-bold font-thin">{item.SubCollection}</span>:</h6>
            
            {related.edges.map(edge => (
                <>
                <Link to={`../${ edge.node.RotID }`} className="p-3 hover:font-bold font-thin tracking-wider text-lg font-display uppercase">&#8226;&ensp; {edge.node.Title}&ensp;</Link>
               
                </>
          ))}
          </section>
          <section className="py-5 pl-5 text-smaller text-ceci-gray-mid inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
</svg><Link to={'../../rotunda'}><h6 className="pl-5 font-thin">Back to all Rotunda</h6></Link>
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

