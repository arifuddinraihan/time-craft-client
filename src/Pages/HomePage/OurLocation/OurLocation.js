import React from "react";

const OurLocation = () => {
  return (
    <section className="bg-base-100 mb-8">
      <div className="container px-6 py-12 mx-auto">
        <div className="">
          <p className="font-medium text-yellow-500 dark:text-blue-400">
            Contact us
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-yellow-300 md:text-3xl">
            Get in touch
          </h1>
          <div className="flex justify-start mx-auto mt-2">
            <span className="inline-block w-32 h-1 bg-amber-300 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-amber-200 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-amber-100 rounded-full"></span>
          </div>

          <p className="mt-3">Our friendly team would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-black rounded-full bg-yellow-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-yellow-300 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-sm ">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm text-yellow-200">mdarifuddinraihan@gmail.com</p>
            </div>

            <div>
              <span className="inline-block p-3 text-black rounded-full bg-yellow-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-yellow-300 dark:text-white">
                Office
              </h2>
              <p className="mt-2 text-sm ">Come say hello at our office HQ.</p>
              <p className="mt-2 text-sm text-yellow-200">
              27 Avoy, Abhay Das Ln, Dhaka 1203
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-black rounded-full bg-yellow-200 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-medium text-yellow-300 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-sm ">Mon-Fri from 10am to 8pm.</p>
              <p className="mt-2 text-sm text-yellow-200">+88 (016) 218-41412</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              title="time-craft-demo-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14611.107524864767!2d90.423779!3d23.7196605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b852746ca8ab%3A0xe75ed08e633bfce8!2sTime%20Craft!5e0!3m2!1sen!2sbd!4v1686298078604!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
