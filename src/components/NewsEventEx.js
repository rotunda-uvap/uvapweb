import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaArrowAltCircleRight } from "react-icons/fa"
import sanitizeHtml from "sanitize-html"

const NewsEventEx = () => {
  const data = useStaticQuery(graphql`
    query {
      news: allMarkdownRemark(
        limit: 1
        filter: { frontmatter: { type: { eq: "news" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              type
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
      exhibit: allMarkdownRemark(
        limit: 4
        filter: { frontmatter: { templateKey: { eq: "exhibit" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              templateKey
              date(formatString: "YYYY-MM-DD")
              title
              exhibit_slug
            }
          }
        }
      }
      ac: allMarkdownRemark(
        limit: 1
        filter: { frontmatter: { type: { eq: "author-corner" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              type
              date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const newsNode = data.news.edges[0]?.node
  const acNode = data.ac.edges[0]?.node
  const exhibits = data.exhibit.edges

  const previewHtml = (html, wordCount) =>
    sanitizeHtml(html.split(" ").slice(0, wordCount).join(" ") + "...")

  return (
    <section className="flex md:flex-row flex-col gap-2 m-2">
      <article className="flex flex-col border-b-2 md:border-b-0 pb-2 md:basis-1/3">
        {newsNode && (
          <>
            <Link className="flex flex-row sm:flex-wrap p-2" to="/publicity">
              <h5 className="border-r-2 pr-2 font-serif uppercase tracking-wider text-sm self-center">
                Recent Posts
              </h5>
              <span className="pl-2 font-serif text-sm self-center text-ceci-gray-mid">
                {newsNode.frontmatter.date}
              </span>
            </Link>

            <Link className="p-2" to={`/news${newsNode.fields.slug}`}>
            <h5 className="font-display tracking-wide uppercase py-2 font-thin">
                {newsNode.frontmatter.title}
              </h5>
              <div
                className="font-serif text-left text-base leading-relaxed text-ceci-gray-dark dropCap"
                dangerouslySetInnerHTML={{ __html: previewHtml(newsNode.html, 30) }}
              />
              <div className="font-display uppercase text-sm tracking-widest py-2">
                <FaArrowAltCircleRight
                  className="inline mx-4"
                  aria-hidden="true"
                  focusable="false"
                />
                Continue Reading
              </div>
            </Link>
          </>
        )}
      </article>

      <article className="flex flex-col border-b-2 md:border-b-0 pb-2 md:basis-1/3">
        {acNode && (
          <>
            <Link className="flex flex-row sm:flex-wrap p-2" to="/authors-corner">
              <h5 className="border-r-2 pr-2 font-serif uppercase tracking-wider text-sm self-center">
                Authors' Corner
              </h5>
              <span className="pl-2 font-serif text-sm self-center text-ceci-gray-mid">
                {acNode.frontmatter.date}
              </span>
            </Link>

            <Link className="p-2" to={`/author-corner${acNode.fields.slug}`}>
            <h5 className="font-display tracking-wide uppercase py-2 font-thin">
                {acNode.frontmatter.title}
              </h5>
              <div
                className="font-serif text-left text-base p-0 leading-relaxed text-ceci-gray-dark dropCap"
                dangerouslySetInnerHTML={{ __html: previewHtml(acNode.html, 25) }}
              />
              <div className="font-display uppercase text-sm tracking-widest py-2">
                <FaArrowAltCircleRight
                  className="inline mx-4"
                  aria-hidden="true"
                  focusable="false"
                />
                Continue Reading
              </div>
            </Link>
          </>
        )}
      </article>

      <article className="flex flex-col border-b-2 md:border-b-0 pb-2 md:shrink-0 md:basis-1/3">
        <h5 className="font-serif uppercase tracking-wider text-sm">
          <Link to="/exhibits" className="p-2">
            exhibits
          </Link>
        </h5>

        {exhibits.map((edge, index) => (
          <Link
            key={`exhibit-${index}`}
            className="font-display tracking-wide uppercase p-2 text-sm"
            to={`/exhibits/${edge.node.frontmatter.exhibit_slug}`}
          >
            {edge.node.frontmatter.title}
          </Link>
        ))}

        <Link
          to="/exhibits"
          className="font-display uppercase text-sm tracking-widest px-2 py-4"
        >
          <FaArrowAltCircleRight
            className="inline mr-4"
            aria-hidden="true"
            focusable="false"
          />
          see more exhibits
        </Link>
      </article>
    </section>
  )
}

export default NewsEventEx
