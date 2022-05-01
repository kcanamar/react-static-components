import React from "react"
import AverageRating from "./AverageRating"
import Reviews from "./Reviews"
import SentimentAnalysis from "./SentimentAnalysis"
import Sidebar from "./Sidebar"
import WebsiteVisitors from "./WebsiteVisitors"

export default function Dashboard(props) {
    return (
        <div id="dashboard">
            <Sidebar/>
            <AverageRating/>
            <Reviews/>
            <SentimentAnalysis/>
            <WebsiteVisitors/>
        </div>
    )
}