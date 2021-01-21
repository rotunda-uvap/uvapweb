import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default function MiniBio({ frontmatter: { title, job_title, name_slug, email, phone}  }) {
    const slink = "../staff/" + name_slug
    const clean_email = email.replace(/[^\x00-\x7F]/g, "")
     return (
     <div className="flex p-3">
          <ul className="flex flex-col px-10 content-center">
             <li key={"1" + name_slug} className="font-black"><Link to={slink}>{title}</Link></li> 
             <li key={"2" + name_slug}>{job_title}</li>
             <li key={"3" + name_slug}>{phone}</li>
             <li key={"4" + name_slug}><a href={`mailto:${ clean_email }`}>{email}</a></li>
       </ul>
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