import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import SpinnerPrimary from '../../../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../../../context/UserValidation';

const MyPostedProducts = () => {
    const { user } = useContext(UserContext)
    const url = `http://localhost:5000/allProducts/:id=${user?.email}`;
    const { data: usersArray = [], refetch, isLoading } = useQuery({
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

    console.log(usersArray)
    if (isLoading) {
        return <SpinnerPrimary></SpinnerPrimary>
    }
    return (
        <div>
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

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPostedProducts;