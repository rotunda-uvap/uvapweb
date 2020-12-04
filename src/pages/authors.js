import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../utils/global.css"


export default function AuthorsPage({ data }) {
    const staff = data.allStaffJson
 return (
    
        <Layout>
            <h2 className="text-5xl py-2">Authors</h2>

            <section className="py-5">
        <div class="wrapper">
                <input class="radio" id="one" name="group" type="radio" checked/>
                <input class="radio" id="two" name="group" type="radio"/>
                <div class="tabs">
                 <label class="tab" id="one-tab" for="one">Current Authors</label>
                <label class="tab" id="two-tab" for="two">Prospective Authors</label>
                    </div>
            <div class="panels">
                <div class="panel" id="one-panel">
                    Pull text from current authors page. How treat files? 
                </div>
                <div class="panel" id="two-panel">
                Pull text from prospective authors page. How treat files? 

                 </div>
            </div>
        </div>
            </section>


            <section className="py-20">
                
                <div className="grid md:grid-cols-2 gap-2"> 
                {staff.edges.map(edge => (
                    <>
                        <div className="flex flex-auto">
                            <img src="http://placeimg.com/100/100/animals"/>
                             <ul className="flex flex-col px-10">
                                <li className="font-black"><Link to={`../staff/${ edge.node.slug }`}>{ edge.node.name }
                                </Link></li> 
                                <li>{edge.node.jobtitle}</li>
                                <li>{edge.node.phone}</li>
                                <li><a href={`mailto:${ edge.node.email }`}>{edge.node.email}</a></li>
                          </ul>
                        </div>
                    </>

                    ))}

                     </div>
                
            </section>
            <section className="py-20 bg-gray-100">
                <h3 className="text-4xl">Files</h3>
            <p>Files to download, how display? </p>
            </section>

           
        </Layout>

 )
}



export const query = graphql`
  query {
   
      allStaffJson(filter: {department: {eq: "Acquisitions"}}) {
        edges {
          node {
            name
            department
            jobtitle
            phone
            email
          }
        }
      }
  }
`
