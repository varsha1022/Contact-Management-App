import React from 'react';
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const { contacts = [], getContactId, updateHandler, term, searchKeyWord } = props;

    if (!contacts.length) {
        return (
            <div className="m-8 flex flex-col gap-7">
                <h2 className="text-3xl ml-4 font-200 font-bold">Contact List</h2>
                <Link to="/add">
                    <button className="w-1/12 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200 tracking-wider mt-4">
                        Add Contact
                    </button>
                </Link>
                <div className="border-2 focus:border-blue-400 h-12 pl-3 w-5/12 border-gray-300 rounded-lg mt-4">
                    <i className="bi bi-search shadow-sm ml-3 pt-2 text-xl"></i>
                    <input
                        type="text"
                        className="w-64 h-10 pl-2 bg-transparent border-0 outline-0 pl-4 text-indigo-950"
                        placeholder="Search your Contacts"
                        value={term}
                        onChange={(e) => searchKeyWord(e.target.value)}
                    />
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
            <div className="flex justify-between">
            <h2 className="text-3xl ml-4 font-200 font-bold">Contact List</h2>
            <Link to="/add">
                <button className="w-12/12 p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-600 transition duration-200 tracking-wide h-12 text-lg ">
                    Add Contact
                </button>
            </Link>
            </div>

            <div className=" w-full border-2 focus:border-blue-400 h-12 pl-3 w-5/12 border-gray-300 rounded-lg mt-4">
                <i className="bi bi-search shadow-sm ml-3 pt-2 text-xl"></i>
                <input
                    type="text"
                    className="w-64 h-10 pl-2 bg-transparent border-0 outline-0 pl-4 text-indigo-950"
                    placeholder="Search your Contacts"
                    value={term}
                    onChange={(e) => searchKeyWord(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-4 divide-y divide-slate-200 mt-4">
                {renderContactList}
            </div>
        </div>
    );
};

export default ContactList;
