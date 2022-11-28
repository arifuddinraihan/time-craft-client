import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SpinnerPrimary from '../../../components/Spinner/SpinnerPrimary';
import { UserContext } from '../../../context/UserValidation';
import useBuyer from '../../../Hook/useBuyer';

const CategoryCard = ({ category }) => {
    const { user, loader } = useContext(UserContext)
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)

    if (loader || isBuyerLoading) {
        return <SpinnerPrimary></SpinnerPrimary>
    }

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-yellow-200 bg-center bg-cover rounded-lg shadow-md"
                style={{
                    backgroundImage:
                        `url(${category.imageURL})`,
                }}>

            </div>

            <div className="w-56 -mt-10 overflow-hidden bg-yellow-200 rounded-lg shadow-lg md:w-64">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">{category?.categoryName}</h3>

                <div className="flex items-center justify-center px-3 py-2 bg-yellow-100">
                    <Link to={`/category/products/${category?.categoryName}`}>
                        <button className="btn btn-sm text-xs font-semibold text-warning uppercase transition-colors duration-300 transform bg-base-100 rounded">See All Products</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;