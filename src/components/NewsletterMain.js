import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class IndexPage extends React.Component {
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
         <section className="body-font">
            <div className="container px-5 py-2 flex flex-col md:flex-row mx-auto place-content-center items-center">
               
                <p className="font-sans sm:text-lg md:text-xl text-center md:pt-4">Get Updates on our New Releases</p>
            
                <form onSubmit={this._handleSubmit} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end">
                <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                    {/* <label htmlFor="full-name" className="leading-7 text-sm ">Full Name</label> */}
                    <input type="text" onChange={this._handleChange} placeholder="name" name="name" height="60" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                    {/* <label htmlFor="email" className="leading-7 text-sm ">Email</label> */}
                    <input type="email"
                                        onChange={this._handleChange}
                                        placeholder="email"
                                        name="email"
                                        height="60" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <input type="submit" text="Submit" className=" w-full bg-ceci-gray-light text-gray-700 uppercase font-sans border-0 py-2 px-8 focus:outline-none  rounded text-lg  "></input>
                </form>
            </div>
     </section>
            
        )
    }
}