import React from 'react';

import useTitle from '../../../Hook/useTitle';
import AdSection from '../AdSection/AdSection';
import CategorySection from '../CategorySection/CategorySection';
import MainBanner from '../MainBanner/MainBanner';
import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';
import AppDownload from '../AppDownload/AppDownload';
import OurTeam from '../OurTeam/OurTeam';
import SellerReviews from '../SellerReviews/SellerReviews';
import FrequentlyAsked from '../FrequentlyAsked/FrequentlyAsked';

const HomePageLayout = () => {
    useTitle("TimeCraft Home")
    return (
        <div className='container mx-auto'>
            <MainBanner></MainBanner>
            <AdSection></AdSection>
            <CategorySection></CategorySection>
            <UpcomingProducts></UpcomingProducts>
            <AppDownload></AppDownload>
            <SellerReviews></SellerReviews>
            <FrequentlyAsked></FrequentlyAsked>
            <OurTeam></OurTeam>
        </div>
    );
};

export default HomePageLayout;