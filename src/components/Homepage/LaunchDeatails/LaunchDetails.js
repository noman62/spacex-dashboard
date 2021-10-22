import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LaunchDetails = () => {
    const { id } = useParams();
    const [launchDetail, setLaunchDetail] = useState({});
    const [rocket, setRocket] = useState({});
    const [rocketInfo, setRocketInfo] = useState({})
    const [launchInfo, setLaunchInfo] = useState({})


    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launches/${id}`)
            .then(res => res.json())
            .then(data => {
                setLaunchDetail(data);
                setRocket(data.rocket)
                setLaunchInfo(data.links);
                console.log(data.links.article);
            });
    }, [id]);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/rockets/${rocket}`)
            .then(res => res.json())
            .then(data => {
                setRocketInfo(data)
                
            })
    }, [rocket])
  
    return (
        <div>
            <p>Name:{launchDetail.name}</p>
            <p>date:{launchDetail.date_local}</p>
            <p>flight_number:{launchDetail.flight_number}</p>
            <p>Details:{launchDetail.details}</p>
            <p>{launchInfo.article}</p>
            <p>{launchInfo.wikipedia}</p>
            <p>rocket:{rocketInfo.name}</p>


        </div>
    );
};

export default LaunchDetails;