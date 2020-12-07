import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const ContactPage = () => (
    <Layout>
            <h2 className="py-5 text-4xl">Contact Us</h2>

            <section className="py-5 grid grid-cols-2 mx-auto">
            <div className="p-3 uppercase text-center">Location Information</div>
            <Link className="p-3 bg-gray-700 hover:bg-blue-200 hover:text-black text-white uppercase text-center" to={'/staff-list'}><button >Staff Directory</button></Link>

        </section>
            <h5 className="text-2xl py-3">Main Office</h5>
               <ul>
                <li>Phone: 434 924-3468 (toll-free: 1-800-831-3406)</li>
                 <li>Fax: 434 982-2655 (toll-free: 1-877-288-6400)</li>
                 <li>Email for General Inquiries: <a href="mailto:vapress​@​virginia.edu">vapress​@​virginia.edu</a></li>
                </ul> 

     <h5 className="text-2xl py-3">Postal and Shipping Address</h5>
     <ul className="py-5">
             <li>University of Virginia Press</li> 
             <li>P.O. Box 400318</li>
             <li>Charlottesville, VA 22904-4318</li>
             </ul>
     
             <h5 className="text-2xl py-3">Courier Delivery (FedEx, UPS, etc.)</h5>
     <ul className="py-5">
             <li>University of Virginia Press</li>
             <li>210 Sprigg Lane</li>
             <li>Charlottesville, VA 22903</li>
     </ul>

     <h5 className="text-2xl py-3">Directions to UVA Press</h5>
     <p>We are located at 210 Sprigg Lane, just off Emmet St. across from the main UVA Grounds. (Specifically, Sprigg Lane is just across from the tennis courts and adjoins Alumni Hall on the north.)</p>

<p>The Press building, Bemiss House, is building #4 on the <a href="https://visitormap.virginia.edu/#/-78.50730/38.03749/15">interactive UVA Map of our area</a>. You can also find us on Google maps <a href="https://www.google.com/maps/dir//38.038656,-78.508947/@38.0386918,-78.5789785,12z">Here.</a></p>

<p>If you are driving, we usually have parking space available in the driveway just past Bemiss House on the left; we do not have visitor permits for the Alumni Hall parking lot.</p>
        
        <h5>Rights and Permissions</h5>
        <p>For requests, email <a href="mailto:smoomaw@virginia.edu">here</a></p>

        </Layout>
)
 
export default ContactPage

