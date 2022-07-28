import React from 'react';

const ChooseUS = () => {
    return (
        <div className='container my-10'>
            <div className='flex flex-row space-x-10'>
                <img src="https://i.ibb.co/5BWH5dc/chooseUs.jpg" class="max-w-sm shadow-2xl mx-5" />
                <div className='mx-5'>
                    <h1 class="text-2xl font-bold text-lime-800 mt-10">Why People Choose Us</h1>
                    <div className='flex flex-row'>
                        <ul className='m-5'>
                            <li className='list-disc'>Affordable Rates</li>
                            <li className='list-disc'>On Time Service</li>
                        </ul>
                        <ul className='m-5'>
                            <li className='list-disc'>Excellent Service</li>
                            <li className='list-disc'>Verified Professionals</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseUS;