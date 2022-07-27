import React from 'react';
import Banner from './Banner';
import SafeServices from './SafeServices';
import SameDayServices from './SameDayServices';
import TrandingServices from './TrandingServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrandingServices></TrandingServices>
            <SameDayServices></SameDayServices>
            <SafeServices></SafeServices>
        </div>
    );
};

export default Home;