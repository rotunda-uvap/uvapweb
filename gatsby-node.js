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
        allpages: allMarkdownRemark(filter: {frontmatter: {type: {eq: "page"}}})  {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
        allSubjects: allBooksJson {
          distinct(field: Subject)
        }
        allSeries: allBooksJson {
          distinct(field: Series)
        }
        

    }
 `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }

      const books = result.data.allBooksJson.edges

        books.forEach(({ node }) => {
          createPage({
            path: `/title/${node.BookID}`,
            component: path.resolve(`./src/templates/book-page.js`),
            context: {
              id: node.id,
            },
          })
        })

        const news = result.data.news.edges
       
        news.forEach(({ node }) => {
          createPage({
            path: `/news${node.fields.slug}`,
            component: path.resolve(`./src/templates/news-page.js`),
            context: {
              id: node.id,
            },
          })
        })

        const pages = result.data.allpages.edges
        pages.forEach(({ node }) => {
          createPage({
            path: `/content${node.fields.slug}`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              id: node.id,
            },
          })
        })

        const subjects = result.data.allSubjects.distinct
        subjects.forEach((subject) => {
          createPage({
            path: `/subject/${subject}`,
            component: path.resolve(`./src/templates/subject-page.js`),
            context: {
              id: subject,
            },
          })
        })

        const series = result.data.allSeries.distinct
        series.forEach((serie) => {
          createPage({
            path: `/series/${serie}`,
            component: path.resolve(`./src/templates/series-page.js`),
            context: {
              id: serie,
            },
          })
        })
        

      })
      
    }