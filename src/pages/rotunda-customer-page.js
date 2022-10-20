import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import RotundaHeader from "../components/rotunda/RotundaHeader"
import styled from "@emotion/styled"

const Main = styled("main")`
--fs-100: clamp(0.84rem, calc(0.94rem + -0.13vw), 0.91rem);
--fs-200: clamp(1.09rem, calc(1.08rem + 0.06vw), 1.13rem);
--fs-300: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
--fs-400: clamp(1.58rem, calc(1.41rem + 0.83vw), 2rem);
--fs-500: clamp(1.89rem, calc(1.59rem + 1.51vw), 2.67rem);
--fs-600: clamp(2.27rem, calc(1.77rem + 2.51vw), 3.55rem);
--fs-700: clamp(2.72rem, calc(1.94rem + 3.93vw), 4.74rem);
--fs-800: clamp(3.27rem, calc(2.08rem + 5.95vw), 6.31rem);
width: min(calc(100% - 2rem), 60rem);
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



const Para = styled("p")`
font-family: 'Assistant', sans;
padding: .5em 1em;
font-size: var(--fs-200);

`

export default function RotundaCustomerList({data}) {
    const custs = data.allCustomersJson
    return (
       
           <Layout>
                   <SeO title="A list of our current customers"/>
                   <Main><RotundaHeader/>
                   <Heading2>Customer Information</Heading2>
                     <section>
      <Para>Current institutional users (IP-authenticated accounts): <a href="https://rotunda.upress.virginia.edu/UsageStats/?tab=home&amp;job=dates">view statistics for your usage of <span className="rotunda">Rotunda</span> publications</a>.</Para>
<Para>Note that your usage stats may show access to publications which you have not purchased, as your users will be able to navigate to contents pages within them, and those page views are logged.</Para>
      </section>
      <section className="px-5">
        <Heading3>MARC Records</Heading3>

<ul>
    <li className="tracking-wider font-playfair"><b>American Founding Era</b></li>
    <li>
        <ul className="py-5 font-assistant">
            <li><a href="https://rotunda.upress.virginia.edu/MARC/10-adams.mrc">Adams Papers Digital Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/12-docu.mrc">Documentary History of the Ratification of
                    the Constitution</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/28-Dochistfirst.mrc">Documentary History of the First
                    Federal Congress</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/15-hamilton.mrc">Papers of Alexander Hamilton Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/19-jay.mrc">Selected Papers of John Jay Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/11-jeff.mrc">Papers of Thomas Jefferson Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/1-dmde.mrc">The Dolley Madison Digital Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/13-madison.mrc">Papers of James Madison Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/21-Marshall.mrc">Papers of John Marshall Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/33-monroe.mrc">Papers of James Monroe Digital Edition</a></li>

            <li><a href="https://rotunda.upress.virginia.edu/MARC/22-morris.mrc">Diaries of Gouverneur Morris Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/16-pinckneyhorry.mrc">Papers of Eliza Lucas Pinckney
                    and Harriott Pinckney Horry Digital Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/24-pinckneystatesmen.mrc">The Revolutionary Era
                    Pinckney Statesmen of South Carolina</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/7-george.mrc">Papers of George Washington Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/23-people.mrc">People of the
                    Founding Era</a></li>
                    
        </ul>
    </li>
    <li className="tracking-wider font-playfair"><b>Antebellum, Civil War, and Reconstruction</b></li>
    <li>
        <ul  className="py-5 font-assistant">
            <li><a href="https://rotunda.upress.virginia.edu/MARC/27-grant.mrc">Papers of Ulysses S. Grant Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/20-jackson.mrc">Papers of Andrew Jackson Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/29-johnson.mrc">Papers of Andrew Johnson Digital
                    Edition</a></li>
           <li><a href="https://rotunda.upress.virginia.edu/MARC/34-olmsted.mrc">Papers of Frederick Law Olmsted Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/30-webster.mrc">Papers of Daniel Webster Digital
                    Edition</a></li>
        </ul>
    </li>
    <li className="tracking-wider font-playfair"><b>American Century</b></li>
    <li>
        <ul className="py-5 font-assistant">
            <li><a href="https://rotunda.upress.virginia.edu/MARC/14-presrecord.mrc">Presidential Recordings Digital
                    Edition</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/25-woodrowwilson.mrc">Papers of Woodrow Wilson Digital
                    Edition</a></li>
                    <li><a href="https://rotunda.upress.virginia.edu/MARC/32-BookerTWashington.mrc">Papers of Booker T. Washington Digital
                    Edition</a></li>
        </ul>
      </li>
      <li className="tracking-wider font-playfair"><b>Literature and Culture Collection</b></li>
        <li><ul className="py-5 font-assistant">
            <li><a href="https://rotunda.upress.virginia.edu/MARC/5-arnold.mrc">The Letters of Matthew Arnold</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/6-clotel.mrc"><i>Clotel</i> by William Wells Brown</a>
            </li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/8-emily.mrc">Emily Dickinson&rsquo;s
                    Correspondences</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/26-digitaltemple.mrc">The Digital Temple: A Documentary
                    Edition of George Herbert&rsquo;s English Verse</a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/4-melville.mrc">Herman Melville&rsquo;s
                    <i>Typee</i></a></li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/2-rossetti.mrc">The Letters of Christina Rossetti</a>
            </li>
            <li><a href="https://rotunda.upress.virginia.edu/MARC/3-shore.mrc">Journal of Emily Shore</a></li>
        </ul>
    </li>
    <li className="tracking-wider font-playfair"><b>Architecture</b></li>
        <li><ul className="py-5 font-assistant">
            <li><a href="https://rotunda.upress.virginia.edu/MARC/18-sah-archipedia.mrc">SAH Archipedia</a></li>
    </ul>
    </li>
    </ul>
    </section>
 

    <section className="px-5">
    <Heading3>Current Rotunda Customers</Heading3>
      <ul className="leading-relaxed md:grid md:grid-cols-2" id="customas">
      {custs.edges.map(edge => (
            <>
           <li className="font-assistant" key={edge.node.id}>{edge.node.name }</li>
            
            </>
        ))}
</ul>
   
  
    </section>
               
           
</Main>
         
</Layout>

)
}
export const query = graphql`
  query {
    allCustomersJson {
        edges {
          node {
            id
            name
          }
        }
      }
  }
`