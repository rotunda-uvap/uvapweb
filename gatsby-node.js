const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { slash } = require(`gatsby-core-utils`)
const _ = require("lodash")


exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type BooksJson implements Node  {
        BookID: String!  
        DaysSincePublication: Int!
        Authors: [String]
        TableOfContents: [String]
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
        profile_photo: String
        exhibit_slug: String
      }
  
      type Fields {
        slug: String
      }

      type Subjects {
        name: String
        subjectID: String
      }

     
    `
    createTypes(typeDefs)
  }

  
  
  exports.createPages = ({ graphql, actions }) => {
    const { createRedirect } = actions
    createRedirect({ fromPath: '/2021/11/16/authors-corner-sara-jensen-carr-author-topography-wellness/', toPath: '/author-corner/authors-corner-with-sara-jensen-carr-author-of-the-topography-of-wellness/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/2021/11/01/authors-corner-jonathan-w-white-and-lydia-j-davis-editors-my-work-among-freedmen/', toPath: '/author-corner/authors-corner-with-jonathan-w-white-and-lydia-j-davis-editors-of-my-work-among-the-freedmen/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/2021/11/09/celebrating-week-keepup-grace-mitchell-tada-and-walter-hood-coeditors-black-landscapes/', toPath: '/news/celebrating-up-week-keepup-with-grace-mitchell-tada-and-walter-hood-coeditors-of-black-landscapes-matter/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/title/5501/', toPath: '/furnace-and-fugue/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/2021/11/22/federal-fixation-new-blog-post-david-j-toscano-author-fighting-political-gridlock/', toPath: '/news/federal-fixation-a-new-blog-post-by-david-j-toscano-author-of-fighting-political-gridlock/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/about-press/', toPath: '/about/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/apsa/', toPath: '/exhibits/apsa/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/asa-2021/', toPath: '/exhibits/asa-2021/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/sha-2021/', toPath: '/exhibits/sha-2021/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/neasecs-2021/', toPath: '/exhibits/neasecs-2021/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/aswad/', toPath: '/exhibits/aswad/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/current-authors/', toPath: '/authors/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/opportunities/', toPath: '/career/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/order/', toPath: '/order/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/privacy/', toPath: '/privacy/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/content/rotunda-customers-page/', toPath: '/rotunda-customer-page/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/blog/', toPath: '/publicity/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/robb/', toPath: '/title/5679/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/robertson/', toPath: '/title/5780/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/series/papers/', toPath: '/books/#series/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/rotunda/purchase/', toPath: '/rotunda-purchase/', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/plunkett/mfp.html', toPath: 'https://legacy.upress.virginia.edu/plunkett/mfp.html', isPermanent: true, redirectInBrowser: true })
    createRedirect({ fromPath: '/epub/pyatt/nchome.html', toPath: 'https://legacy.upress.virginia.edu/epub/pyatt/index.html', isPermanent: true, redirectInBrowser: true })


    
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
        allAC: allMarkdownRemark(filter: {frontmatter: {type: {eq: "author-corner"}}})  {
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
      
        allExhibits: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "exhibit"}}})  {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                exhibit_slug
              }
            }
          }
        }

        allColls: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "collection"}}})  {
          edges {
            node {
              id
              frontmatter {
                templateKey
                title
              }
            }
          }
        }

        allSubjects: allBooksJson {
          group(field: {Subjects: {name: SELECT}}) {
            fieldValue
          }
        }

        allSeries: allSeriesJson {
          edges {
            node {
              id
              seriesID
            }
          }
        }

       rotMain: allRotundaJson{
        distinct(field: {MainCollection: SELECT})
       }

       rotSub: allRotundaJson{
        distinct(field: {SubCollection: SELECT})
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

        const colls = result.data.allColls.edges

        colls.forEach(({ node }) => {
          createPage({
            path: `/collections/${node.frontmatter.title}`,
            component: path.resolve(`./src/templates/coll-page.js`),
            context: {
              id: node.id,
              relDir: node.frontmatter.title
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

        const acorners = result.data.allAC.edges
       
        acorners.forEach(({ node }) => {
          createPage({
            path: `/author-corner${node.fields.slug}`,
            component: path.resolve(`./src/templates/author-corner.js`),
            context: {
              id: node.id,
              relDir: node.fields.slug.substring(1)
            },
          })
        })
        
       

        const exhibits = result.data.allExhibits.edges
        exhibits.forEach(({ node }) => {
          createPage({
            path: `/exhibits/${node.frontmatter.exhibit_slug}`,
            component: path.resolve(`./src/templates/exhibit-page.js`),
            context: {
              id: node.id,
              relDir: node.frontmatter.exhibit_slug
            },
          })
        })

        const subjects = result.data.allSubjects.group
        subjects.forEach(( sub ) => {
          createPage({
            path: `/subject/${_.kebabCase(sub.fieldValue)}`,
            component: path.resolve(`./src/templates/subject-page.js`),
            context: {
              id: sub.fieldValue,
            },
          })
        })

        const series = result.data.allSeries.edges
        series.forEach(({ node }) => {
          createPage({
            path: `/series/${node.seriesID}`,
            component: path.resolve(`./src/templates/series-page.js`),
            context: {
              id: node.seriesID,
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
    const webpack = require(`webpack`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^netlify-identity-widget$/,
      }),
    ],
  })
}
