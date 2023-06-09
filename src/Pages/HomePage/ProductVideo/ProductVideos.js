import React from "react";

const ProductVideos = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://source.unsplash.com/random/243x320")',
  };

  return (
    <div className="max-w-screen-xl py-16 p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl">
        Explore our best Brands
      </h1>

      <div className="flex justify-center mx-auto mt-6 mb-10">
        <span className="inline-block w-48 h-1 bg-amber-300 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-amber-100 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={backgroundImageStyle}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Politics
            </a>
            <div className="flex flex-col justify-start text-center dark:text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                04
              </span>
              <span className="leading-none uppercase">Aug</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md hover:underline dark:text-gray-100"
            >
              {" "}
              Autem sunt tempora mollitia magnam non voluptates
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={backgroundImageStyle}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Health
            </a>
            <div className="flex flex-col justify-start text-center dark:text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                01
              </span>
              <span className="leading-none uppercase">Aug</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md hover:underline dark:text-gray-100"
            >
              Inventore reiciendis aliquam excepturi
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={backgroundImageStyle}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Science
            </a>
            <div className="flex flex-col justify-start text-center dark:text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                28
              </span>
              <span className="leading-none uppercase">Jul</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md hover:underline dark:text-gray-100"
            >
              Officiis mollitia dignissimos commodi optio vero animi
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={backgroundImageStyle}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Sports
            </a>
            <div className="flex flex-col justify-start text-center dark:text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                19
              </span>
              <span className="leading-none uppercase">Jul</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md hover:underline dark:text-gray-100"
            >
              Doloribus sit illo necessitatibus architecto exercitationem enim
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductVideos;
