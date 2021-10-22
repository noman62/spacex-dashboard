import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import UpcomingLaunches from '../UpcomingLaunches/UpcomingLaunches';

const Dashboard = () => {

    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches')
            .then(res => res.json())
            .then(data => {
                setLaunches(data);
            })
    }, [])
    
    return (
        <div>
            <Navbar/>
            <section>
                <div class="relative items-center w-full px-5 py-12 mx-auto  md:px-12 lg:px-24 max-w-7xl">
                    <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">

                        {
                            launches.map((launch) => <UpcomingLaunches launch={launch}></UpcomingLaunches>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
