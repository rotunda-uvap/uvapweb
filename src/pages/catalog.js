import React from "react"
import Layout from "../components/layout"
import CurrentList from "../components/current-list"
import { StaticImage } from "gatsby-plugin-image"
import SeO from "../components/SeoComponent"
import SectionHeader from "../components/SectionHeader"

export default function Catalog({data}) {
    return (
      <Layout>
        <SeO title="Seasonal Catalogs"/>
        <div className="container px-5 py-12 mx-auto">
       
<section className="py-4 border-b-2 border-gray-100">
<div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128  md:flex-row md:items-center md:space-x-6">
        <div className="flex  w-full md:w-1/3">
        <StaticImage  src="../images/fall21.jpg" alt="current catalog cover" />
        </div>
       
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
                <h1 className="ml-4 text-3xl text-gray-500 font-medium tracking-wide text-gray-500 md:text-4xl">Current Catalog</h1>
                <span className="my-2 ml-4 font-serif text-base text-center md:text-left text-gray-600 dark:text-gray-300">View the selection of books from our Fall 2021 list.</span>
                <div className="ml-4 flex flex-row py-5">
                <span className="font-thin text-lg text-gray-500"><a href={'../../fall21.pdf'}>
            Download Catalog<span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span>
              </a></span>
              <span className="font-thin text-lg ml-4 text-gray-500"><a href="https://www.edelweiss.plus/#catalogID=4590230&page=1">
            View on Edelweiss<span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span></a></span>
             {/*  <span className="font-light text-sm text-gray-500"><a href="#list">
            See All Books<span className="inline-flex items-center mt-4">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg></span></a></span> */}
                    {/* <a href={`fall21.pdf`} className="px-3 py-2 font-serif tracking-widest text-center text-gray-500 ">Download</a> */}
{/*                     <a href="https://www.edelweiss.plus/#catalogID=4590230&page=1" className="px-3 py-2 mx-10 font-sans tracking-widest text-center text-gray-500">View on Edelweiss</a>
                    <a href="#list" className="px-3 py-2 mx-10 font-sans tracking-widest text-center text-gray-500">See Books</a> */}
                </div>
            </div>
        </div>

        
    </div>
</section>
<SectionHeader text={"Previous Seasons"}/>
    <section className="flex flex-row gap-0 py-4 border-b-2 border-gray-100">
       <a href={'../spring21.pdf'} className="h-full" title="Fall 2020"><StaticImage src="../images/spring21.jpg" alt="current catalog cover" className="object-cover"></StaticImage></a>
       <a href={'../fall20.pdf'} className="h-full"><StaticImage src="../images/fall20.jpg" alt="current catalog cover" className="object-cover"></StaticImage></a>
       <a href={'../spring20.pdf'} className="h-full"><StaticImage src="../images/spring20.jpg" alt="current catalog cover" className="object-cover"></StaticImage></a>
       <a href={'../fall19.pdf'} className="h-full"><StaticImage src="../images/fall19.jpg" alt="current catalog cover" className="object-cover"></StaticImage></a>

    </section>

       <section id="list" className="py-4">
       <p className="py-2 text-center uppercase text-gray-500 text-md font-thin tracking-widest mx-auto  font-sans tracking-wide">Books in Current Catalog</p>

         <CurrentList/></section>
       
       </div>

      </Layout>
    )
  }
  