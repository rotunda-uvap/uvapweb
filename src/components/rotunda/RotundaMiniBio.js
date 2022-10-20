import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Heading4 = styled("H4")` 
font-family: 'Playfair Display SC', serif;
letter-spacing:.3em;
font-weight:200;
color:#757575;
text-transform:uppercase;
text-align:center;
padding:0;
margin-bottom:0;
font-size: var(--fs-200);`


export default function MiniBio({ frontmatter: { title, job_title, name_slug, email, phone}  }) {
    const slink = "../staff/" + name_slug
    const clean_email = email.replace(/[^\x00-\x7F]/g, "")
     return (
   
       
       <div className="p-4 md:w-1/3 sm:w-1/2 w-full rotunda">
<ul className="flex flex-col items-center">
       <Link to={slink}><Heading4>{title}</Heading4></Link>
       <li className="text-sm font-assistant ">{job_title}</li>
       <li className="text-sm">{phone}</li>
         <li className="text-sm font-light">
          <a href={`mailto:${ clean_email }`} className=" text-ceci-gray-dark inline-flex items-center">{clean_email}
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
             <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
           </svg>
         </a>
         </li>
       </ul>
         </div>
  )
}
export const query = graphql`
  fragment MiniBioFragment on MarkdownRemark {
    frontmatter {
        title
        job_title
        name_slug
        phone
        email
        department
    }
  }
`