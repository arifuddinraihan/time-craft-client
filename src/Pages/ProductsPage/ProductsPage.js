import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpinnerPrimary from '../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../context/UserValidation';
import useTitle from '../../Hook/useTitle';
import BookModal from './BookModal/BookModal';
import SingleProduct from './SingleProduct';

const ProductsPage = () => {
    useTitle("Products Page")
    const products = useLoaderData();
    // console.log(products)
    const url = `https://time-craft-server-side.vercel.app/productsPerCategory?name=${products?.categoryName}`;
    const { data: productsArray = [], refetch, isLoading } = useQuery({
        queryKey: ['categoryProduct', products?.categoryName],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('as12tc-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const [bookingProduct, setBookingProduct] = useState(null);
    const { user } = useContext(UserContext);

    if (isLoading) {
        return <SpinnerPrimary></SpinnerPrimary>
    }

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col text-center justify-center mx-2 md:mx-0 my-6'>
                <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6 my-6 md:my-16'>
                    {
                        productsArray.length > 0 ? "Select your desire product" : "No Product for this Category listed"
                    }
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-3'>
                    {
                        productsArray.map(product =>
                            <SingleProduct
                                key={product._id}
                                setBookingProduct={setBookingProduct}
                                user={user}
                                product={product}
                            ></SingleProduct>)
                    }
                </div>
            </div>
            {
                bookingProduct && <BookModal
                    modalData={bookingProduct}
                    isLoading={isLoading}
                    refetch={refetch}
                    user={user}
                    setBookingProduct={setBookingProduct}
                ></BookModal>
            }
        </div>
    );
};

export default ProductsPage;