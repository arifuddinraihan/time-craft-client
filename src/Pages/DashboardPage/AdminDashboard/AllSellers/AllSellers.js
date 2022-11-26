import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import SpinnerPrimary from '../../../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../../../context/UserValidation';
import toast from 'react-hot-toast';
import { MdCancel } from "react-icons/md";


const AllSellers = () => {
    const { user } = useContext(UserContext)
    const url = `http://localhost:5000/users/sellers?email=${user?.email}`;
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

    // const handleMakeAdmin = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('as12tc-token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Make admin successful.')
    //                 refetch();
    //             }
    //         })
    // }

    if (isLoading) {
        return <SpinnerPrimary></SpinnerPrimary>
    }
    return (
        <div>
            <h2 className='my-8 text-2xl font-semibold underline underline-offset-2'>All Sellers list</h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>User Information</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersArray.map((user, i) =>
                                    <tr key={user._id}>
                                        <td>
                                            {i + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user?.imageURL} alt={user?.name} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user?.name}</div>
                                                    <div className="text-sm opacity-50">{user?.contact}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user?.role}
                                        </td>
                                        <td>{user?.email}</td>
                                        <td><button className='btn btn-sm text-center btn-ghost text-amber-500'>Verify Seller</button></td>
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

export default AllSellers;