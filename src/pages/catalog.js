import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CurrentList from "../components/current-list"
import { StaticImage } from "gatsby-plugin-image"

export default function Catalog({data}) {
    return (
      <Layout>
       <h2>Catalog</h2>
       <p>Download Current Catalog
         <a href={`/fall20.pdf`}> <img src={`/fall20.jpg`}/></a></p>
       <p>Previous catalog links</p>
       <ul className="grid grid-cols-2 md:grid-cols-3">
       <li><a href={'/spring20.pdf'}><StaticImage  width={200} src="../images/spring20.jpg" alt="Spring 2020" /></a><button className="w-full text-white p-2 bg-gray-800">Spring 2020</button></li>
         <li><a href={'/fall19.pdf'}><StaticImage  width={200} src="../images/fall19.jpg" alt="Fall 2019" /></a><button className="w-full text-white p-2 bg-gray-800">Fall 2019</button></li>
         <li><a href={'/spring19.pdf'}><StaticImage  width={200} src="../images/spring_19.jpg" alt="Spring 2019" /></a><button className="w-full text-white p-2 bg-gray-800">Spring 2019</button></li>
         <li><a href={'/fall18.pdf'}><StaticImage  width={200} src="../images/fall18.jpg" alt="Fall 2018" /></a><button className="w-full text-white p-2 bg-gray-800">Fall 2018</button></li>
         <li><a href={'/spring18.pdf'}><StaticImage  width={200} src="../images/spring_18.jpg" alt="Spring 2018" /></a><button className="w-full text-white p-2 bg-gray-800">Spring 2018</button></li>
         <li><a href={'/fall17.pdf'}><StaticImage  width={200} src="../images/fall17.jpg" alt="Fall 2017" /></a><button className="w-full text-white p-2 bg-gray-800">Fall 2017</button></li>

         </ul>
       <p>Link to Edelweiss</p>
       <CurrentList/>
       

      </Layout>
    )
  }
  