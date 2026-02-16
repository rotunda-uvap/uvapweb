import React from "react"
import Layout from "../components/layout"
import "../utils/global.css"
import SeO from "../components/SeoComponent"
import PageHeader from "../components/PageHeader"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailingListPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
          <Layout>
            <SeO title="Sign up for Updates"/>
            <div className="container px-5 py-12 mx-auto">
           <PageHeader text={'Keep in Touch'}/>
           <p>Sign up for the UVA Press newsletter to receive special discounted offers and information on the latest titles in American, European, and African history, African American studies, literature, architecture, environmental studies, and Virginia and the South</p>
        
            <div className="container px-5 py-2 flex flex-col md:flex-row mx-auto place-content-center items-center">
               
            
                <form onSubmit={this._handleSubmit} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end">
                <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                    <label htmlFor="full-name" className="sr-only">Full Name</label>
                    <input type="text" id="full-name" onChange={this._handleChange} placeholder="Full Name" name="name" autoComplete="name" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email"
                                        id="email"
                                        onChange={this._handleChange}
                                        placeholder="Email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        aria-required="true"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <input type="submit" value="Submit" className="w-full bg-ceci-gray-light text-gray-700 uppercase font-sans border-0 py-2 px-8 rounded text-lg cursor-pointer"></input>
                </form>
            </div>
 
     </div>
     </Layout>
            
        )
    }
}

