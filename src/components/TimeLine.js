import React from 'react';
import Timeline from 'timelinejs-react';
const events = [];
const title = {};
const options = {};
const MyComponent = () => {
    return React.createElement(
        Timeline, { target: React.createElement("div", { className: "timeline" }), events: events, title: title, options: options });
};
