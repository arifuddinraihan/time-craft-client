import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdSection from '../AdSection/AdSection';
import CategorySection from '../CategorySection/CategorySection';
import MainBanner from '../MainBanner/MainBanner';
import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';

const HomePageLayout = () => {
    const categoryData = useLoaderData();
    console.log(categoryData)
    return (
        <div className='container mx-auto'>
            <MainBanner></MainBanner>
            <AdSection></AdSection>
            <CategorySection categoryData={categoryData}></CategorySection>
            <UpcomingProducts></UpcomingProducts>
        </div>
    );
};

export default HomePageLayout;