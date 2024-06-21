import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';


const InsuranceResultPage = ({ result }) => {


  return (
    <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Insurance Result</title>
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

      <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <div className="pt-12">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Ihr Versicherungsrechner Ergebnis
              </h1>
              <p className="leading-normal text-2xl mb-8">
                Ihr geschätzte jährliche Prämie:<p className='font-bold' > {localStorage.getItem('finalCalculatedValue') || 0} CHF</p> 
              </p>
            </div>
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-4/5 z-50" src="hero.png" alt="Result" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceResultPage;
