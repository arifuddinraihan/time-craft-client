import React, { useContext } from 'react';
import { useQuery, } from '@tanstack/react-query'
import SpinnerPrimary from '../../../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../../../context/UserValidation';
import AllBuyersRow from './AllBuyersRow';

const AllBuyers = () => {
    const { user } = useContext(UserContext)
    const url = `http://localhost:5000/users?email=${user?.email}`;
    const { data: usersArray = [], refetch, isLoading } = useQuery({
        queryKey: ['users' , user?.email],
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
            <h2 className='my-8 text-2xl font-semibold underline underline-offset-2'>All Buyers list</h2>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>User Information</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersArray.map((user, i) => <AllBuyersRow key={user._id} index={i} user={user}></AllBuyersRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;