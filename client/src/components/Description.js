import React from "react";
import "../styles/main.css";
function Description() {
  return (
    <div className="description">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Naruto Uzumaki
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Naruto is an orphan who has a dangerous fox-like entity known as
              Kurama the Nine-Tailed Fox sealed within his body by his father,
              the Fourth Hokage Minato Namikaze, the leader of Konoha's ninja
              force, at the cost of his own life and that of his wife, Kushina
              Uzumaki.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Join Uzumaki Clan
              </button>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images5.alphacoders.com/413/413842.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Description;
