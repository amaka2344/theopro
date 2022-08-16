import React from "react";
import Header from "../components/header/Header";
import img1 from "../assets/img/fitness-watch.png";
import SectNine from "../components/sect-9/SectNine";
import Footer from "../components/footer/Footer";

function About() {
  return (
    <>
      <body>
        <Header />

        <main>
          <div className="">
            <h1 className="uppercase font-bold text-5xl text-center p-40">
              about techshed
            </h1>
            <hr className=" stroke-black w-36" />
          </div>
          <section className="text-black body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className="mb-8 leading-relaxed text-center">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I'm a great
                  place for you to tell a story and let your users know a little
                  more about you. This is a great space to write a long text
                  about your company and your services. You can use this space
                  to go into a little more detail about your company. Talk about
                  your team and what services you provide. Tell your visitors
                  the story of how you came up with the idea for your business
                  and what makes you different from your competitors. Make your
                  company stand out and show your visitors who you are.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={img1}
                  style={{ width: 600, height: 600 }}
                />
              </div>
            </div>
          </section>
          <hr />

          <section className="text-gray-600 body-font ">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Career
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Check out our job postings and opportunities waiting for you
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="">
                      <label
                        for="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="">
                      <label
                        for="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last name"
                        name="last name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="">
                      <label
                        for="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="">
                      <label
                        for="phone"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="tel"
                        name="tel"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="">
                      <label
                        for="phone"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Position you apply for*
                      </label>
                      <select
                        name="position"
                        id="position "
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      >
                        <option value="op1">select option</option>
                        <option value="op2">in-store sales</option>
                        <option value="op3">store leadership</option>
                        <option value="op4">in-store operations</option>
                        <option value="op5">warehouse and logistics</option>
                        <option value="op6">ecommerce</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="">
                      <label
                        for="date"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Available start date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="">
                      <label
                        for="url"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Link to resume
                      </label>
                      <input
                        type="url"
                        id="url"
                        name="url"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>

                    <div className="p-2 w-full text-center">
                      <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SectNine />
        </main>
        <Footer />
      </body>
    </>
  );
}
export default About;
