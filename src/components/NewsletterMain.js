import React from 'react';

export default class IndexPage extends React.Component {
    render() {
        return (
            <section className="body-font">
                <div className="container px-5 py-2 flex flex-col md:flex-row mx-auto place-content-center items-center">
                    <p className="font-thin tracking-wide font-sans uppercase text-lg text-center md:pt-4">
                        Get Updates on our New Releases
                    </p>

                    <form
                        action="https://virginia.us5.list-manage.com/subscribe/post?u=ef1bb24fccf12e802068da002&amp;id=471ea965df&amp;f_id=009dbfedf0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end"
                        target="_self"
                        noValidate
                    >
                        <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                            <label htmlFor="mce-FNAME" className="sr-only">First Name</label>
                            <input
                                type="text"
                                name="FNAME"
                                id="mce-FNAME"
                                placeholder="First Name"
                                className="w-full bg-gray-100 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative sm:mr-4 mb-4 sm:mb-0 flex-grow w-full">
                            <label htmlFor="mce-EMAIL" className="sr-only">Email Address</label>
                            <input
                                type="email"
                                name="EMAIL"
                                id="mce-EMAIL"
                                placeholder="Email Address"
                                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>

                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            <input
                                type="text"
                                name="b_ef1bb24fccf12e802068da002_471ea965df"
                                tabIndex="-1"
                                defaultValue=""
                            />
                        </div>

                        <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="w-full bg-ceci-gray-light text-gray-700 uppercase tracking-wide font-thin font-sans border-0 py-2 px-8 focus:outline-none rounded text-lg"
                            value="Subscribe"
                        />
                    </form>
                </div>
            </section>
        );
    }
}
     
            
