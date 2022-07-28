import React from 'react';
import Banner from './Banner';
import CarpenterServices from './CarpenterServices';
import ChooseUS from './ChooseUS';
import CleaningServices from './CleaningServices';
import CustomerReview from './CustomerReview';
import ElectricianServices from './ElectricianServices';
import HomeAppliencesServices from './HomeAppliencesServices';
import Logo from './Logo';
import MostUsed from './MostUsed';
import PeaceOfMind from './PeaceOfMind';
import PlumberServices from './PlumberServices';
import ReferLink from './ReferLink';
import SafeServices from './SafeServices';
import SameDayServices from './SameDayServices';
import TrandingServices from './TrandingServices';
import TrandingServices2 from './TrandingServices2';
import TrandingServices50 from './TrandingServices50';

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
            <HomeAppliencesServices></HomeAppliencesServices>
            <TrandingServices50></TrandingServices50>
            <ElectricianServices></ElectricianServices>
            <PlumberServices></PlumberServices>
            <CarpenterServices></CarpenterServices>
            <ChooseUS></ChooseUS>
            <CustomerReview></CustomerReview>
            <ReferLink></ReferLink>
            <Logo></Logo>
        </div>
    );
};

export default Home;