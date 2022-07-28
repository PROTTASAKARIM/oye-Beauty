import React from 'react';

const HomeAppliencesServices = () => {
    return (
        <div className='mt-20'>
            <h1 className=' text-lime-800 font-semibold  text-2xl'>Home Appliances Services</h1>
            <p><small>Premium home Services</small></p>
            <div className='my-2 grid grid-cols-6 gap-4 container mt-40'>
                <div class="card w-48 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-40 absolute -mt-16 rounded-xl' src="https://i.ibb.co/CbSbfqb/wasing-Machine.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-28 mx-5 justify-items-center items-center'>Washing Machine Repair</p>
                </div>
                <div class="card w-48 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-40 absolute -mt-16 rounded-xl' src="https://i.ibb.co/t8gLvSw/fridge.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-28 mx-5 justify-items-center items-center'>Refrigerator Repair / Service</p>
                </div>
                <div class="card w-48 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-40 absolute -mt-16 rounded-xl' src="https://i.ibb.co/Myvv3wW/oven.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-28 mx-5 justify-items-center items-center'>Microwave Repair</p>
                </div>
                <div class="card w-48 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-40 absolute -mt-16 rounded-xl' src="https://i.ibb.co/WF13DzR/filter.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-28 mx-5 justify-items-center items-center'>RO Service</p>
                </div>
                <div class="card w-48 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-40 absolute -mt-16 rounded-xl' src="https://i.ibb.co/2PqFFrR/tv.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-28 mx-5 justify-items-center items-center'>LED TV Repair</p>
                </div>
                <div class="card w-48 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-40 absolute -mt-16 rounded-xl' src="https://i.ibb.co/82gGBJ5/act.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-28 mx-5 justify-items-center items-center'>AC Services</p>
                </div>
            </div>

        </div>
    );
};

export default HomeAppliencesServices;