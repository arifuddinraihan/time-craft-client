import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = ({ categoryData }) => {

    return (
        <div className='flex flex-col text-center justify-center mx-2 md:mx-0'>
            <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6'>
                Your desire category!</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    categoryData.map(category =>
                        < >
                            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto" key={category._id}>
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
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default CategorySection;