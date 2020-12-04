import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({data}) {
  const news = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="py-20 bg-hero-pattern">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-2 text-white">
     University of Virginia Press </h2>
    <h3 className="text-2xl mb-8 text-gray-200">
    Founded in 1963 to advance the intellectual interests not only of the University of Virginia, but of institutions of higher learning throughout the state.    </h3>
    <div className="flex">
    <Link to={`/catalog`}><button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-green-400">
      See Current Catalog
    </button></Link>
    <Link to={`/book-search`}><button className="bg-white font-bold rounded-full ml-2 py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-green-400">
      Find a Book
    </button></Link>
    </div>
   
  </div>
</div>
<div className="container mx-auto ">
 <ul className="grid grid-cols-2 md:grid-cols-8 md:auto-rows-fr content-center justify-center">
   <li><Link to={`/subjects`}><button className="hover:bg-gray-500 bg-gray-800 text-white p-4 w-full h-full">Browse by Subject</button></Link></li>
   <li><Link to={`/series`}><button className="hover:bg-gray-500 bg-gray-800 p-4 text-white w-full h-full">Browse by Series</button></Link></li>
   <li><Link to={`/recent-books`}><button className="hover:bg-gray-500 bg-gray-800 p-4 text-white w-full h-full">Recently Published</button></Link></li>
   <li><Link to={`/authors`}><button className="hover:bg-gray-500 bg-gray-800 p-4 text-white w-full h-full">For Authors</button></Link></li>
   <li><Link to={`/instructors`}><button className="hover:bg-gray-500 bg-gray-800 p-4 text-white w-full h-full">For Instructors</button></Link></li>
   <li><Link to={`/marketing`}><button className="hover:bg-gray-500 bg-gray-800 p-4 text-white w-full h-full">For Book Vendors</button></Link></li>

   <li><Link to={`/contact`}><button className="hover:bg-gray-300 bg-gray-800 p-4 text-white w-full h-full">Contact</button></Link></li>
   <li><Link to={`/support-uva-press`}><button className="hover:bg-gray-500 bg-gray-800 p-4 text-white w-full h-full">Support</button></Link></li>

 </ul>
</div>

<section>
<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 py-10">
{data.allMarkdownRemark.edges.map(edge => (
            <> 
            <ul className="flex flex-col center-content">
<li className="px-2 text-center"><button className="px-4 py-2 border-2 border-gray-700 uppercase">{edge.node.frontmatter.type}</button></li>
             <li className="font-black px-2 py-2 text-center">{edge.node.frontmatter.title}</li>
             <li className="px-2"><p>{edge.node.frontmatter.description + '...'} <span><Link to={`/${edge.node.frontmatter.type}${edge.node.fields.slug}`}>More</Link></span></p>
             </li>
              </ul>
             </>
        ))}
</div>

<button className="bg-gray-800 text-white p-4 w-full text-center"><Link className to={`/publicity`}>see all news, media and publicity information</Link></button>
</section>


    <div className="sliderAx h-auto">
      <div id="slider-1" className="container mx-auto bg-green-400">
        <div className="bg-cover bg-center h-auto text-white py-20 px-10 object-fill grid md:grid-cols-2">
       <div>
        <p className="font-bold text-sm uppercase">Featured Title:</p>
        <Link to={'../../title/5477'}><p className="text-3xl font-bold">The Life of William Faulkner</p></Link>
        <p className="text-2xl mb-2 leading-none">This Alarming Paradox, 1935–1962</p>
        <p className="text-xl leading-none uppercase">Carl Rollyson</p>

        <p className="body-text p-5">By the end of volume 1 of The Life of William Faulkner ("A filling, satisfying feast for Faulkner aficianados"— Kirkus), the young Faulkner had gone from an unpromising, self-mythologizing bohemian to the author of some of the most innovative and enduring literature of the century, including The Sound and the Fury and Light in August. The second and concluding volume of Carl Rollyson’s ambitious biography finds Faulkner lamenting the many threats to his creative existence. Feeling, as an artist, he should be above worldly concerns and even morality, he has instead inherited only debts—a symptom of the South’s faded fortunes—and numerous mouths to feed and funerals to fund. And so he turns to the classic temptation for financially struggling writers—Hollywood.</p>
        </div>  
        <div>
        <Link to={'../../title/5477'}><StaticImage className="mx-auto" src="../images/5477.jpg" width={300} alt="This Alarming Paradox" /></Link>
        
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
      allMarkdownRemark(filter: {frontmatter: {type: {in: ["news", "media"]}}}, limit: 3) {
        edges {
          node {
            frontmatter {
              title
              type
              description
            }
            fields {
              slug
            }
          }
        }
      }
  }`
