import React from "react";
import ReactPlayer from "react-player/youtube";

const ProductVideos = () => {

  return (
    <div className="max-w-screen-xl py-16 p-5 mx-auto bg-base-100">
      <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl">
        Explore our best Brands
      </h1>

      <div className="flex justify-center mx-auto mt-6 mb-10">
        <span className="inline-block w-48 h-1 bg-amber-300 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-amber-100 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=OE0E8BmrvnI"}
            controls
            className="w-auto h-96"
          />
        </div>
        <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=uzhXqkzY2gE"}
            controls
            className="w-auto h-96"
          />
        </div>
        <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=9MUVduF9q3I"}
            controls
            className="w-auto h-96"
          />
        </div>
        <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=UfawgQJICU8"}
            controls
            className="w-auto h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductVideos;
