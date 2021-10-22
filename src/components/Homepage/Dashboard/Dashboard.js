import React, { useState,useEffect } from 'react';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches';

const Dashboard = () => {
    const [launches,setLaunches]=useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setLaunches(data);
        })
    }, [])
    return (
        <div>
           
           {
               launches.map((launch)=><UpcomingLaunches launch={launch}></UpcomingLaunches>)
           }
        </div>
    );
};

export default Dashboard;