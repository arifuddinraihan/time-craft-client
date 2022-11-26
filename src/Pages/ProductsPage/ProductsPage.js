import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserContext } from '../../context/UserValidation';
import BookModal from './BookModal/BookModal';
import SingleProduct from './SingleProduct';

const ProductsPage = () => {
    const products = useLoaderData();
    const { user } = useContext(UserContext);
    // console.log(products)
    const [bookingProduct, setBookingProduct] = useState(null);

    const closeModal = () => {
        setBookingProduct(null);
    }
    const handleBookingModal = product => {
        setBookingProduct(product)
    }

    const submitBookingData = data => {
        const bookedProduct = {
            clientName: user?.displayName,
            clientEmail: user?.email,
            clientContact: data?.customerContact,
            clientLocation: data?.customerLocation,
            sellerName,
            sellerEmail,
            productCategory: category,
            product_Id: _id,
            productName: productName,
            productLocation,
            productImgURL: productImgURL,
            productPrice: resalePrice,
            sold: "no",
            status: "booked",
        }
        console.log("from submit booking data")
    }

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col text-center justify-center mx-2 md:mx-0 my-6'>
                <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6'>
                    Select your desire product</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-3'>
                    {
                        products.map(product =>
                            <SingleProduct
                                key={product._id}
                                product={product}
                                handleBookingModal={handleBookingModal}
                            ></SingleProduct>)
                    }
                </div>
            </div>
            {
                bookingProduct && <BookModal
                    modalData={bookingProduct}
                    closeModal={closeModal}
                    submitBookingData={submitBookingData}
                ></BookModal>
            }
        </div>
    );
};

export default ProductsPage;