import React from "react"
import Header from "./header" 
import Footer from "./footer" 
import "./layout.css"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" 


const Layout = ({ children }) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <Header/>
      <div className="max-w-7xl mx-auto pb-5">
         {children}
      </div>
      {" "}
        Login Status:
        <button className="btn" onClick={() => setDialog(true)}>
          {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
        </button>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      <Footer />
    </div>
  )
}
export default Layout
