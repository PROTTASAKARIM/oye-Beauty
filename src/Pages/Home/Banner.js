import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-1/2 h-screen bg-[url(https://placeimg.com/400/300/arch)]'>
                {/* <img className='w-screen' src="https://placeimg.com/400/300/arch" alt="Burger" /> */}
                <h1 className='text-white font-bold text-2xl my-5'>Home Services and Demand</h1>
                <input className='w-2/3 mx-auto input input-bordered' type="text" placeholder="Search Your Products" />
            </div>
            <div className='w-1/2'>
                <h1 className='font-semibold text-xl'>What are you looking for?</h1>
                <div className='mx-4 my-2 grid grid-cols-4 gap-2'>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/5x9zSXN/scissor-brush.jpg" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Salon at Home</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/SB6N0v4/electronic.webp" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Electrician</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/3TJDZY9/plumbing.webp" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Plumber</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/nMkHWQ7/cctv.webp" alt="Shoes" /></figure>
                        <p className='text-sm'><small>CCTV</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/swsnSZs/ac.jpg" alt="Shoes" /></figure>
                        <p className='text-sm'><small>CCTV</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/ngKzCxt/pickup.jpg" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Packer and movers</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/bB7rnvS/vacuam-cleaner.jpg" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Cleaning</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/JtB4N5s/house-painting.png" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Painting</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/LCX3TN5/home-appliences.png" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Home Appliances </small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/FK0yCJP/disinfectation.jpg" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Disinfection</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/R2vXdgt/pest-control.jpg" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Pest control</small></p>
                    </div>
                    <div class="card w-20 h-24 bg-base-100 shadow-xl">
                        <figure><img className='h-14 w-20' src="https://i.ibb.co/k3qs8H0/carpenter.jpg" alt="Shoes" /></figure>
                        <p className='text-sm'><small>Carpenter</small></p>
                    </div>
                </div>
                <div className='flex flex-row mt-12'>
                    <figure><img src="https://i.ibb.co/gwWV5k2/servicein60.png" alt="Shoes" /></figure>
                    <figure><img src="https://i.ibb.co/6g2KjmV/peststart.png" alt="Shoes" /></figure>
                </div>

            </div>

        </div>
    );
};

export default Banner;