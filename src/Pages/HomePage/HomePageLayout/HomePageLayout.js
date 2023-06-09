import React from 'react';

import useTitle from '../../../Hook/useTitle';
import AdSection from '../AdSection/AdSection';
import CategorySection from '../CategorySection/CategorySection';
import MainBanner from '../MainBanner/MainBanner';
import BuyerReviews from '../UpcomingProducts/UpcomingProducts';
import AppDownload from '../AppDownload/AppDownload';
import OurTeam from '../OurTeam/OurTeam';
import SellerReviews from '../SellerReviews/SellerReviews';
import FrequentlyAsked from '../FrequentlyAsked/FrequentlyAsked';
import OurLocation from '../OurLocation/OurLocation';
import ContactUsForm from '../ContactUsForm/ContactUsForm';
import AboutUs from '../AboutUs/AboutUs';
import ProductVideos from '../ProductVideo/ProductVideos';

const HomePageLayout = () => {
    useTitle("TimeCraft Home")
    return (
        <div className='container mx-auto'>
            <MainBanner></MainBanner>
            <AboutUs></AboutUs>
            <CategorySection></CategorySection>
            <BuyerReviews></BuyerReviews>
            <AdSection></AdSection>
            <AppDownload></AppDownload>
            <SellerReviews></SellerReviews>
            <ProductVideos></ProductVideos>
            <FrequentlyAsked></FrequentlyAsked>
            <OurTeam></OurTeam>
            <OurLocation></OurLocation>
            <ContactUsForm></ContactUsForm>
        </div>
    );
};

export default HomePageLayout;