import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../components/ConfirmarionModal/ConfirmationModal';
import SpinnerPrimary from '../../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../../context/UserValidation';
import useTitle from '../../../Hook/useTitle';
import { MdCancel } from "react-icons/md";

const MyOrders = () => {
    useTitle("My Orders")
    const [deletingBookedProduct, setDeletingBookedProduct] = useState(null);

    const closeModal = () => {
        setDeletingBookedProduct(null);
    }
    const { user } = useContext(UserContext)
    const url = `http://localhost:5000/bookedProducts?email=${user?.email}`;
    const { data: productsArray = [], refetch, isLoading } = useQuery({
        queryKey: ['bookedProducts', user?.email],
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

    const handleDeleteOrder = modalData => {
        console.log(modalData?._id)
        fetch(`http://localhost:5000/bookedProducts/${modalData?._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('as12tc-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${modalData?.productName} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <SpinnerPrimary></SpinnerPrimary>
    }
    return (
        <div>
            <h2 className='my-8 text-2xl font-semibold underline underline-offset-2'>
                {productsArray.length > 0 ? `Total ${productsArray.length} product in your list` : "No product booked yet!"}
            </h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Product Information</th>
                                <th>Seller Email</th>
                                <th>Pay Now</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productsArray.map((product, i) =>
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
                                                    <div className="text-sm opacity-50">Seller : {product?.sellerName}</div>
                                                    <div className="text-sm opacity-50">Email : {product?.sellerEmail}</div>
                                                    <div className="text-sm opacity-50">Location : {product?.clientLocation}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>${product?.productPrice}.00</td>
                                        <td>
                                            {
                                                product?.sold === "no" ?
                                                    <>
                                                        <button
                                                            className='btn btn-sm text-center btn-primary'>Pay Now
                                                        </button>
                                                    </>
                                                    :
                                                    <>
                                                        <span
                                                            className='btn btn-sm text-center btn-disabled'>Sold
                                                        </span>
                                                    </>
                                            }
                                        </td>
                                        <td>
                                            <label onClick={() => setDeletingBookedProduct(product)} htmlFor="confirmation-modal" className="btn">< MdCancel></MdCancel></label>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                deletingBookedProduct && <ConfirmationModal
                    title={`Are you sure you want to remove?`}
                    message={`If you delete ${deletingBookedProduct?.productName}. It cannot be undone.`}
                    successAction={handleDeleteOrder}
                    successButtonName="remove"
                    modalData={deletingBookedProduct}
                    closeModal={closeModal}

                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;