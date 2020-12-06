import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"



const SearchPage = () => (
    <Layout>
            <h2 className="text-3xl py-5">Search for Books</h2>
  
           <div className="mx-auto py-5">
               <Search />
               </div> 
         
        </Layout>
)
 
export default SearchPage

