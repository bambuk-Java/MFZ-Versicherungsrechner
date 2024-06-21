import React from "react";

const Contact = () => {
    return(
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Kontaktiere Uns</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Haben Sie ein technisches Problem? Möchten Sie Feedback zu einer Beta-Funktion geben? Benötigen Sie Details zu unserem Business-Plan? Lassen Sie es uns wissen.</p>
            <form action="/" method="POST" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Ihre E-Mail</label>
                    <input type="email" id="email" name="email" className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-0 focus:border-gray-300 block w-full p-2.5" placeholder="name@LANDINGS.ch" required/>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Betreff</label>
                    <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-0 focus:border-gray-300" placeholder="Lassen Sie uns wissen, wie wir Ihnen helfen können" required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Ihre Nachricht</label>
                    <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:border-gray-300" placeholder="Hinterlassen Sie einen Kommentar..."></textarea>
                </div>
                <button type="submit" className="py-12 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-0 focus:outline-none">Nachricht senden</button>
            </form>
        </div>
    )
}

export default Contact;
