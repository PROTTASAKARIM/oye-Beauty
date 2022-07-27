import React from 'react';

const PeaceOfMind = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Assured Peace of Mind</h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div className='flex flex-row'>
                        <img src="https://i.ibb.co/7XtqDT3/High-Quality.png" alt="" />
                        <div className='mx-2'>
                            <h1 className='text-left font-bold'>High Quality Work</h1>
                            <p className='text-left'>Only authorized service experts</p>
                            <p>and genuine spare parts and equipments</p>
                        </div>
                    </div>
                </div>

                <div class="stat">
                    <div className='flex flex-row'>
                        <img src="https://i.ibb.co/XtD0TtF/hassle-Free.png" alt="" />
                        <div className='mx-2'>
                            <h1 className='text-left font-bold'>Hassle Free</h1>
                            <p className='text-left'>Sit back and relax.
                            </p>
                            <p className='text-left'>We do all the work</p>
                        </div>
                    </div>
                </div>

                <div class="stat">
                    <div className='flex flex-row'>
                        <img src="https://i.ibb.co/QY537Rx/totally-Cashless.png" alt="" />
                        <div>
                            <h1 className='text-left font-bold'>Totally Cashless</h1>
                            <p className='text-left'>Pay online for Safe and Secure payment.
                            </p>
                            <p className='text-left'>Many benefits and offers available with online payment</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PeaceOfMind;