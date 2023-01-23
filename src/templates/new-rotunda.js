import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import sanitizeHtml from 'sanitize-html'
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const NewRotundaPage = ({ data }) => {
    const item = data.rotundaJson
    const summary = data.markdownRemark
    const related = data.rels
    const imageData = getImage(data.file)

    const Main = styled("main")`
    --fs-100: clamp(0.84rem, calc(0.94rem + -0.13vw), 0.5rem);
    --fs-200: clamp(1.09rem, calc(1.08rem + 0.06vw), .75rem);
    --fs-300: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.2rem);
    --fs-400: clamp(1.58rem, calc(1.41rem + 0.83vw), 1rem);
    --fs-500: clamp(1.89rem, calc(1.59rem + 1.51vw), 1.67rem);
    --fs-600: clamp(2.27rem, calc(1.77rem + 2.51vw), 2.55rem);
    --fs-700: clamp(2.72rem, calc(1.94rem + 3.93vw), 3.74rem);
    --fs-800: clamp(3.27rem, calc(2.08rem + 5.95vw), 5.31rem);
    width: min(calc(100% - 2rem), 100rem);
    margin:0 auto;
    color:#414042; 
    font-family: 'Assistant', sans;
    letter-spacing:.05em;
    padding:1em;
    font-size: var(--fs-200);
   `
 return (
   <Layout>
     <SeO title={item.Title} description="UVA Press's Rotunda imprint publishes innovative peer-reviewed digital projects, both born-digital and from authoritative letterpress editions. Rotunda publications are available to both libraries and independent scholars as single titles or as collections. The American History Collection includes the sub-collections American Founding Era; Antebellum, Civil War, and Reconstruction; and the American Century. "/>
    <Main>
     
<section className="mx-auto max-w-7xl  p-4 mb-4">
     <div class=" flex-shrink-0 w-full flex items-center overflow-hidden">
              <div class="mb-4 w-full">
                <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 rotCard hover:shadow-xl transition-shadow duration-300 ease-in-out" >
                <div className="py-4"><StaticImage
      src="./../images/rotunda_logo.svg"
      alt="Rotunda Home"
      placeholder="blurred"
      width={100}/></div>
                  <h2 class="text-3xl font-bold mb-6">{item.Title}</h2>
                 
                  <div className="flex flex-row pl-6 inline-flex items-center text-ceci-gray-mid"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
</svg> <a href={item.URL} className="py-2 font-thin pl-5">Go to Publication </a></div>

        <div className="flex flex-row pl-6 inline-flex items-center text-ceci-gray-mid "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
</svg>  <span className="pl-5 font-thin">No Access?  Click <a href="https://rotunda.upress.virginia.edu/register/default.xqy" className="underline"> here for a free trial</a>, or <a href={`../../rot_rec_form.pdf`} className="underline">here</a> to tell your librarian that you'd like it</span></div>
       
                  <div className="text-gray-500 mb-6 pb-2 lg:pb-0 pt-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(summary.html) }}></div>

                </div>
              </div>
      
              <div className="flex-shrink-0">
              <GatsbyImage image={imageData} alt="publication image"/>
              </div>
            </div>
          </section>
          <section className="pl-5 text-ceci-gray-mid">
            <h6 className="py-5 font-thin">Others in <span className="font-bold font-thin">{item.SubCollection}</span>:</h6>
            
            {related.edges.map((edge, index) => (
                <>
                <Link to={`../${ edge.node.RotID }`} className="p-3 hover:font-bold font-thin tracking-wider text-lg font-display uppercase"  key={`rel${index}`}>&#8226;&ensp; {edge.node.Title}&ensp;</Link>
               
                </>
          ))}
          </section>
          <section className="py-5 pl-5 text-smaller text-ceci-gray-mid inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
</svg><Link to={'../../rotunda'}><h6 className="pl-5 font-thin">Back to all Rotunda</h6></Link>
          </section>
</Main>
   </Layout>
    
 )
}

export default NewRotundaPage

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

