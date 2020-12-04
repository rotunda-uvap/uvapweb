import React from "react"
import Layout from "../components/layout"
import Search from "../components/search/search"
import { Link } from "gatsby"



const SearchPage = () => (
    <Layout>
            <h2 className="text-3xl py-5">Find Books</h2>
            <div className="container">
 <ul className="grid md:grid-cols-3 md:auto-rows-fr content-center justify-center">
   <li><Link to={`/subjects`}><button className="hover:bg-green-400 bg-gray-800 text-white p-4 w-full h-full">Browse by Subject</button></Link></li>
   <li><Link to={`/series`}><button className="hover:bg-green-400 bg-gray-800 p-4 text-white w-full h-full">Browse by Series</button></Link></li>
   <li><Link to={`/recent-books`}><button className="hover:bg-green-400 bg-gray-800 p-4 text-white w-full h-full">Recently Published</button></Link></li>
   
 </ul>
</div>
           <div className="mx-auto py-5">
               <Search />
               </div> 
         
        </Layout>
)
 
export default SearchPage

