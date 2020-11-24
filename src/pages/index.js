import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({data}) {
  return (
    <Layout>
    <div className="sliderAx h-auto">
      <div id="slider-1" className="container mx-auto">
        <div className="bg-cover bg-center bg-blue-400 h-auto text-white py-24 px-10 object-fill">
       <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">some sort of tagline</p>
        <p className="text-3xl font-bold">University of Virginia Press</p>
        <p className="text-2xl mb-10 leading-none">Put a little more text here</p>
        <div className="flex flex-auto content-center ">
        <Link to={`/catalog`} className="bg-blue-600 p-8 mx-2 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">View our latest catalog</Link>
        <Link to={`/recent-books`} className="bg-blue-600 p-8 mx-2 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Recently Published Books</Link>
          </div>
        </div>  
    </div>
    </div>
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
