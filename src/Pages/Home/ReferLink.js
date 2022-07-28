import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid'

const ReferLink = () => {
    return (
        <div className='flex flex-row justify-between container bg-gray-50 my-10'>
            <div className='p-10'>
                <h1 class="text-2xl font-bold text-lime-800 mt-10">Refer and or get link</h1>
                <h1 class="text-lg font-semibold text-lime-800">Invite your friends</h1>
                <label class="input-group">
                    <input type="text" placeholder="Enter your 10 digit mobile number" class="input input-bordered" />
                    <span><button><ArrowRightIcon className='h-5 w-5'></ArrowRightIcon></button></span>
                </label>
                <div className='flex flex-row my-5'>
                    <img className='w-24 h-10 mt-3' src="https://i.ibb.co/wgd1BGz/apple-Logo.png" alt="" />
                    <img className='w-28 h-16' src="https://i.ibb.co/TtX2Rf2/google-Play.png" alt="" />
                </div>
            </div>
            <div>
                <img className='w-1/2' src="https://i.ibb.co/xMNZYsB/app.png" alt="" />
                {/* <img className='w-1/3' src="https://i.ibb.co/xMNZYsB/app.png" alt="" /> */}

            </div>

        </div>
    );
};

export default ReferLink;