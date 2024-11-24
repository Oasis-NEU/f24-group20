import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import oasisbg from "/oasisbg.png"
import Navigation from './assets/navigation';
import MeetingTimesFormatter from './meetingTimes.jsx'

const Compare = () => {
    const location = useLocation();
    const dataset = location.state; // This will have the passed data
    const data1 = dataset[0];
    const data2 = dataset[1];
    return (
        <div>
            <div className="title">
                <Link id="logo-image" to="/">
      <img src={oasisbg} alt="plaNUr Image"/>  
                </Link>
            </div>
            <>
                <div className="nav">
                    <Link to="/"> Home </Link>
                </div>
                <div className="infoContainer">
                    <div className="classInfo">
                    <h1 className="className">{data1[5]} {data1[6]}</h1>
                        <div className="profContainer">
                            <h1 className="profName">{data1[2]}</h1>
                        </div>
                        <h2 className="profEmail">Email: {data1[3]}</h2>
                        <h2 chassName="className">Rating: {data1[11]}</h2>
                        <h1 className="location">Room: <br></br>{data1[1]}</h1>
                        <MeetingTimesFormatter meetingTimes={data1[8]}></MeetingTimesFormatter>
                        <div className="meetingTimes">
                            <p className={data1[8].some(meeting => meeting.day === '1') ? "yesmeets" : "nomeets"}>M</p>
                            <p className={data1[8].some(meeting => meeting.day === '2') ? "yesmeets" : "nomeets"}>T</p>
                            <p className={data1[8].some(meeting => meeting.day === '3') ? "yesmeets" : "nomeets"}>W</p>
                            <p className={data1[8].some(meeting => meeting.day === '4') ? "yesmeets" : "nomeets"}>T</p>
                            <p className={data1[8].some(meeting => meeting.day === '5') ? "yesmeets" : "nomeets"}>F</p>
                        </div>
                        <h3 className={data1[10]/data1[9] > 0.75 ? "availGood" : data1[10]/data1[9] >= 0.25 ? "availMid" : "availBad"}>Availability: {data1[10]} Remaining / {data1[9]} Total</h3>
                        <WordToMap word={data1[1].split(' ')[0]}></WordToMap>
                        <h2 className="classPic"> Classroom Picture</h2>
                    </div>
                    <div className="classInfo">
                    <h1 className="className">{data2[5]} {data2[6]}</h1>
                        <div className="profContainer">
                            <h1 className="profName2">{data2[2]}</h1>
                        </div>
                        <h2 className="profEmail">Email: {data2[3]}</h2>
                        <h2 chassName="className2">Rating: {data2[11]}</h2>
                        <h1 className="location">Room: <br></br>{data2[1]}</h1>
                        <MeetingTimesFormatter meetingTimes={data2[8]}></MeetingTimesFormatter>
                        <div className="meetingTimes">
                            <p className={data2[8].some(meeting => meeting.day === '1') ? "yesmeets" : "nomeets"}>M</p>
                            <p className={data2[8].some(meeting => meeting.day === '2') ? "yesmeets" : "nomeets"}>T</p>
                            <p className={data2[8].some(meeting => meeting.day === '3') ? "yesmeets" : "nomeets"}>W</p>
                            <p className={data2[8].some(meeting => meeting.day === '4') ? "yesmeets" : "nomeets"}>T</p>
                            <p className={data2[8].some(meeting => meeting.day === '5') ? "yesmeets" : "nomeets"}>F</p>
                        </div>
                        <h3 className={data2[10]/data2[9] > 0.75 ? "availGood" : data2[10]/data2[9] >= 0.25 ? "availMid" : "availBad"}>Availability: {data2[10]} Remaining / {data2[9]} Total</h3>
                        <WordToMap word={data2[1].split(' ')[0]}></WordToMap>
                        <h2 className="classPic2"> Classroom Picture 2</h2>
                    </div>
                </div>
            </>
        </div>
    );
}
export default Compare