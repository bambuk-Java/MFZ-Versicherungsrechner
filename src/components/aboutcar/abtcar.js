import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCarInfo from './useCarInfo';
import { formatNumberInput } from '../scripts/apostrophe'; // Importiere die Funktion

const Abtcar = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    brandInputRef,
    valueInputRef,
    placingInputRef,
    dateInputRef,
    extraValRef,
    zuhauseRef,
    arbeitsplatzRef,
    beideRef,
    keineRef,
    privatRef,
    arbeitswegRef,
    geschaeftlichRef,
    leasedRef,
    notLeasedRef,
    models,
    handleModelClick,
    handleSearchModels,
    handleValueChange,
    handleExtraValChange,
    isFormValid,
    selectedModel,
    handleRadioChange
  } = useCarInfo();

  const handleFormattedValueChange = (event) => {
    const value = event.target.value;
    const formattedValue = formatNumberInput(value);
    event.target.value = formattedValue;
    handleValueChange(event); // Originaler Wertänderungs-Handler
  };

  const handleFormattedExtraValChange = (event) => {
    const value = event.target.value;
    const formattedValue = formatNumberInput(value);
    event.target.value = formattedValue;
    handleExtraValChange(event); // Originaler Wertänderungs-Handler
  };

  const handleClick = () => {
    if (isFormValid) {
      navigate('/aboutperson');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <br />
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              ref={brandInputRef}
              className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
              placeholder=" "
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
            >
              Marke
            </label>
          </div>
        </div>
        <br />
        <div id="models" className="flex flex-wrap justify-center space-x-2 space-y-2">
          {models.map((model) => (
            <button
              type="button"
              className="model_buttons mx-2 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 py-2 px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={handleModelClick}
              key={model.model_name}
            >
              {model.model_name}
            </button>
          ))}
        </div>
        <h3 id="model" className="text-center">{selectedModel}</h3>
        <button type="button" onClick={handleSearchModels} className="block mx-auto">
          Search models
        </button>
        <br />
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              ref={valueInputRef}
              onChange={handleFormattedValueChange}
              className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
              placeholder=" "
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
            >
              Wert ihres Autos
            </label>
          </div>
        </div>
        <br />
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              ref={placingInputRef}
              name="placing"
              pattern="^(0[1-9]|1[0-2])\.(\d{4})$"
              className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
              placeholder=" "
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
            >
              Inverkehrssetzung (MM.YYYY)
            </label>
          </div>
        </div>
        <br />
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              ref={dateInputRef}
              name="date"
              pattern="^(0[1-9]|1[0-2])\.(\d{4})$"
              className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
              placeholder=" "
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
            >
              Kaufjahr (MM.YYYY)
            </label>
          </div>
        </div>
        <br />
        <div className="flex flex-col gap-4">
          <label className="font-light text-white">Geleast?</label>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="leased" data-ripple-dark="true">
              <input
                name="leased"
                type="radio"
                id="leased"
                ref={leasedRef}
                value="leased"
                onChange={handleRadioChange}
                className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
              />
              <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
            </label>
            <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="leased">
              Ja
            </label>
          </div>
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="notleased" data-ripple-dark="true">
              <input
                name="leased"
                type="radio"
                id="notleased"
                ref={notLeasedRef}
                value="notleased"
                onChange={handleRadioChange}
                className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
              />
              <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
            </label>
            <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="notleased">
              Nein
            </label>
          </div>
        </div>
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              ref={extraValRef}
              onChange={handleFormattedExtraValChange}
              className="peer w-full h-full bg-transparent text-white-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
              placeholder=" "
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
            >
              Wert der Sonderausstattung
            </label>
          </div>
        </div>
        <br />
        <h3 className="text-center">Wie nutzen Sie Ihr Auto?</h3>
        <div className="inline-flex items-center">
          <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="ripple-on-privat" data-ripple-dark="true">
            <input
              id="ripple-on-privat"
              type="checkbox"
              ref={privatRef}
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-[linear-gradient(90deg,#d53369_0%,#daae51_100%)] checked:before:bg-[linear-gradient(90deg,#d53369_0%,#daae51_100%)] hover:before:opacity-10"
            />
            <span
              className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 0 01-1.414 0l-4-4a1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="ripple-on-privat">
            Privat
          </label>
        </div>
        <div className="inline-flex items-center">
          <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="ripple-on-arbeitsweg" data-ripple-dark="true">
            <input
              id="ripple-on-arbeitsweg"
              type="checkbox"
              ref={arbeitswegRef}
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-[linear-gradient(90deg,#d53369_0%,#daae51_100%)] checked:before:bg-[linear-gradient(90deg,#d53369_0%,#daae51_100%)] hover:before:opacity-10"
            />
            <span
              className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 0 01-1.414 0l-4-4a1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="ripple-on-arbeitsweg">
            Arbeitsweg
          </label>
        </div>
        <div className="inline-flex items-center">
          <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="ripple-on-geschaeftlich" data-ripple-dark="true">
            <input
              id="ripple-on-geschaeftlich"
              type="checkbox"
              ref={geschaeftlichRef}
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-[linear-gradient(90deg,#d53369_0%,#daae51_100%)] checked:before:bg-[linear-gradient(90deg,#d53369_0%,#daae51_100%)] hover:before:opacity-10"
            />
            <span
              className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 0 01-1.414 0l-4-4a1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="ripple-on-geschaeftlich">
            Geschäftlich
          </label>
        </div>
        <br />
        <div className="flex flex-col gap-4">
          <label className="font-light text-white">Garage vorhanden?</label>
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="zuhause" data-ripple-dark="true">
                <input
                  name="garage"
                  type="radio"
                  id="zuhause"
                  value="home"
                  ref={zuhauseRef}
                  onChange={handleRadioChange}
                  className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                />
                <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
              </label>
              <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="zuhause">
                Ja, zu Hause
              </label>
            </div>
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="arbeitsplatz" data-ripple-dark="true">
                <input
                  name="garage"
                  type="radio"
                  id="arbeitsplatz"
                  value="workplace"
                  ref={arbeitsplatzRef}
                  onChange={handleRadioChange}
                  className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                />
                <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
              </label>
              <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="arbeitsplatz">
                Ja, beim Arbeitsplatz
              </label>
            </div>
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="beide" data-ripple-dark="true">
                <input
                  name="garage"
                  type="radio"
                  id="beide"
                  value="both"
                  ref={beideRef}
                  onChange={handleRadioChange}
                  className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                />
                <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
              </label>
              <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="beide">
                Ja, zu Hause und beim Arbeitsplatz
              </label>
            </div>
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="keine" data-ripple-dark="true">
                <input
                  name="garage"
                  type="radio"
                  id="keine"
                  value="none"
                  ref={keineRef}
                  onChange={handleRadioChange}
                  className="peer appearance-none h-5 w-5 rounded-full border border-blue-gray-200 text-gray-900 transition-all checked:border-gray-900 checked:bg-gradient-to-r checked:from-[#d53369] checked:to-[#daae51]"
                />
                <span className="absolute top-2/4 left-2/4 h-12 w-12 -translate-y-2/4 -translate-x-2/4 rounded-full bg-blue-gray-500 opacity-0 transition-opacity peer-hover:opacity-10"></span>
              </label>
              <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="keine">
                Nein, keine Garage vorhanden
              </label>
            </div>
          </div>
        </div>
        <br />
        <button className={`pb-64 z-10 ${!isFormValid ? 'cursor-not-allowed opacity-50' : ''}`} onClick={handleClick} disabled={!isFormValid}>
          Weiter
        </button>
      </form>
    </div>
  );
};

export default Abtcar;

