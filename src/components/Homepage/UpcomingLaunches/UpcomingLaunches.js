import React from 'react';
import { useHistory } from 'react-router';

const UpcomingLaunches = (props) => {
    const {name,flight_number,details,date_utc,id,links}=props.launch;
    const {small}=links.patch;
    // console.log(links.patch)
    // console.log(small);
    const history=useHistory();
    const singleLaunch=(id)=>{
        history.push(`/launches/upcoming/${id}`);
    }
    return (
        <div>
            <p>Launch-name:{name}</p>
            <p>flight_number:{flight_number}</p>
            <p>Details:{details}</p>
            <p>Launch-date:{date_utc}</p>
            <img src={small} alt="" />
            <p>{links.article}</p>
            <a href="" onClick={()=>singleLaunch(id)}>see more</a>
        </div>
    );
};

export default UpcomingLaunches;