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

        <section className="text-justify mt-5 ml-32">
            <div class="relative items-center w-full px-5 py-12 mx-auto  md:px-12 lg:px-24 max-w-7xl">
                <div class="grid w-full grid-cols-1  mx-auto lg:grid-cols-3">
                    <div class="p-3 shadow-md">
                    <img class="object-cover object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl" src={launchInfo.patch.small} alt=""/>
                        <h1 class="mx-auto mb-1 text-md lg:text-md"><span className="font-semibold">Launch-name: </span>{launchDetail.name}</h1>
                        <h1 class="mx-auto mb-1 text-md lg:text-md"><span className="font-semibold">rocket Name: </span>{rocketInfo.name}</h1>
                        <p class="mx-auto mb-1 text-sm   lg:text-md"><span className="font-semibold">flight_number: </span>{launchDetail.flight_number}</p>
                        <p class="mx-auto mb-1 text-sm  lg:text-md"><span className="font-semibold">Launch-date: </span>{launchDetail.date_local}</p>
                        <p class="mx-auto text-base leading-relaxed text-gray-600">{launchDetail.details}</p>
                        <a href={launchInfo.article} className=" underline hover:underline focus:underline" title="article">{launchInfo.article}</a>
                        <a href={launchInfo.wikipedia} className=" underline hover:underline focus:underline" title="article">{launchInfo.wikipedia}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaunchDetails;

