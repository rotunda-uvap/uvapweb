import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import RotundaHeader from "../components/rotunda/RotundaHeader"
import styled from "@emotion/styled"
import RotCardBig from "../components/rotunda/RotundaCardBig"




export default function AllRotunda({ data }) {
 

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
  
    const Heading2 = styled("h2")`
    font-family: 'Playfair Display SC', serif;
    letter-spacing:.3em;
    font-weight:200;
    color:#757575;
    text-transform:uppercase;
    text-align:center;
    padding:1em 0;
    font-size: var(--fs-400);
    `
    const Heading3 = styled("h3")`
    font-family: 'Playfair Display SC', serif;
    letter-spacing:.3em;
    font-weight:200;
    color:#757575;
    text-transform:uppercase;
    text-align:center;
    padding:1em 0;
    font-size: var(--fs-300);`

    const Heading4 = styled("H4")` font-family: 'Playfair Display SC', serif;
    letter-spacing:.3em;
    font-weight:200;
    color:#757575;
    text-transform:uppercase;
    text-align:center;
    padding:.2em 0;
    font-size: var(--fs-200);`

    const Para = styled("p")`
    font-family: 'Assistant', sans;
    padding: 1em;
    font-size: var(--fs-200);

    `

    const AHC = data.AHClist
 return (
   <Layout>
     <SeO title="ROTUNDA: Digital Imprint of the University of Virginia Press"
     description="Since 2004, Rotunda has published innovative peer-reviewed digital projects, both born-digital and from authoritative letterpress editions."/>
    <Main>
   <RotundaHeader/>

    <Heading3 id="ahc">American History Collection</Heading3>
  <section className="touch-auto scroll-smooth mx-auto max-w-5xl max-h-screen flex flex-nowrap overflow-x-auto snap-x gap-4">
     {AHC.nodes.map((n, index) => (
              <RotCardBig fields={n}/>
            
        
    ))} 
</section>
  </Main>
    
   </Layout>
    
 )
}

export const query = graphql`
  query {
     
      AHClist: allRotundaJson(filter: {MainCollection: {eq: "American History Collection"}}) {
          nodes {
            SubCollection
            Title
            RotID
            imageFilename
            MainDescription {
                html
              }
          }
        } 
      
  }
`