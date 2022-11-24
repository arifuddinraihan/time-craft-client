import React from 'react';
import AdSection from '../AdSection/AdSection';
import CategorySection from '../CategorySection/CategorySection';
import MainBanner from '../MainBanner/MainBanner';
import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';

const HomePageLayout = () => {
    return (
        <div className='container mx-auto'>
            <MainBanner></MainBanner>
            <AdSection></AdSection>
            <CategorySection></CategorySection>
            <UpcomingProducts></UpcomingProducts>
        </div>
    );
};

export default HomePageLayout;