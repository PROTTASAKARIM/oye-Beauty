import React from 'react';

const TrandingServices50 = () => {
    return (
        <div className='bg-amber-300 flex flex-row my-10'>
            <img className='w-2/4 h-1/4' src="https://i.ibb.co/GRSmG5B/tranding-Services.png" alt="" />
            <div>
                <h1 className='font-bold text-black text-5xl mt-10'>TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!</h1>
                <div class="relative flex py-5 items-center">
                    <div class="flex-grow border-t border-black"></div>
                    <span class="flex-shrink mx-4 text-black font-semibold text-2xl">On any service you book</span>
                    <div class="flex-grow border-t border-black"></div>
                </div>
                <button class="btn btn-outline btn-error my-5">BOOK A SERVICE</button>

            </div>

        </div>
    );
};

export default TrandingServices50;