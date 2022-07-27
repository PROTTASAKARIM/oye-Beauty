import React from 'react';

const SafeServices = () => {
    return (
        <div className='container my-10'>
            <div className='flex flex-row-reverse space-x-10'>
                <img src="https://i.ibb.co/Bf75rN2/safe-Services.jpg" class="max-w-sm shadow-2xl mx-5" />
                <div className='mx-5'>
                    <h1 class="text-5xl font-bold text-lime-800 mt-10">100% Safe Services</h1>
                    <div className='flex flex-row'>
                        <ul className='m-5'>
                            <li className='list-disc'>Masks</li>
                            <li className='list-disc'>Gloves</li>
                        </ul>
                        <ul className='m-5'>
                            <li className='list-disc'>Temperature Check</li>
                            <li className='list-disc'>Sanitize Tools</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SafeServices;