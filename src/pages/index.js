import React from "react"
import { Link} from "gatsby"
import Layout from "../components/layout"
import FeatPromo from "../components/FeatPromo"
import NewsletterMain from "../components/NewsletterMain"
import RotundaPromo from "../components/RotundaPromo"
import { FaSearch } from "react-icons/fa";
import HomepageBanner from "../components/HomepageBanner"

export default function Home() {
  
  return (
    <Layout>

 <HomepageBanner/>

<section>
<div className="md:grid md:grid-cols-4 md:gap-4 py-10">
    <Link to={`/title/5628`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5628.jpg" className="object-contain"/></Link>
    <Link to={`/title/5617`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5617.jpg" className="object-contain"/></Link>
    <Link to={`/title/5679`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5679.jpg" className="object-contain"/></Link>
    <Link to={`/title/5417`}><img src="https://www.upress.virginia.edu/sites/default/files/covers/5417.jpg" className="object-contain "/></Link>
      </div>
</section>

<div className="my-10 bg-gray-300">
        <RotundaPromo/>
      </div>

<section><FeatPromo/></section>
  

  <div className="py-10 bg-gray-500">
        <div className="container mx-auto px-6">
        <div className="bg-cover bg-center h-auto text-white py-5 px-10 object-fill">
       <div>
       <NewsletterMain/>

        </div>  
    </div>
    </div>
      </div>

    </Layout>
  )
  
}

