import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home({data}) {
  return (
    <Layout>
    <div>{data.site.siteMetadata.description}</div>
    <div className="flex flex-col">
      <button className="text-2xl bg-blue-500 px-5 py-5 my-5 rounded flex-auto">
                  <Link
                    className="text-white shadow-none"
                    to={"/news-posts"}
                  >
                    See All News Posts
                  </Link>
                </button>
       <button className="text-2xl bg-blue-500 px-5 py-5 my-5 flex-auto rounded">
                  <Link
                    className="text-white shadow-none"
                    to={"/books"}
                  >
                    See All Books
                  </Link>
                </button>
                <button className="text-2xl bg-blue-500 px-5 py-5 my-5 flex-auto rounded">
                  <Link
                    className="text-white shadow-none"
                    to={"/subjects"}
                  >
                    See All Subjects
                  </Link>
                </button>    
                <button className="text-2xl bg-blue-500 px-5 py-5 my-5 flex-auto rounded">
                  <Link
                    className="text-white shadow-none"
                    to={"/series"}
                  >
                    See All Series
                  </Link>
                </button>                  
    </div>
    
    </Layout>
  )
  
}

export const query = graphql`
    query  {
      site {
        siteMetadata {
          title
          logo
          description
        }
      }
  }`
