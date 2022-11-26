import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { UserContext } from '../../../context/UserValidation';

const BookModal = ({ closeModal, modalData, submitBookingData }) => {
    const [newProductBooked , setNewProductBooked] = useState(null)
    const { _id, productImgURL, category, productName, productLocation, resalePrice, sellerName, sellerEmail } = modalData;

    const { user } = useContext(UserContext);
    const productBookingData = data => {
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
        console.log("from submit booking data", bookedProduct)
        toast.success("Product is booked!")
        setNewProductBooked(bookedProduct)
        reset()
    }

    return (
        <div>
            <input type="checkbox" id="product-book-modal" className="modal-toggle" />
            <div className="modal">
                <form className="modal-box">
                    <h3 className="font-bold text-lg text-center">Please share details for booking <br /> {productName}</h3>
                    <p className="py-4 text-center">Your booking information</p>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full"
                            disabled defaultValue={user?.displayName} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full"
                            disabled defaultValue={user?.email} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full"
                            disabled defaultValue={productName} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product price</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full"
                            disabled defaultValue={resalePrice} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Contact Number</span>
                        </label>
                        <input type="text" {...register("customerContact", { required: "You Contact number is required." })}
                            placeholder="Type here" className="input input-bordered w-full" />
                        {errors.customerContact && <p className='text-error my-2'>{errors.customerContact.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Location</span>
                        </label>
                        <input type="text" {...register("customerLocation", { required: "You Location is required." })}
                            placeholder="Your Location" className="input input-bordered w-full" />
                        {errors.customerLocation && <p className='text-error my-2'>{errors.customerLocation.message}</p>}
                    </div>
                    <div className="modal-action">
                        <label onClick={() => submitBookingData(newProductBooked)}
                            htmlFor="product-book-modal" className="btn btn-outline">
                            BOOK PRODUCT
                        </label>
                        <button onClick={closeModal} className='btn btn-ghost'>cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookModal;