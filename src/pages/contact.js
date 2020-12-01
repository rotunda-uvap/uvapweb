import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const ContactPage = () => (
    <Layout>
            <h1>Contact Us</h1>

<h5>Main Office</h5>
<p>Phone: 434 924-3468 (toll-free: 1-800-831-3406)</p>
<p>Fax: 434 982-2655 (toll-free: 1-877-288-6400)</p>
<p>Email for General Inquiries: <a href="mailto:vapress​@​virginia.edu">vapress​@​virginia.edu</a></p>

     <h5>Postal and Shipping Address</h5>
     <p>U. S. Postal Address University of Virginia Press P.O. Box 400318 Charlottesville, VA 22904-4318</p>
     <h5>Courier Delivery (FedEx, UPS, etc.)</h5>
     <p>University of Virginia Press 210 Sprigg Lane Charlottesville, VA 22903</p>
     <h5>Directions to UVA Press</h5>
     <p>We are located at 210 Sprigg Lane, just off Emmet St. across from the main UVA Grounds. (Specifically, Sprigg Lane is just across from the tennis courts and adjoins Alumni Hall on the north.)</p>

<p>The Press building, Bemiss House, is building #4 on the <a href="https://visitormap.virginia.edu/#/-78.50730/38.03749/15">interactive UVA Map of our area</a>. You can also find us on Google maps <a href="https://www.google.com/maps/dir//38.038656,-78.508947/@38.0386918,-78.5789785,12z">Here.</a></p>

<p>If you are driving, we usually have parking space available in the driveway just past Bemiss House on the left; we do not have visitor permits for the Alumni Hall parking lot.</p>
        
        <h5>Rights and Permissions</h5>
        <p>For requests, email <a href="mailto:smoomaw@virginia.edu">here</a></p>

        <h5><Link to={`../staff-list` }>Full Staff List</Link></h5>
        </Layout>
)
 
export default ContactPage

