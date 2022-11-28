import React from 'react';

const BlogCard = ({ blog }) => {
    const { question, imgURL, answer } = blog
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={imgURL} alt="blogs" /></figure>
            <div className="card-body">
                <h2 className="card-title">{question}</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default BlogCard;