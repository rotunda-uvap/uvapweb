import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function MiniBio({ frontmatter: { title, job_title, name_slug, email, phone}  }) {
    const slink = "../staff/" + name_slug
    const clean_email = email.replace(/[^\x00-\x7F]/g, "")
     return (
    /*  <div className="flex p-3">
          <ul className="flex flex-col px-10 content-center font-light text-gray-900">
             <li key={"1" + name_slug} className="font-medium"><Link to={slink}>{title}</Link></li> 
             <li key={"2" + name_slug}>{job_title}</li>
             <li key={"3" + name_slug}>{phone}</li>
             <li key={"4" + name_slug}><a href={`mailto:${ clean_email }`}>{email}</a></li>
       </ul>
       </div> */
       
       <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
<div className="flex flex-col items-center">
       <Link to={slink}><h5 className="text-md font-thin tracking-widest text-gray-700">{title}</h5></Link>
       <span className="text-gray-600 py-1 font-thin font-display text-sm">{job_title}</span>
       <span className="text-sm text-gray-006 font-display tracking-widest">{phone}</span>
         <a className="text-gray-500 py-2 text-sm inline-flex font-display items-center tracking-widest" href={`mailto:${ clean_email }`}>Email {title}
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
             <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
           </svg>
           
         </a>
       </div>
         </div>
  )
}
export const query = graphql`
  fragment MiniBioFragment on MarkdownRemark {
    frontmatter {
        title
        templateKey
        job_title
        name_slug
        phone
        email
        department
    }
  }
`