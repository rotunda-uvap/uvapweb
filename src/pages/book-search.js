import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"



const SearchPage = () => (
    <Layout>
            <h2 className="py-10">Search for Books</h2>
  
           <div className="mx-auto py-5">
               <Search />
               </div> 
         
        </Layout>
)
 
export default SearchPage

