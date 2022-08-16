import React from "react";
import Header from "../components/header/Header";
import SectNine from "../components/sect-9/SectNine";
import Footer from "../components/footer/Footer";
function Contact() {
  return (
    <>
      <body>
        <Header />

        <main>
          <div className="">
            <h1 className="font-bold text-5xl text-center p-40">
              Get in Touch
            </h1>
            <hr className=" stroke-black w-36" />
          </div>
          <section class="text-gray-600 body-font">
            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
              <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Opening Hours
                </h1>
                <p class="leading-relaxed text-base">
                  Mon - Fri: 8am - 8pm
                  <br /> Saturday: 9am - 7pm
                  <br /> Sunday: 9am - 8pm
                </p>
              </div>
              <div class="flex flex-col md:w-1/2 md:pl-12">
                <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
                  We're here to help!{" "}
                </h2>
                <nav class="flex flex-wrap list-none -mb-1">
                  <p>
                    Fill out the form with any query on your mind and we'll get
                    back to you as soon as possible
                  </p>
                </nav>
              </div>
            </div>

            <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
              <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Opening Hours
                </h1>
                <p class="leading-relaxed text-base">
                  Mon - Fri: 8am - 8pm
                  <br /> Saturday: 9am - 7pm
                  <br /> Sunday: 9am - 8pm
                </p>
              </div>
              <div class="flex flex-col md:w-1/2 md:pl-12">
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
                          Subject
                        </label>
                        <input
                          type="text"
                          id="note"
                          name="note"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>

                    <div className="p-2 w-1/2">
                      <div class=" mb-4">
                        <label
                          for="message"
                          class="leading-7 text-sm text-gray-600"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                      </div>

                      <div className="p-2 w-full text-center">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center">
                          SUbmit
                        </button>
                      </div>
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
export default Contact;
