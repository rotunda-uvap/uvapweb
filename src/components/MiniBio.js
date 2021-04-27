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
       <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        
       <div className="flex-grow">
       <Link to={slink}><h5 className="title-font font-medium text-md text-gray-900">{title}</h5></Link>
       <p className="text-gray-500 font-light">{job_title}</p>
       <p className="text-base leading-relaxed">{phone}</p>
         <a className="text-gray-500 text-base inline-flex items-center" href={`mailto:${ clean_email }`}>Email {title}
           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
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