import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import "./google_cal.css"

// const API_KEY = "AIzaSyB3yXDsyWYYjZwWQtajC6_WEmAMn6Gtbsw";
const API_KEY = process.env.GATSBY_GOOGLE_API_KEY;
let calendars = [
  {calendarId: "uvapressweb@gmail.com", 
  color: "#B241D1"}
  
];

let styles = {
    calendar: {
        borderWidth: "1px"
    },
}

const GoogleCalendar = () => {
    return(
        <div>
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} 
/>
      </div>
    )
}

export default GoogleCalendar

