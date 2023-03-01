import React from "react";
import HeaderStyle from "../HeaderStyle/HeaderStyle";
import Button from '../Button/Button'
const ContactMe = () => {
  return (
    <div id="contact" className="-mt-16">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">
        <HeaderStyle headerSpan={"Get in Touch"} />
      </h1>
      <section className="max-w-4xl p-6 mx-auto bg-transparent rounded-md dark:bg-gray-800">
        <form action="https://formspree.io/f/mbjerkpp" method="POST">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <input
                id="username"
                type="text"
                placeholder="Name"
                className="block bg-transparent w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-400 focus:ring-opacity-40 dark:focus:border-cyan-400 focus:outline-none focus:ring text-xl text-white"
              />
            </div>

            <div>
            <input
                id="username"
                type="text"
                placeholder="Name"
                className="block bg-transparent w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-400 focus:ring-opacity-40 dark:focus:border-cyan-400 focus:outline-none focus:ring text-xl text-white"
              />
            </div>
          </div>
          <div className="mt-5">
            <textarea
              placeholder="Your valuable message for me....."
              className="block bg-transparent  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200  px-4 h-32 py-2.5  focus:border-cyan-400 focus:outline-none focus:ring focus:ring-cyan-400focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 text-xl text-white"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Button btn={'Send'}/>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
