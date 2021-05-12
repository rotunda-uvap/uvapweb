import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
export default function FeatExhibit() {
  return (
    <StaticQuery
      query={graphql`
        query ExhibitQuery {
            exhibit: allMarkdownRemark(limit:3, filter: {frontmatter: {templateKey: {eq: "exhibit"}}}) {
                edges {
                  node {
                    frontmatter {
                      templateKey
                      title
                    }
                    fields {
                      slug
                    }
                  }
                }
              } 
        }
      `}
      render={data => (
        <section className="flex flex-row justify-center place-content-center space-x-8 py-10">
        <article className="flex flex-col flex-wrap place-content-center p-5">
            <div className="flex flex-row">
              <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3"><Link to={'/all-exhibits'}>exhibits</Link></div>
            </div>
            <Link to={'/exhibits' + data.exhibit.edges[0].node.fields.slug}><span className="font-display tracking-widest text-2xl">{data.exhibit.edges[0].node.frontmatter.title}</span></Link>
            <div className="font-serif text-base">Text</div>
        </article>
        <article className="flex flex-col flex-wrap place-content-center p-5">
        <div className="flex flex-row">
          <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3"><Link to={'/all-exhibits'}>exhibits</Link></div>
        </div>
        <Link to={'/exhibits' + data.exhibit.edges[1].node.fields.slug}><span className="font-display tracking-widest text-2xl">{data.exhibit.edges[1].node.frontmatter.title}</span></Link>
        <div className="font-serif text-base">Text</div>
    </article>
    <article className="flex flex-col flex-wrap place-content-center p-5">
    <div className="flex flex-row">
      <div className="border-r-2 uppercase tracking-widest font-serif text-xs pr-3"><Link to={'/all-exhibits'}>exhibits</Link></div>
    </div>
    <Link to={'/exhibits' + data.exhibit.edges[2].node.fields.slug}><span className="font-display tracking-widest text-2xl">{data.exhibit.edges[2].node.frontmatter.title}</span></Link>
    <div className="font-serif text-base">Text</div>
</article>
</section>
      )}
    />
  )
}