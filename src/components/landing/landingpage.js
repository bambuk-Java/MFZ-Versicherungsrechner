import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate  = useNavigate();
  const handleButtonClick = () => {
    console.log("Button clicked");
    navigate('/aboutcar');
    
  };

  return (
    <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
     
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>
          Landings Insurance
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
        <style>
          {`.gradient {
            background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
          }`}
        </style>
      </Helmet>

      {/* Body section */}
      <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>


        {/* Hero section */}
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* Left Col */}
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Ihre Versicherung, unsere Priorität
              </h1>
              <p className="leading-normal text-2xl mb-8">
                Rechnen sie jetzt ihre Versicherungskosten aus!
              </p>
              <button
               onClick={
                  handleButtonClick
               } 
               className="z-10 mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
               >
                zum Fragebogen
              </button>
            </div>
            {/* Right Col */}
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-4/5 z-50" src="hero.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
