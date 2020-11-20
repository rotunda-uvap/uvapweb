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

        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  title
                }
                fields {
                  slug
                }
                id
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
       
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: `/news${node.fields.slug}`,
            component: path.resolve(`./src/templates/news-page.js`),
            context: {
              id: node.id,
            },
          })
        })

        result.data.allFile.edges.forEach(({ node }) => {
          createPage({
            path: `/content${node.childMarkdownRemark.fields.slug}`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              id: node.childMarkdownRemark.id,
            },
          })
        })
        

      })
      
    }