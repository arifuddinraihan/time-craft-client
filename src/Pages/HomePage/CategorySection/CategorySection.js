import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SpinnerPrimary from '../../../components/Spinner/SpinnerPrimary';
import CategoryCard from './CategoryCard';

const CategorySection = () => {
    const url = 'https://time-craft-server-side.vercel.app/productsCategory'
    const { data: categoryArray = [], isLoading } = useQuery({
        queryKey: ['productsCategory'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    "content-type" : "application/json"
                }
            });
            const data = await res.json();
            return data;
        }
    })
    // console.log(categoryArray)

    if(isLoading){
        return <SpinnerPrimary></SpinnerPrimary>
    }
    
    return (
        <div className='flex flex-col text-center justify-center mx-2 md:mx-0'>
            <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6 lg:py-20'>
                Your desire category!</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    categoryArray.map(category =>
                        <CategoryCard key={category._id} category={category}></CategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default CategorySection;