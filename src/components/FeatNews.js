import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
export default function FeatNews() { 
  return (
    <StaticQuery
      query={graphql`
        query NewsQuery {
            news:  allMarkdownRemark(limit:1, filter: {frontmatter: {templateKey: {eq: "news"}, type: {eq: "news"}}},sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    id
                    frontmatter {
                      date(formatString: "YYYY-MM-DD")
                      templateKey
                      type
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
        <article className="flex flex-wrap place-content-center p-5 hover:bg-black hover:text-white">
        <div><Link to={'/news-posts'}><button className="px-4 py-2 border-2 border-gray-700 uppercase">news</button></Link></div>
    <div className="mx-auto"><h3 className="text-xl font-black uppercase py-5 text-center"><Link to={'/news' + data.news.edges[0].node.fields.slug}>{data.news.edges[0].node.frontmatter.title}</Link></h3>
          </div>
          <Link to={'/news' + data.news.edges[0].node.fields.slug}>
            <button className="rounded bg-blue-400 text-white text-lg px-5 py-2 text-center uppercase">read</button></Link>
          </article>
      )}
    />
  )
}