import React, { useState } from 'react'
import Chart from './Chart';
import { Link } from 'react-router-dom';
import CircularChart from './CircularChart';
import Slider from './Slider';
import Select from './Select';

const Strategy = () => {

    const [value, setValue] = useState(12);

    const calculateGradient = () => {
        const percent = (value / 100) * 100;
        return `linear-gradient(90deg, #3498db ${percent}%, #ecf0f1 ${percent}%)`;
      };

    return (
        <div className='md:w-[75%] w-full flex md:flex-row flex-col h-full md:px-14 md:py-10 px-10 py-10 pb-0'>
            <div className='md:w-[70%] w-full flex flex-col justify-between'>
                <p className='font-semibold text-indigo-500 md:py-0 py-2'>Retirement Income
                    <br />
                    <span className='text-black text-2xl'>Starting Year 2056</span>
                </p>
                <div className='flex w-full justify-between md:flex-row flex-col md:py-0 py-2'>
                    <div className='font-bold text-lg md:w-[30%] w-full'>
                        $300,000<br />
                        <span className='text-xs font-semibold text-slate-500 '>My Goal</span> <br />
                        <hr className='border-indigo-500 border' />
                    </div>
                    <div className='font-bold text-lg md:w-[30%] w-full'>
                        59%<br />
                        <span className='text-xs font-semibold text-slate-500'>Goal Achieved</span> <br />
                        <hr className='border-indigo-500 border' />
                    </div>
                    <div className='font-bold text-lg md:w-[30%] w-full'>
                        $300<br />
                        <span className='text-xs font-semibold text-slate-500'>Est. Monthly Income</span> <br />
                        <hr className='border-indigo-500 border' />
                    </div>
                </div>
                <div className='md:pt-0 pt-10'>
                    <p className='text-lg font-semibold'>Contributions Overtime</p>
                    <Chart />
                </div>
                <div className='w-full my-10 md:my-0'>
                    <p className='text-lg font-semibold'>How do I compare to my peers?</p>
                    <p className='text-xs font-medium text-slate-500'>These numbers represents current goal achievements</p>
                    <div className='flex mt-4 md:flex-row flex-col'>
                        <div className='flex flex-col gap-2 md:w-[37%] w-full'>
                            <Select label={'Age:'} value={'option1'}/>
                            <hr />
                            <Select label={'Salary:'} value={'option2'}/>
                            <hr />
                            <Select label={'Gender:'} value={'option3'}/>
                            <hr />
                        </div>
                        <div className='md:w-[63%] flex justify-between md:pl-10 w-full mt-5 md:mt-0'>
                            <CircularChart dataset={[78, 22]} text={'Average'} />
                            <CircularChart dataset={[95, 5]} text={'Top'} />
                            <CircularChart dataset={[59, 41]} text={'Me'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-[30%] md:ml-14 -mx-10'>
                <div className='w-full bg-zinc-50 md:p-5 flex flex-col gap-3 rounded-2xl pb-0'>
                    <p className='text-lg font-semibold md:px-0 px-10 md:mt-0 mt-5'>Retirement Strategy</p>
                    <Slider percentage={12} text={'Employee Contribution'}/>
                    <Slider percentage={65} text={'Retirement Age'}/>
                    <hr className='my-2'/>
                    <p className='text-xs font-medium flex justify-between md:px-0 px-10 md:py-0 py-3'>Employer Contribution <span>8.4%</span></p>
                    <p className='text-xs font-medium flex justify-between md:px-0 px-10 md:py-0 py-3'>Interest Rate <span>5%</span></p>
                    <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-t-lg md:rounded-lg'>Update</button>
                    <Link className='text-indigo-600 text-center text-xs font-medium hidden md:flex'>View Help Docs</Link>
                </div>
                <div className='w-full md:flex flex-col mt-4 border-l-2 border-indigo-600 p-5 gap-2 hidden'>
                    <p className='text-sm'>Are you considering a <br />
                        <span className='font-semibold'>Housing Advance?</span>
                    </p>
                    <p className='text-xs text-slate-500'>Limited time reduced interest.</p>
                    <Link className='text-indigo-600 text-xs font-medium'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Strategy