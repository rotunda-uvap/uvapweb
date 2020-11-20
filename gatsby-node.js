const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { slash } = require(`gatsby-core-utils`)

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type BooksJson implements Node  {
        BookID: String!       
      }     
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
  
      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
      }
  
      type Fields {
        slug: String
      }
    `
    createTypes(typeDefs)
  }

  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allBooksJson {
            edges {
                node {
                  id
                  BookID
                }
              }
          }

        news: allMarkdownRemark(
          filter: {frontmatter: {type: {ne: "page"}}}) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                type
              }
            }
          }
        }
        pages: allMarkdownRemark(filter: {frontmatter: {type: {eq: "page"}}})  {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        

    }
 `
    ).then(result => {
        result.data.allBooksJson.edges.forEach(({ node }) => {
          createPage({
            path: `/title/${node.BookID}`,
            component: path.resolve(`./src/templates/book-page.js`),
            context: {
              id: node.id,
            },
          })
        })
       
        result.data.news.edges.forEach(({ node }) => {
          createPage({
            path: `/news${node.fields.slug}`,
            component: path.resolve(`./src/templates/news-page.js`),
            context: {
              id: node.id,
            },
          })
        })
        result.data.pages.edges.forEach(({ node }) => {
          createPage({
            path: `/content${node.fields.slug}`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              id: node.id,
            },
          })
        })

        
        

      })
      
    }