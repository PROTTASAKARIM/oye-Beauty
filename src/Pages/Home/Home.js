import React from 'react';
import Banner from './Banner';
import CleaningServices from './CleaningServices';
import MostUsed from './MostUsed';
import PeaceOfMind from './PeaceOfMind';
import SafeServices from './SafeServices';
import SameDayServices from './SameDayServices';
import TrandingServices from './TrandingServices';
import TrandingServices2 from './TrandingServices2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TrandingServices></TrandingServices>
            <SameDayServices></SameDayServices>
            <SafeServices></SafeServices>
            <CleaningServices></CleaningServices>
            <MostUsed></MostUsed>
            <PeaceOfMind></PeaceOfMind>
            <TrandingServices2></TrandingServices2>
        </div>
    );
};

export default Home;