import React from 'react';
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const { contacts = [], getContactId, updateHandler, term, searchKeyWord } = props;

    if (!contacts.length) {
        return (
            <div className="m-8 flex flex-col gap-7">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl ml-4 font-200 font-bold">Contact List</h2>
                    <Link to="/add">
                        <button className="py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200 tracking-wider w-40">
                            Add Contact
                        </button>
                    </Link>
                </div>
                <div className="flex mt-4">
                    <div id="searchContainer" className="border-2 focus:border-blue-400 h-12 w-full border-gray-300 rounded-lg flex items-center">
                        <i className="bi bi-search text-xl ml-3"></i>
                        <input
                            type="text"
                            className="w-full h-10 pl-2 bg-transparent border-0 outline-0 pl-4 text-indigo-950"
                            placeholder="Search your Contacts"
                            value={term}
                            onChange={(e) => searchKeyWord(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 divide-y divide-slate-200 mt-4">
                    <p>No contacts available.</p>
                </div>
            </div>
        );
    }

    const renderContactList = contacts.map((contact) => (
        <ContactCard
            key={contact.id}
            contacts={contact}
            clickHandler={getContactId}
            updateHandler={() => updateHandler(contact)}
        />
    ));

    return (
        <div className="m-8 flex flex-col gap-7">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl  font-200 font-bold">Contact List</h2>
                <Link to="/add">
                    <button className="py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-200 tracking-wide text-xl w-48">
                        Add Contact
                    </button>
                </Link>
            </div>

            <div className="w-full flex mt-4">
                <div id="searchContainer" className="w-full border-2 focus:border-blue-400 h-12 border-gray-300 rounded-lg flex items-center">
                    <i className="bi bi-search text-xl ml-3"></i>
                    <input
                        type="text"
                        className="w-full h-10 pl-2 bg-transparent border-0 outline-0 pl-4 text-indigo-950"
                        placeholder="Search your Contacts"
                        value={term}
                        onChange={(e) => searchKeyWord(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 divide-y divide-slate-200 mt-4">
                {renderContactList}
            </div>
        </div>
    );
};

export default ContactList;
