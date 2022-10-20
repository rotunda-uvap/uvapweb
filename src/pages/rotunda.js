import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SeO from "../components/SeoComponent"
import RotSection from "../components/rotunda/RotundaSection"
import RotundaMiniBio from "../components/rotunda/RotundaMiniBio"
import RotundaHeader from "../components/rotunda/RotundaHeader"
import styled from "@emotion/styled"

/* import { Timeline } from "@knight-lab/timelinejs"
import events from "../../static/timeline-data.json" */
// import "../components/updateTicker.css" 



export default function RotundaHome({ data }) {
  /* const timelineEl = useRef(null)
  const options = {initial_zoom:5}

    useEffect(() => {
      if (timelineEl.current) {
        const timeline = new Timeline(timelineEl.current, events, options)
      }
    }) */

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

    const RotSectionZinc = styled('section')`
display:flex;
flex-direction:column;
place-items:center;
background-color: rgb(250 250 250);
padding:1em;
`
    const Article = styled('article')`
    display:flex;
    flex-direction:column;
    place-items:center;
    `
   
    const staff = data.staffs
    const AHC = data.AHClist
    const LIT = data.LITlist
    const ARC = data.ARClist
 return (
   <Layout>
     <SeO title="ROTUNDA: Digital Imprint of the University of Virginia Press"
     description="Since 2004, Rotunda has published innovative peer-reviewed digital projects, both born-digital and from authoritative letterpress editions."/>
     <Main>
    <RotundaHeader/>
    <RotSection>
    <Heading2>About Rotunda</Heading2>
    <Para>Since 2004, our Rotunda imprint has published innovative peer-reviewed digital projects, both born-digital and from authoritative letterpress editions. Our core offering is the <a href="#ahc">American History Collection</a> of documentary editions spanning three centuries, from the earliest surviving writings of George Washington through the presidential correspondence of Woodrow Wilson: more than 20 publications with content from over 550 letterpress and born-digital volumes, for a total of nearly 300,000 documents, diary entries, and editorial essays, all cross-searchable.</Para>
<Para>Our major stand-alone publications are the <a href="https://prde.upress.virginia.edu/">Presidential Recordings Digital Edition</a>, with transcripts and audio of nearly 4000 conversations from White House recordings; <a href="https://pfe.rotunda.upress.virginia.edu/">People of the Founding Era</a>, a biographical reference to over 75,000 individuals; the open-access <a href="https://sah-archipedia.org">SAH Archipedia</a>, an authoritative encyclopedia of the American built environment, with over 25,000 entries and 5000 editorial essays. Finally, our <a href="#lit">Literature and Culture Collection</a> features seven editions of literary work and correspondence from nineteenth-century America and Britain.</Para>
   </RotSection>

  


    <RotSection >
     
      <Heading3>Accessing Rotunda Publications</Heading3>
      <Para>If you are connecting via a campus Internet connection, you can expect to gain access to any Rotunda publication purchased by your institution. If your institution has not purchased a particular Rotunda publication, contact your institution’s library about ordering. You may also sign up for an individual free trial to evaluate Rotunda before making a purchase decision.</Para>
      
    </RotSection> 
    
   <RotSection className="bg-zinc-50 py-4">
     <Article>
    <a href="https://rotunda.upress.virginia.edu/entrance.xqy"><Heading4 className="underline">Collection Entrance</Heading4></a>
      <Para>Access the Rotunda titles provided by your institution (must be on campus network or VPN), or log in with individual account.</Para>
    </Article>

    <Article>
      <Link to={'/rotunda-customer-page'}><Heading4 className="underline">MARC Records and Access Statistics</Heading4></Link>
      <Para>Customer information and statistics for librarians or purchasers of Rotunda Publications.</Para>
      
     
    </Article>
    <Article>
    <Link to={'/rotunda-purchase'}><Heading4 className="underline">Purchase</Heading4></Link>
      <Para>Information about institutional or individual purchase of Rotunda publications.</Para>
      
    </Article>
    <Article>
    <a href="https://rotunda.upress.virginia.edu/register/default.xqy"><Heading4 className="underline">Free Trial</Heading4></a>
      <Para>Register for a free 48 hour trial of all of our publications.</Para>
      
    </Article>
   
    </RotSection> 
    <RotSectionZinc className="bg-zinc-50">
      <Heading3>rotunda contacts</Heading3>
      <div className="flex flex-wrap -m-4 text-center">
      {staff.edges.map((edge, index) => (
                 
                 <RotundaMiniBio frontmatter={edge.node.frontmatter} key={`staff${index}`} /> 
                  
                   ))}
                   </div>
    </RotSectionZinc>
    <RotSection>
      <Heading3>rotunda collections</Heading3>
      <Para>Rotunda publications are available to both libraries and independent scholars as single titles or as collections. The American History Collection includes the sub-collections American Founding Era; Antebellum, Civil War, and Reconstruction; and the American Century.</Para>
    </RotSection>
   

   <RotSectionZinc >
    <Heading3 id="ahc">American History Collection</Heading3>
     {AHC.group.map((edge, index) => (
      <div className="border-b border-ceci-gray-light pb-2">
        <Heading4>{edge.nodes[index].SubCollection}</Heading4>
       <ul className="md:grid md:grid-cols-2">
        {edge.nodes.map((n, index)=> (
          <li className=" md:col-span-1"><Link to={`../title/${ n.RotID }`} className="hover:bg-gray-100 flex p-2 h-full items-center" >
          
        <img className="flex-shrink-0 h-10 w-10  object-cover mr-5" src={"https://ik.imagekit.io/uvapress/rotunda/" + n.imageFilename} width="50" alt={n.Title}/>
        <span className="text-lg text-ceci-gray-dark font-assistant font-thin uppercase">{n.Title}</span>
   </Link></li>
       
        ))}</ul>
      </div>
    ))} 
   </RotSectionZinc>
   <RotSection >
    <Heading3 id="lit">Literature and Culture Collection</Heading3>
      <ul className="md:grid md:grid-cols-2 border-b border-ceci-gray-light pb-2">
        {LIT.group[0].nodes.map((n, index) => (
          <li className=" md:col-span-1"><Link to={`../../title/${ n.RotID }`} className="hover:bg-gray-100 flex p-2 h-full items-center" >
        <img className="flex-shrink-0 h-10 w-10  object-cover mr-5" src={"https://ik.imagekit.io/uvapress/rotunda/" + n.imageFilename} width="50" alt={n.Title}/>
        <span className="text-lg text-ceci-gray-dark font-assistant font-thin uppercase">{n.Title}</span>
   </Link></li>
    ))}  </ul>
   </RotSection>
   <RotSection>
    <Heading3 id="Arch">Architecture</Heading3>
      <ul className="md:grid md:grid-cols-2 border-b border-ceci-gray-light pb-2">
        {ARC.nodes.map((n, index) => (
          <li className="md:col-span-1 "><Link to={`../title/${ n.RotID }`} className="hover:bg-gray-100 flex p-2 h-full items-center" >
        <img className="flex-shrink-0 h-10 w-10  object-cover mr-5" src={"https://ik.imagekit.io/uvapress/rotunda/" + n.imageFilename} width="50" alt={n.Title}/>
        <span className="text-lg text-ceci-gray-dark font-assistant font-thin uppercase">{n.Title}</span>
   </Link></li>
    ))}  </ul>
   </RotSection>
   <RotSection>
      <Heading3>legacy projects</Heading3>
      <Para>These two guides to resources in African American history, dating from the 1990s, were the very first online publications under the imprint of the University of Virginia Press.</Para>
      <ul>
        <li className="hover:bg-gray-100 flex p-2 h-full items-center">
        <img className="flex-shrink-0 h-10 w-10  object-cover mr-5" src={"https://legacy.upress.virginia.edu/plunkett/3072.gif"} width="80px" alt="Afro-American Sources in Virginia: A Guide to Manuscripts"/>
        <a href="https://legacy.upress.virginia.edu/plunkett/mfp.html" className=" text-ceci-gray-dark font-assistant font-thin uppercase">Afro-American Sources in Virginia: A Guide to Manuscripts</a>
   </li>
        <li className="hover:bg-gray-100 flex p-2 h-full items-center">
        <img className="flex-shrink-0 h-10 w-10  object-cover mr-5" src={"https://legacy.upress.virginia.edu/epub/pyatt/seb.jpg"} width="80px" alt="Guide to African-American Documentary Resources in North Carolina"/>
        <a href="https://legacy.upress.virginia.edu/epub/pyatt/index.html" className=" text-ceci-gray-dark font-assistant font-thin uppercase">Guide to African-American Documentary Resources in North Carolina</a>
   </li>
        </ul>      
    </RotSection>
    </Main>
   </Layout>
    
 )
}

export const query = graphql`
  query {
      staffs: allMarkdownRemark(filter: {frontmatter: {department: {in: "ROT"}}},sort: {fields: frontmatter___title}) {
        edges {
          node {
            ...MiniBioFragment
          }
        }
      }
      AHClist: allRotundaJson(filter: {MainCollection: {eq: "American History Collection"}}, sort: {fields: MainCollection}) {
        group(field: SubCollection) {
          nodes {
            SubCollection
            Title
            RotID
            imageFilename
          }
        }
      }
      LITlist: allRotundaJson(filter: {MainCollection: {eq: "Literature and Culture Collection"}}, sort: {fields: MainCollection}) {
        group(field: SubCollection) {
          nodes {
            SubCollection
            Title
            RotID
            imageFilename
          }
        }
      }
      ARClist: allRotundaJson(filter: {RotID: {in: ["OLMS", "ARCHI"]}}) {
          nodes {
            SubCollection
            Title
            RotID
            imageFilename
          }
      }
      
  }
`