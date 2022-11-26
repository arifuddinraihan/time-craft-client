import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import SpinnerPrimary from '../../../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../../../context/UserValidation';
import { MdCancel } from "react-icons/md";


const MyPostedProducts = () => {
    const { user } = useContext(UserContext)
    const url = `http://localhost:5000/allProducts/seller?email=${user?.email}`;
    const { data: productArray = [], refetch, isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('as12tc-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <SpinnerPrimary></SpinnerPrimary>
    }
    return (
        <div className='mx-4 md:mx-10'>
            <h2 className='my-8 text-2xl font-semibold underline underline-offset-2'>Your Posted Product list</h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Product Details</th>
                                <th>Product Used</th>
                                <th>Resale Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productArray.map((product, i) =>
                                    <tr key={product._id}>
                                        <td>
                                            {i + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={product?.productImgURL} alt={product?.productName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product?.productName}</div>
                                                    <div className="text-sm opacity-50">{product?.category}</div>
                                                    <div className="text-sm opacity-50">from: {product?.productLocation}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold">{product?.productUsedFor} years</div>
                                                <div className="text-sm opacity-50">posted: {product?.productPostTime}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold">${product?.resalePrice}</div>
                                        </td>
                                        <td><button className='btn btn-sm text-center btn-ghost text-amber-500'>Make Admin</button></td>
                                        <td><button className='btn btn-sm text-center btn-ghost text-amber-500'>< MdCancel></MdCancel></button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPostedProducts;