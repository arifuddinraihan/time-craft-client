import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const ProductsPage = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col text-center justify-center mx-2 md:mx-0 my-6'>
                <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6'>
                    Select your desire product</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;