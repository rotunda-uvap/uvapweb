import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"




const SearchPage = () => (
    <Layout>
      <SeO title="Search for Books"/>
            <section className="container px-5 py-12 mx-auto">
        <PageHeader text={"Search"}/>
           <div className="mx-auto">
               <Search />
               </div> 
          </section>
        </Layout>
)
 
export default SearchPage

