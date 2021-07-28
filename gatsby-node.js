const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { slash } = require(`gatsby-core-utils`)


exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type BooksJson implements Node  {
        BookID: String!  
        DaysSincePublication: Int!
        Authors: [String]
      }  
      
      type RotundaJson implements Node {
        StartYear: Int
        EndYear: Int
        RotID: String!
      }
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
  
      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
        relbook: String
        department: [String]
        related: [String]
        attached_book: String
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
                  CoverImageThumb
                }
              }
          }
          allRotundaJson {
            edges {
              node {
                RotID
                MainCollection
                SubCollection
                imageFilename
              }
            }
          }
          
          allBios: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "bio"}}})  {
            edges {
              node {
                id
                frontmatter {
                  templateKey
                  name_slug
                }
              }
            }
          }
        news: allMarkdownRemark(
          filter: {frontmatter: {templateKey: {eq: "news"},type: { eq: "news" }}}) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                type
                title
                templateKey
              }
            }
          }
        }
        allMedia: allMarkdownRemark(filter: {frontmatter: {type: {eq: "media"}}})  {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                type
                title
              }
            }
          }
        }
       
        allpromos: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "promo"}}})  {
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
        allExhibits: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "exhibit"}}})  {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
        allSubjects: allBooksJson {
          distinct(field: Subject___subjectID)
        }
        allSeries: allBooksJson {
          distinct(field: Series___seriesID)
        }

       rotMain: allRotundaJson{
         distinct(field: MainCollection)
       }

       rotSub: allRotundaJson{
        distinct(field: SubCollection)
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
              imageid: node.BookID + ".jpg",
              bid: node.BookID
            },
          })
         
        })

        const rotundas = result.data.allRotundaJson.edges

        rotundas.forEach(({ node }) => {
          createPage({
            path: `/title/${node.RotID}`,
            component: path.resolve(`./src/templates/rotunda-page.js`),
            context: {
              id: node.RotID,
              imageid: node.imageFilename,
              relSeries: node.SubCollection
            },
          })
         
        })

        const staffs = result.data.allBios.edges

        staffs.forEach(({ node }) => {
          createPage({
            path: `/staff/${node.frontmatter.name_slug}`,
            component: path.resolve(`./src/templates/staff-page.js`),
            context: {
              id: node.id,
              relDir: node.frontmatter.name_slug
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
              relDir: node.fields.slug.substring(1)
            },
          })
        })

        const media = result.data.allMedia.edges
       
        media.forEach(({ node }) => {
          createPage({
            path: `/media${node.fields.slug}`,
            component: path.resolve(`./src/templates/media-page.js`),
            context: {
              id: node.id,
              relDir: node.fields.slug.substring(1)
            },
          })
        })
        
        const promos = result.data.allpromos.edges
        promos.forEach(({ node }) => {
          createPage({
            path: `/promotions${node.fields.slug}`,
            component: path.resolve(`./src/templates/promo-page.js`),
            context: {
              id: node.id
            },
          })
        })

        const exhibits = result.data.allExhibits.edges
        exhibits.forEach(({ node }) => {
          createPage({
            path: `/exhibits${node.fields.slug}`,
            component: path.resolve(`./src/templates/exhibit-page.js`),
            context: {
              id: node.id,
              relDir: node.fields.slug.substring(1)
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

        const RotSeries = result.data.rotMain.distinct
        RotSeries.forEach((rot) => {
          createPage({
            path: `/collection/${rot}`,
            component: path.resolve(`./src/templates/rotunda-coll-page.js`),
            context: {
              coll: rot,
            },
          })
        })

       
        

      })
      
    }

    exports.onCreateWebpackConfig = ({ actions, stage, loaders, plugins }) => {
      actions.setWebpackConfig({
        resolve: {
          alias: {
            path: require.resolve("path-browserify"),
          },
          fallback: {
            fs: false,
          },
        },
      })
    
      if (stage == "build-javascript" || stage == "develop") {
        actions.setWebpackConfig({
          plugins: [plugins.provide({ process: "process/browser" })],
        })
      }
     
      // This prevents TimelineJS from being loaded during build since it 
      // attempts to use global navigator variable which is only available
      // in a browser (not in Node).
      //
      // https://www.gatsbyjs.com/docs/debugging-html-builds/#fixing-third-party-modules
    
      if (stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
          module: {
            rules: [
              {
                test: /timelinejs/,
                use: loaders.null()
              }
            ]
          }
        })
      }
    
    }