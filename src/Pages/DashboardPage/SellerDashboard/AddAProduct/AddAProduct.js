import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../context/UserValidation';
import moment from 'moment/moment';
import toast from 'react-hot-toast';
import useTitle from '../../../../Hook/useTitle';
import { useNavigate } from 'react-router-dom';

const AddAProduct = () => {
    useTitle("Add your product")
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const myProductRoute = '/dashboard/seller/MyProducts'
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // moment.js current time
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const productImgURL = imageData.data.url;
                    const category = data?.category;
                    const productName = data?.name;
                    const productLocation = data?.location;
                    const resalePrice = data?.resalePrice;
                    const originalPrice = data?.originalPrice;
                    const productUsedFor = data?.usedTime;
                    const productPostTime = currentTime;
                    const sellerName = user?.displayName;
                    const sellerEmail = user?.email;
                    const productCondition = data?.condition;
                    const sellerContact = data?.phone;
                    const productDetails = data?.productDetails

                    const newPostedProduct = {
                        productImgURL,
                        category,
                        productName,
                        productLocation,
                        resalePrice,
                        originalPrice,
                        productUsedFor,
                        productPostTime,
                        sellerName,
                        sellerEmail,
                        productCondition,
                        sellerContact,
                        productDetails,
                        status: "available",
                        paid: false
                    }
                    fetch('https://time-craft-server-side.vercel.app/allProducts', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem('as12tc-token')}`
                        },
                        body: JSON.stringify(newPostedProduct)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            reset()
                            toast.success('Product posted Successfully')
                            navigate(myProductRoute)
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))


    }
    return (
        <div className=''>
            <div className="w-full pt-8 flex items-center justify-center" >
                <div className="bg-base-100 py-2 px-10 sm:max-w-md w-full">
                    <div className="text-2xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary">
                        Add Product Here
                    </div>
                    <form onSubmit={handleSubmit(handleAddProduct)} >
                        <div className='mt-4'>
                            <label>Upload a product photo*</label>
                            <input type="file" {...register("image", { required: "Product photo is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2" />
                            {errors.image && <p className='text-error my-2'>{errors.image.message}</p>}
                        </div>
                        <div className='my-2'>
                            <label>Product Category*</label>
                            <select {...register("category", { required: "Product Category is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"
                                required
                            >
                                <option selected value="Classic Watch">Classic Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Vintage Watch">Vintage Watch</option>
                            </select>
                        </div>
                        <div className='my-2'>
                            <label>Name of product*</label>
                            <input type="text" {...register("name", { required: "Product Name is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"

                            />
                            {errors.name && <p className='text-error my-2'>{errors.name.message}</p>}
                        </div>
                        <div className='my-2'>
                            <label>Product Condition*</label>
                            <select type="text" {...register("condition", { required: "Product Condition is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"
                            >
                                <option selected value="Classic Watch">Excellent</option>
                                <option value="Smart Watch">Good</option>
                                <option value="Vintage Watch">Fair</option>
                            </select>
                            {errors.condition && <p className='text-error my-2'>{errors.condition.message}</p>}
                        </div>
                        <div className='my-2'>
                            <label>Location of product*</label>
                            <input type="text" {...register("location", { required: "Product Location is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"

                            />
                            {errors.location && <p className='text-error my-2'>{errors.location.message}</p>}
                        </div>
                        <div className='my-2'>
                            <label>Your Contact Number*</label>
                            <input type="text" {...register("phone", { required: "Your Contact Number is required." })}
                                className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"

                            />
                            {errors.phone && <p className='text-error my-2'>{errors.phone.message}</p>}
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='my-2'>
                                <label className='font-extrabold'>Resale Price*</label>
                                <input type="number" {...register("resalePrice", { required: "Resale price is required." })}
                                    className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"

                                />
                                {errors.resalePrice && <p className='text-error my-2'>{errors.resalePrice.message}</p>}
                            </div>
                            <div className='my-2'>
                                <label>Original Price*</label>
                                <input type="number" {...register("originalPrice", { required: "Original price required." })}
                                    className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"

                                />
                                {errors.originalPrice && <p className='text-error my-2'>{errors.originalPrice.message}</p>}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='my-2'>
                                <label>Year of use*</label>
                                <input type="number" {...register("usedTime", { required: "Year of use is required." })}
                                    className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"

                                />
                                {errors.usedTime && <p className='text-error my-2'>{errors.usedTime.message}</p>}
                            </div>
                            <div className='my-2'>
                                <label>Year of purchase</label>
                                <input type="number" {...register("purchaseYear", { required: "Purchase Year is required" })}
                                    className="focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"
                                />
                                {errors.purchaseYear && <p className='text-error my-2'>{errors.purchaseYear.message}</p>}
                            </div>
                        </div>
                        <div className='my-2'>
                            <label>Product details*</label>
                            <input type="textarea" {...register("productDetails")}
                                className="textarea textarea-warning focus:outline-none border w-full p-2 border-amber-500 placeholder-orange-200 mt-2"
                                placeholder='Description of the product'
                            />
                            {errors.productDetails && <p className='text-error my-2'>{errors.productDetails.message}</p>}
                        </div>
                        <div className="flex justify-center my-4">
                            <input className="btn btn-outline rounded-full w-full sm:w-56 text-lg font-semibold "
                                type="submit" value="POST YOUR PRODUCT"
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddAProduct;