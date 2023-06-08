import React from "react";

const OurTeam = () => {
  return (
    <section className="lg:my-10 mx-auto bg-base-100">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-2xl font-semibold text-center capitalize">
          Our Team
        </h2>
        <div className="flex justify-center mx-auto mt-2">
          <span className="inline-block w-16 h-1 bg-amber-300 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-amber-100 rounded-full"></span>
        </div>

        <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium">
                Ahmed Omer
              </h3>
              <span className="mt-1 font-medium">
                CEO
              </span>
            </div>
          </div>

          <div className="w-full max-w-auto text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium">
                Jane Doe
              </h3>
              <span className="mt-1 font-medium">
                Co-founder
              </span>
            </div>
          </div>

          <div className="w-full text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium">
                Steve Ben
              </h3>
              <span className="mt-1 font-medium">
                UI/UX
              </span>
            </div>
          </div>

          <div className="w-full text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium">
                Patterson Johnson
              </h3>
              <span className="mt-1 font-medium">
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
