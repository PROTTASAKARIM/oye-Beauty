import React from 'react';
import Banner from './Banner';
import SameDayServices from './SameDayServices';
import TrandingServices from './TrandingServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrandingServices></TrandingServices>
            <SameDayServices></SameDayServices>
        </div>
    );
};

export default Home;