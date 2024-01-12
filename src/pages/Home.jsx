import React from 'react';
import Details from '../components/Details';
import Menu from '../components/Menu';
import Strategy from '../components/Strategy';

const Home = () => {
    return (
        <div className='md:bg-slate-200 h-screen md:flex justify-center items-center'>
            <div className='md:w-[99%] md:h-[99%] w-full flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl'>
                <Menu />
                <Details />
                <Strategy />
            </div>
        </div>
    )
}

export default Home