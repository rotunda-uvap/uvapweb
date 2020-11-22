/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `University of Virginia Press`,
    logo: `uvap_logo.png`,
    description: `Using Gatsby JSON Sourcing with Netlify CMS`,
    menuLinks: [
      {
        id: 1,
        name: "home",
        link: "/",
      },
      {
        id: 2,
        name: "about",
        link: "/about",
      },
      {
        id: 3,
        name: "authors",
        link: "/authors",
      },
      {
        id: 4,
        name: "books",
        link: "/books",
      },
      {
        id: 5,
        name: "contact",
        link: "/contact",
      },
      {
        id: 6,
        name: "rotunda",
        link: "https://codepen.io/patricia-searl/full/MWyZKzE",
      },
    ],
    socialLinks: {
      twitter: "https://twitter.com/uva_press",
      facebook: "#",
    },

  },
  plugins: [
    `gatsby-transformer-json`,
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    
  `gatsby-plugin-slug`,
  `gatsby-plugin-netlify-cms`,
  `gatsby-plugin-postcss`,
  
  ],
}
