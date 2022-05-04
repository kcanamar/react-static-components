import React from "react"
import "./Dashboard.css"
import AverageRating from "../averageRating/AverageRating"
import Reviews from "../reviews/Reviews"
import SentimentAnalysis from "../sentimentAnalysis/SentimentAnalysis"
import Sidebar from "../sidebar/Sidebar"
import WebsiteVisitors from "../websiteVisitors/WebsiteVisitors"

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