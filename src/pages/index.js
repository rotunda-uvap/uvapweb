import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
    <div>UVA Press Test Website Using Gatsby JSON Sourcing with Netlify CMS</div>
    <h3 className="text-2xl font-black mt-16 mb-2">
                  <Link
                    className="text-blue-400 shadow-none"
                    to={"/news-posts"}
                  >
                    See All News Posts
                  </Link>
                </h3>
       <h3 className="text-2xl font-black mt-16 mb-2">
                  <Link
                    className="text-blue-400 shadow-none"
                    to={"/books"}
                  >
                    See All Books Imported
                  </Link>
                </h3>         
    </Layout>
  )
  
}
