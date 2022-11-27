import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import AdSection from '../AdSection/AdSection';
import CategorySection from '../CategorySection/CategorySection';
import MainBanner from '../MainBanner/MainBanner';
import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';

const HomePageLayout = () => {
    useTitle("TimeCraft Home")
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