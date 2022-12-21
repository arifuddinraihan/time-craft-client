import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/useTitle';
import axios from 'axios';
import BlogCard from './BlogCard';
import SpinnerPrimary from '../../components/Spinner/SpinnerPrimary'

const Blog = () => {
  useTitle("Blog Page")
  const [blogsArray, setBlogsArray] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('https://time-craft-server-side.vercel.app/blog')
      .then(function (response) {
        const blogs = response.data
        // console.log(blogs);
        setBlogsArray(blogs);
        setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function (response) {

      });
  }, [])
  if (loading) {
    return <SpinnerPrimary />
  }

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center mx-2 md:mx-0 my-6 min-h-screen'>
        <h2 className='text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6 my-6 md:mt-8'>
          Blog Page
        </h2>
        <div className='grid grid-cols-1 justify-items-center mx-3'>
          {
            blogsArray.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Blog;