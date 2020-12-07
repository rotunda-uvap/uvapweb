import React from "react"
import Layout from "../components/layout"
import CurrentList from "../components/current-list"
import { StaticImage } from "gatsby-plugin-image"

export default function Catalog({data}) {
    return (
      <Layout>
       <h2 className="text-4xl py-5 uppercase">Catalog</h2>
       
       <section className="grid md:grid-cols-3 py-5">
         <a href={`fall20.pdf`}> <StaticImage  width={170} src="../images/fall20.jpg" alt="current catalog cover" /></a>
         <div className="self-center py-5 md:col-span-2 flex flex-inital">
           <a href={`fall20.pdf`}><button className="uppercase py-3 px-5 mx-2 rounded-full bg-black text-white">Download Current Catalog</button></a>
           <button className="uppercase py-3 px-10 rounded-full bg-black text-white">View on Edelweiss (need link)</button>
           </div>

       </section>
        
        <section className="py-10">
          <h3 className="text-2xl py-5 uppercase">Previous catalog links</h3>
       <ul className="grid grid-cols-2 md:grid-cols-6 gap-y-1">
       <li><a href={'spring20.pdf'}><StaticImage  width={149} src="../images/spring20.jpg" alt="Spring 2020" /></a></li>
         <li><a href={'fall19.pdf'}><StaticImage  width={149} src="../images/fall19.jpg" alt="Fall 2019" /></a></li>
         <li><a href={'spring19.pdf'}><StaticImage  width={149} src="../images/spring_19.jpg" alt="Spring 2019" /></a></li>
         <li><a href={'fall18.pdf'}><StaticImage  width={149} src="../images/fall18.jpg" alt="Fall 2018" /></a></li>
         <li><a href={'spring18.pdf'}><StaticImage  width={149} src="../images/spring_18.jpg" alt="Spring 2018" /></a></li>
         <li><a href={'fall17.pdf'}><StaticImage  width={149} src="../images/fall17.jpg" alt="Fall 2017" /></a></li>

         </ul></section>
       
       <CurrentList/>
       

      </Layout>
    )
  }
  