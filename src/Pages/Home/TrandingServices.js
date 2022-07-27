import React from 'react';

const TrandingServices = () => {
    return (
        <div className='mt-5'>
            <h1 className=' text-lime-800 font-semibold  text-2xl'>Trending Services</h1>
            <p><small>Premium home Services</small></p>
            <div className='mx-4 my-2 grid grid-cols-5 gap-1 container'>
                <div class="card w-40 h-24 bg-base-100 shadow-xl">
                    <figure><img className='h-14 w-20' src="https://i.ibb.co/GVm2bBX/ac-Services.png" alt="Shoes" /></figure>
                    <p className='text-sm'><small>Air Conditioner Services</small></p>
                </div>
                <div class="card w-40 h-24 bg-base-100 shadow-xl">
                    <figure><img className='h-14 w-20' src="https://i.ibb.co/gwp4xCQ/acinstallation.png" alt="Shoes" /></figure>
                    <p className='text-sm'><small>AC Installation</small></p>
                </div>
                <div class="card w-40 h-24 bg-base-100 shadow-xl">
                    <figure><img className='h-14 w-20' src="https://i.ibb.co/yPdG8Kd/sofa.png" alt="Shoes" /></figure>
                    <p className='text-sm'><small>Sofa cleaning Services</small></p>
                </div>
                <div class="card w-40 h-24 bg-base-100 shadow-xl">
                    <figure><img className='h-14 w-20' src="https://i.ibb.co/Tb00S3Q/hone-Services.png" alt="Shoes" /></figure>
                    <p className='text-sm'><small>Home Deep Cleaning Service</small></p>
                </div>
                <div class="card w-40 h-24 bg-base-100 shadow-xl">
                    <figure><img className='h-14 w-20' src="https://i.ibb.co/GVm2bBX/ac-Services.png" alt="Shoes" /></figure>
                    <p className='text-sm'><small>Air Conditioner Services</small></p>
                </div>

            </div>
        </div>
    );
};

export default TrandingServices;