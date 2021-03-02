import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query Site_Metadata_Query {
        site {
          siteMetadata {
            title
            menuLinks {
              id
              name
              link
            }
            
          }
        }
      }
    `
  )
  return site.siteMetadata
}