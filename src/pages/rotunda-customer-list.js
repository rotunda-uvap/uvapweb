import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"
import SEO from "../components/SEO"


export default function RotundaCustomerList({data}) {
    const custs = data.allCustomersJson
    return (
       
           <Layout>
                   <SEO title="A list of our current customers"/>
                     <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div>
            
    </div>
  <div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Customer Information and Usage Statistics</h1>
      
      <p>Current institutional users (IP-authenticated accounts): <a href="https://rotunda.upress.virginia.edu/UsageStats/?tab=home&amp;job=dates">view statistics for your usage of <span className="rotunda">Rotunda</span> publications</a>.</p>
<p>Note that your usage stats may show access to publications which you have not purchased, as your users will be able to navigate to contents pages within them, and those page views are logged.</p>
      <h5 className="leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500s">MARC Records are available for the following Rotunda Publications:
</h5>
<ul className="py-5">
    <li><b>American Founding Era</b></li>
    <li>
        <ul className="py-5">
            <li><a href="http://rotunda.upress.virginia.edu/MARC/10-adams.mrc">Adams Papers Digital Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/12-docu.mrc">Documentary History of the Ratification of
                    the Constitution</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/28-Dochistfirst.mrc">Documentary History of the First
                    Federal Congress</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/15-hamilton.mrc">Papers of Alexander Hamilton Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/19-jay.mrc">Selected Papers of John Jay Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/11-jeff.mrc">Papers of Thomas Jefferson Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/1-dmde.mrc">The Dolley Madison Digital Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/13-madison.mrc">Papers of James Madison Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/21-Marshall.mrc">Papers of John Marshall Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/22-morris.mrc">Diaries of Gouverneur Morris Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/16-pinckneyhorry.mrc">Papers of Eliza Lucas Pinckney
                    and Harriott Pinckney Horry Digital Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/24-pinckneystatesmen.mrc">The Revolutionary Era
                    Pinckney Statesmen of South Carolina</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/14-presrecord.mrc">Presidential Recordings Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/7-george.mrc">Papers of George Washington Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/23-people.mrc">People of the
                    Founding Era</a></li>
                    
        </ul>
    </li>
    <li><b>Antebellum, Civil War, and Reconstruction</b></li>
    <li>
        <ul  className="py-5">
            <li><a href="http://rotunda.upress.virginia.edu/MARC/27-grant.mrc">Papers of Ulysses S. Grant Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/20-jackson.mrc">Papers of Andrew Jackson Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/29-johnson.mrc">Papers of Andrew Johnson Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/30-webster.mrc">Papers of Daniel Webster Digital
                    Edition</a></li>
        </ul>
    </li>
    <li><b>American Century</b></li>
    <li>
        <ul className="py-5">
            <li><a href="http://rotunda.upress.virginia.edu/MARC/14-presrecord.mrc">Presidential Recordings Digital
                    Edition</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/25-woodrowwilson.mrc">Papers of Woodrow Wilson Digital
                    Edition</a></li>
                    <li><a href="https://rotunda.upress.virginia.edu/MARC/32-BookerTWashington.mrc">Papers of Booker T. Washington Digital
                    Edition</a></li>
        </ul>
      </li>
      <li><b>Literature and Culture Collection</b></li>
        <li><ul className="py-5">
            <li><a href="http://rotunda.upress.virginia.edu/MARC/5-arnold.mrc">The Letters of Matthew Arnold</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/6-clotel.mrc"><i>Clotel</i> by William Wells Brown</a>
            </li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/8-emily.mrc">Emily Dickinson&rsquo;s
                    Correspondences</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/26-digitaltemple.mrc">The Digital Temple: A Documentary
                    Edition of George Herbert&rsquo;s English Verse</a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/4-melville.mrc">Herman Melville&rsquo;s
                    <i>Typee</i></a></li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/2-rossetti.mrc">The Letters of Christina Rossetti</a>
            </li>
            <li><a href="http://rotunda.upress.virginia.edu/MARC/3-shore.mrc">Journal of Emily Shore</a></li>
        </ul>
    </li>
    <li><b>Architecture</b></li>
        <li><ul className="py-5">
            <li><a href="http://rotunda.upress.virginia.edu/MARC/18-sah-archipedia.mrc">SAH Archipedia</a></li>
    </ul>
    </li>
    </ul>
    </div>
    </div>
    </section>

    <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
  <div>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">List of Current Rotunda Customers</h1>
      <ul className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 text-gray-500s">
      {custs.edges.map(edge => (
            <>
           <li className="font-light py-1" key={edge.node.id}>{edge.node.name }</li>
            
            </>
        ))}
</ul>
    </div>
    </div>
    </section>
               
           

         
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