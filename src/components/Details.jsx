import React from 'react';
import user from '../assets/images/user.png';

const Details = () => {
    return (
        <div className='w-screen md:w-[25%] md:bg-zinc-50 md:h-full py-5 px-10 '>
            <div className='md:flex gap-4 flex md:my-0 my-7 -mx-3'>
                <img src={user} alt="user" className='h-16 w-16 rounded-full' />
                <div className='flex flex-col'>
                    <h1 style={{ fontSize: '25px' }}>Hi, <span className='font-semibold'>Kailash</span></h1>
                    <p>Welcome Back!</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 py-8 md:items-start px-5 md:px-0 bg-zinc-50 md:rounded-none rounded-2xl'>
                <p className='font-semibold'>Today</p>
                <p style={{ color: 'slategrey', fontSize:'13px', fontWeight: 500 }}><span style={{ color: 'black', fontSize:'30px' }}>$19,892</span><br/>Account Balance</p>
                <p style={{ color: 'slategrey', fontSize:'13px', fontWeight: 500 }}><span style={{ color: 'black', fontSize:'20px' }}>$4,000</span><br/>Year-to-Date Contributions</p>
                <p style={{ color: 'slategrey', fontSize:'13px', fontWeight: 500 }}><span style={{ color: 'black', fontSize:'20px' }}>$1,892</span><br/>Total Interest</p>
                <button className='md:w-[50%] w-[80%] bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg'>I want to</button>
            </div>
            <div className='flex flex-col gap-4 py-8 px-5 md:px-0 bg-zinc-50 md:rounded-none rounded-2xl mt-10 md:mt-0'>
               <p className='font-semibold text-lg'>Recent Transactions</p>
               <div className='text-xs font-semibold'>
                <span style={{color: 'slategray'}}>2020-08-07</span>
                <br />
                <span className='text-sm font-semibold'>Withdrawl Transfer to Bank-XXX11</span>
               </div>
               <hr />
               <div className='text-xs font-semibold'>
                <span style={{color: 'slategray'}}>2020-07-21</span>
               <br />
                <span className='text-sm font-semibold'>Withdrawl Transfer to Bank-XXX11</span>
               </div>
               <hr />
               <div className='text-xs font-semibold'>
                <span style={{color: 'slategray'}}>2020-07-16</span>
               <br />
                <span className='text-sm font-semibold'>Withdrawl Transfer to Bank-XXX11</span>
               </div>
               <hr />
            </div>
        </div>
    )
}

export default Details