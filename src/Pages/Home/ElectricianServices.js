import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

const ElectricianServices = () => {
    return (
        <div className='flex flex-row items-center container my-10'>
            <div>
                <h1 className=' text-lime-800 font-semibold  text-2xl'>Electrician</h1>
                <h1 className=' text-lime-800 font-semibold  text-2xl'>Services</h1>
                <p><small>Premium home Services</small></p>
            </div>
            <div>
                <ChevronLeftIcon className='h-5 w-5'></ChevronLeftIcon>
            </div>
            <div className='my-2 grid grid-cols-6 gap-4 container mt-40'>
                <div class="card w-24 h-24 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-20 w-20 absolute -mt-16 rounded-xl' src="https://i.ibb.co/tCmNt10/usb.jpg" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-6 mx-5 justify-items-center items-center'>MCB and Fuse</p>
                </div>
                <div class="card w-24 h-24 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-20 w-20 absolute -mt-16 rounded-xl' src="https://i.ibb.co/wL32XGb/switch.jpg" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-6 mx-5 justify-items-center items-center'>Switch and Socket</p>
                </div>
                <div class="card w-24 h-24 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-20 w-20 absolute -mt-16 rounded-xl' src="https://i.ibb.co/MRc0zMB/cable.jpg" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-6 mx-5 justify-items-center items-center'>Wiring</p>
                </div>
                <div class="card w-24 h-24 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-20 w-20 absolute -mt-16 rounded-xl' src="https://i.ibb.co/QNHsyb8/appliences.jpg" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-6 mx-5 justify-items-center items-center'>Appliances</p>
                </div>
                <div class="card w-24 h-24 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-20 w-20 absolute -mt-16 rounded-xl' src="https://i.ibb.co/zGmC603/blub.jpg" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-6 mx-5 justify-items-center items-center'>Chandelier</p>
                </div>
                <div class="card w-24 h-24 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-20 w-20 absolute -mt-16 rounded-xl' src="https://i.ibb.co/MMxB825/doorbell.jpg" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-6 mx-5 justify-items-center items-center'>Door Bell</p>
                </div>
            </div>
            <div>
                <ChevronRightIcon className='h-5 w-5'></ChevronRightIcon>
            </div>

        </div>
    );
};

export default ElectricianServices;