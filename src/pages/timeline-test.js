import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Timeline } from "@knight-lab/timelinejs"
import events from "../../static/timeline-data.json"
const Test = () => {

    const timelineEl = useRef(null)

    useEffect(() => {
      if (timelineEl.current) {
        const timeline = new Timeline(timelineEl.current, events)
      }
    })
  return (
    <Layout>
      
      <p>
        <Link to="/">Head home</Link>
      </p>
      <div ref={timelineEl} />
    </Layout>
  )
}

export default Test

