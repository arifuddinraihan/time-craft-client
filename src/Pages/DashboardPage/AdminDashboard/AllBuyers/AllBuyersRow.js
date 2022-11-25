import React from 'react';

const AllBuyersRow = ({ user, index }) => {
    const { name, email, imageURL, role, contact } = user
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imageURL} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{contact}</div>
                    </div>
                </div>
            </td>
            <td>
                {role}
            </td>
            <td>{email}</td>
            <td></td>
        </tr>
    );
};

export default AllBuyersRow;