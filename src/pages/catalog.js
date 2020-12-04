import React from "react"
import Layout from "../components/layout"
import CurrentList from "../components/current-list"
import { StaticImage } from "gatsby-plugin-image"

export default function Catalog({data}) {
    return (
      <Layout>
       <h2 className="text-4xl py-2">Catalog</h2>
       
       <section className="grid grid-cols-2 md:grid-cols-3">
         <a href={`/downloads/fall20.pdf`}> <img src={`/images/fall20.jpg`} alt="current catalog cover"/></a>
         <a className="self-center md:col-span-2" href={`/downloads/fall20.pdf`}><button className="uppercase py-2 px-5 rounded-full bg-green-400 text-white">Download Current Catalog</button></a>
       </section>
         
       <h3 className="text-3xl py-5">Previous catalog links</h3>
       <ul className="grid grid-cols-2 md:grid-cols-6 gap-y-1">
       <li><a href={'/downloads/spring20.pdf'}><StaticImage  width={149} src="../images/spring20.jpg" alt="Spring 2020" /></a><button className="w-auto ml-2 text-white p-2 bg-gray-800">Spring 2020</button></li>
         <li><a href={'/downloads/fall19.pdf'}><StaticImage  width={149} src="../images/fall19.jpg" alt="Fall 2019" /></a><button className="w-auto  text-white p-2 bg-gray-800">Fall 2019</button></li>
         <li><a href={'/downloads/spring19.pdf'}><StaticImage  width={149} src="../images/spring_19.jpg" alt="Spring 2019" /></a><button className="w-auto text-white p-2 bg-gray-800">Spring 2019</button></li>
         <li><a href={'/downloads/fall18.pdf'}><StaticImage  width={149} src="../images/fall18.jpg" alt="Fall 2018" /></a><button className="w-auto text-white p-2 bg-gray-800">Fall 2018</button></li>
         <li><a href={'/downloads/spring18.pdf'}><StaticImage  width={149} src="../images/spring_18.jpg" alt="Spring 2018" /></a><button className="w-auto text-white p-2 bg-gray-800">Spring 2018</button></li>
         <li><a href={'/downloads/fall17.pdf'}><StaticImage  width={149} src="../images/fall17.jpg" alt="Fall 2017" /></a><button className="w-auto text-white p-2 bg-gray-800">Fall 2017</button></li>

         </ul>
       <p>Link to Edelweiss</p>
       <CurrentList/>
       

      </Layout>
    )
  }
  