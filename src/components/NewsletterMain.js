import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Layout from "./layout"

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
         <section class="text-gray-700 body-font">
            <div class="container px-5 py-2 mx-auto">
                <div class="flex flex-col text-center w-full mb-4">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Join our Mailing List</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Submit the form below to subscribe to our mailing list for updates on new releases</p>
                </div>
                <form onSubmit={this._handleSubmit} class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end">
                <div class="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                    <label for="full-name" class="leading-7 text-sm text-white">Full Name</label>
                    <input type="text" onChange={this._handleChange} placeholder="name" name="name" height="60" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div class="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                    <label for="email" class="leading-7 text-sm text-white">Email</label>
                    <input type="email"
                                        onChange={this._handleChange}
                                        placeholder="email"
                                        name="email"
                                        height="60" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <input type="submit" text="Submit" class="text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg"></input>
                </form>
            </div>
     </section>
            
        )
    }
}