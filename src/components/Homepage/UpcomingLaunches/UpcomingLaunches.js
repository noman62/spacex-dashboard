import React from 'react';
import { useHistory } from 'react-router';

const UpcomingLaunches = (props) => {

    const { name, flight_number, details, date_utc, id, links } = props.launch;
    const { small } = links.patch;
    const history = useHistory();
    const singleLaunch = (id) => {
        history.push(`/launches/upcoming/${id}`);
    }
    
    return (
        <div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl" src={small} alt=""/>
                <h1 class ="mx-auto mb-1 text-md lg:text-md"><span className="font-semibold">Launch-name: </span>{name}</h1>
                <p class ="mx-auto mb-1 text-sm   lg:text-md"><span className="font-semibold">flight_number: </span>{flight_number}</p>
                <p class ="mx-auto mb-1 text-sm  lg:text-md"><span className="font-semibold">Launch-date: </span>{date_utc}</p>
                
                <p class ="mx-auto text-base leading-relaxed text-gray-600">{details} </p>
                <a href={links.article} className=" underline hover:underline focus:underline" title="article">{links.article}</a>
                <div class ="mt-4">
                <a href="#" onClick={()=>singleLaunch(id)}  class ="inline-flex items-center mt-4 font-semibold text-blue-600  lg:mb-0 hover:text-neutral-600" title="read more"> See More » </a>
                </div>
            </div>
        </div>
    );
};

export default UpcomingLaunches;

