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
            <div>
                <p className="text-3xl font-bold">Join our Mailing List</p>
                <p>Submit the form below to subscribe to our mailing list to get updates on new releases!</p>
                <div className="py-10 px-5">
                    <form onSubmit={this._handleSubmit} className="grid md:grid-cols-2 md:gap-2 align-items">
                       
                        <div>
                            <input
                            className="px-5 w-full text-black"
                            type="text"
                            onChange={this._handleChange}
                            placeholder="name"
                            name="name"
                            height="60"
                            /><br/>
                            <input
                            className="my-5 px-5 w-full text-black"
                            type="email"
                            onChange={this._handleChange}
                            placeholder="email"
                            name="email"
                            height="60"
                        />
                        </div>
                        
                        <div className="px-5">
                           <span>Robot Test: Favorite Color?</span>
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
                                    value="1"
                                    name="group[21265][1]"
                                    id="color-blue"
                                    onChange={this._handleChange}
                                    
                                />
                                <label className="px-5" htmlFor="color-blue">blue</label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="2"
                                    name="group[21265][2]"
                                    id="color-orange"
                                    onChange={this._handleChange}
                                />
                                <label className="px-5" htmlFor="color-orange">orange</label>
                            </li>
                        </ul>
                         <br/>
                        </div>
                        
                        <input className="py-5 bg-black hover:bg-white hover:text-black text-white" type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}