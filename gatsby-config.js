/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()
const path = require(`path`)
module.exports = {
  flags: { PARALLEL_SOURCING: true, DEV_SSR: true, FAST_DEV: true },
  siteMetadata: {
    title: `University of Virginia Press`,
    titleTemplate: "%s - UVA Press",
    logo: `uvap_logo.png`,
    image: '/static/uvap_sm.png',
    description: `The website for the University of Virginia Press`,
    siteUrl: `https://uvap-draft-13b347.netlify.app`,
    twitterUsername: "@uvapress"

  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/news`,
        name: `news`,
      },
    },/* 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/authors-corner`,
        name: `authors-corner`,
      },
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `downloads`,
        path: `${__dirname}/src/downloads/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/seriesinfo`,
        name: `seriesinfo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/homepage`,
        name: `homepage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/resources`,
        name: `resources`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/promos`,
        name: `promos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/featured-collection`,
        name: `featured-collection`,
      },
    },
    /* {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/featured`,
        name: `featured`,
      },
    }, */
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/rotunda`,
        name: `rotunda`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/exhibits`,
        name: `exhibits`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/collections`,
        name: `collections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/bios`,
        name: `bios`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/`,
      },
    },
    //may not need last two
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          "gatsby-remark-embed-soundcloud",
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 300,
              height: 200
            }
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 300 },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: 'gatsby-plugin-static-folders',
      options: {
        folders: [
          './downloads'
        ]
      }
    },
   /*  This plugin throws errors, check if other issues are reported later
   {
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: [
          'uvapressweb@gmail.com',
        ],
        // options to retrieve the next 20 upcoming events
        timeMin: (new Date()).toISOString(),
        maxResults: 20,
        singleEvents: true,
        orderBy: 'startTime',
      }
    }, */
   
  `gatsby-plugin-slug`,
  `gatsby-plugin-preact`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-twitter`,
  `gatsby-plugin-postcss`,
  `gatsby-plugin-netlify-cms`,
 
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      queries: require("./src/utils/algolia-queries")
    },
  },
   
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://virginia.us5.list-manage.com/subscribe/post?u=ef1bb24fccf12e802068da002&amp;id=471ea965df', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  }, 
   
     'gatsby-plugin-less',
  {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://uvap-draft-13b347.netlify.app/',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
  mapping: {
    "MarkdownRemark.frontmatter.related_series" : "SeriesJson",
    "MarkdownRemark.frontmatter.related_staff" : "MarkdownRemark.frontmatter.staff_name",
    "MarkdownRemark.frontmatter.related_book" : "BooklistJson",
    "MarkdownRemark.frontmatter.book_clusters.related_book" : "BooklistJson",
    "MarkdownRemark.frontmatter.related_collection" : "MarkdownRemark.frontmatter.title",
    "MarkdownRemark.frontmatter.related_blog" : "MarkdownRemark.frontmatter.title",

  } 
}
