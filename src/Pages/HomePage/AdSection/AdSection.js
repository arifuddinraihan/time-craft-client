import React from 'react';
import ImageGallery from 'react-image-gallery';
const AdSection = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (
        <div className='flex flex-col text-center justify-center mx-2 md:mx-0'>
            <h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warning to-primary py-6'>
                Product you may like</h2>
            <div>
                <ImageGallery items={images} showIndex={true}></ImageGallery>
            </div>
        </div>
    );
};

export default AdSection;