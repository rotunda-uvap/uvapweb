import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


export default function Series({ data }) {
    const series = data.allBooksJson
 return (
    
        <Layout>
          <section>
             <h2 className="py-5 text-4xl">Series</h2>
            <div className="grid md:grid-cols-4 md:grid-4">
            {series.distinct.map(d => (
            <>
           
                <button className="text-xl py-3 px-7 hover:bg-black hover:text-white" key={d}><Link to={`../series/${ d }`}>{ d }</Link></button>
            
            
            </>
        ))}
        </div>
          </section>
         

       
        </Layout>

 )
}



export const query = graphql`
  query {
    allBooksJson {
        distinct(field: Series)
    }
    
  }
`
