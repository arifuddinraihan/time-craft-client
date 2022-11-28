import React from 'react';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
  useTitle("Blog Page")
    return (
        <div className='container mx-auto'>
          <h2>This is Blog Page</h2>  
        </div>
    );
};

export default Blog;