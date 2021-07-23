import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"
import SEO from "../components/SEO"




const SearchPage = () => (
    <Layout>
      <SEO title="Search for Books"/>
            <section className="container px-5 py-12 mx-auto">
            <h1 className="sm:text-3xl text-2xl p-4 font-sans uppercase text-gray-900 text-center">Search for Books</h1>
 
           <div className="mx-auto">
               <Search />
               </div> 
          </section>
        </Layout>
)
 
export default SearchPage

