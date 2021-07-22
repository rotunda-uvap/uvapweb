import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const BookSEO = ({ title, description, image, article, author, isbn }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
 
  const {
      defaultTitle,
      titleTemplate,
      defaultDescription,
      siteUrl,
      defaultImage,
      twitterUsername,
  } = site.siteMetadata

  const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      image:  image || defaultImage,
      siteUrl: `${siteUrl}${pathname}`,
      author: author || null,
      isbn: isbn || null

  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:url" content="og:book" />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.author && <meta property="book:author" content={seo.author} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.isbn && <meta property="book:isbn" content={seo.isbn} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}
export default BookSEO


BookSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  cover: PropTypes.string,
  article: PropTypes.bool,
}
BookSEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  cover: null,
  article: false,
  isbn:null,
  author:null,
  blurb:null
}

const query = graphql`
  query BookSEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`