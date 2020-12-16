import React from "react"
import Layout from "../components/layout"
import CurrentList from "../components/current-list"
import { StaticImage } from "gatsby-plugin-image"

export default function Catalog({data}) {
    return (
      <Layout>
       <h2 className="text-4xl py-5 uppercase">Catalog</h2>
       
       <section className="grid md:grid-cols-3 py-5">
         <a href={`spring21.pdf`}> <StaticImage  width={200} src="../images/spring21.jpg" alt="current catalog cover" /></a>
         <div className="self-center py-5 md:col-span-2 flex flex-inital">
           <a href={`fall20.pdf`}><button className="uppercase py-3 px-5 mx-2 rounded-full bg-black text-white">Download Current Catalog</button></a>
           <a href="https://www.edelweiss.plus/#catalogID=4534821"><button className="uppercase py-3 px-10 rounded-full bg-black text-white">View on Edelweiss</button></a>
           </div>

       </section>
        
        <section className="py-10">
          <h3 className="text-2xl py-5 uppercase">Previous catalog links</h3>
       <ul className="grid grid-cols-2 md:grid-cols-6 gap-y-1">
       <li><a href={'fall20.pdf'} title="Fall 2020"><StaticImage  width={149} src="../images/fall20.jpg" alt="Fall 2020" /></a></li>
       <li><a href={'spring20.pdf'} title="Spring 2020"><StaticImage  width={149} src="../images/spring20.jpg" alt="Spring 2020" /></a></li>
         <li><a href={'fall19.pdf'} title="Fall 2019"><StaticImage  width={149} src="../images/fall19.jpg" alt="Fall 2019" /></a></li>
         <li><a href={'spring19.pdf'} title="Spring 2019"><StaticImage  width={149} src="../images/spring_19.jpg" alt="Spring 2019" /></a></li>
         <li><a href={'fall18.pdf'} title="Fall 2018"><StaticImage  width={149} src="../images/fall18.jpg" alt="Fall 2018" /></a></li>
         <li><a href={'spring18.pdf'} title="Spring 2018"><StaticImage  width={149} src="../images/spring_18.jpg" alt="Spring 2018" /></a></li>

         </ul></section>
       
       <CurrentList/>
       

      </Layout>
    )
  }
  