import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"


export const MiniBioFragment = graphql`
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
`;


export default function MiniBio({ frontmatter: { title, job_title, name_slug, email, phone}  }) {
    const slink = `../staff/${name_slug}`;
    const clean_email = email.replace(/[^\x00-\x7F]/g, "");
     return (
       <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
<div className="flex flex-col items-center">
       <Link to={slink}><h5 className="text-lg font-thin tracking-wide text-ceci-gray-dark">{title}</h5></Link>
       <span className="text-ceci-gray-mid py-1 font-thin font-display text-md">{job_title}</span>
       <span className="text-md text-ceci-gray-dark font-display tracking-wide">{phone}</span>
         <a className="text-ceci-gray-mid py-2 text-md inline-flex font-display items-center " href={`mailto:${clean_email}`}>{clean_email}
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
             <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
           </svg>
           
         </a>
       </div>
         </div>
  );
}
