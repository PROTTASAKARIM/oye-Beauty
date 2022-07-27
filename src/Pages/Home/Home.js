import React from 'react';
import Banner from './Banner';
import CleaningServices from './CleaningServices';
import MostUsed from './MostUsed';
import PeaceOfMind from './PeaceOfMind';
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
            <CleaningServices></CleaningServices>
            <MostUsed></MostUsed>
            <PeaceOfMind></PeaceOfMind>
        </div>
    );
};

export default Home;