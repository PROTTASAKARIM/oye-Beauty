import React from 'react';

const SameDayServices = () => {
    return (
        <div className='mt-20'>
            <h1 className=' text-lime-800 font-semibold  text-2xl'>Same Day Services</h1>
            <p><small>Premium home Services</small></p>
            <div className='mx-4 my-2 grid grid-cols-5 gap-1 container mt-40 justify-items-center items-center'>
                <div class="card w-60 h-40 bg-base-100 shadow-xl overflow-visible bg-gradient-to-r from-amber-600 to-amber-200 ">
                    <figure><img className='h-60 w-60 absolute -mt-16' src="https://i.ibb.co/DW5byVh/carpenter-IMG.png" alt="Shoes" /></figure>
                    <p className='text-sm text-white font-semibold absolute mt-32 mx-5 justify-items-center items-center'>Carpentery Services</p>
                </div>
                <div class="card w-56 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-60 absolute -mt-16' src="https://i.ibb.co/xYppQ2q/PLUMBINGSERVICES.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-32 mx-5 justify-items-center items-center'>Plumbing Services</p>
                </div>
                <div class="card w-56 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-60 absolute -mt-16' src="https://i.ibb.co/FV3fdGF/electronic-SERVICES.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-32 mx-5 justify-items-center items-center'>Electrical Services</p>
                </div>
                <div class="card w-56 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-60 absolute -mt-16' src="https://i.ibb.co/yVnc02s/p-AINTINGs-ERVICE.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-32 mx-5 justify-items-center items-center'>Painting Services</p>
                </div>
                <div class="card w-56 h-40 bg-base-100 shadow-xl overflow-visible">
                    <figure><img className='h-60 w-60 absolute -mt-16' src="https://i.ibb.co/sbyHyrj/pest-control-SERVICE.png" alt="Shoes" /></figure>
                    <p className='text-sm font-semibold absolute mt-32 mx-5 justify-items-center items-center'>Pest Control Services</p>
                </div>
            </div>
        </div>
    );
};

export default SameDayServices;