import React, { useState, useEffect } from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [editContact, setEditContact] = useState(null);

    const addContactHandler = (contact) => {
        const newContact = { id: uuidv4(), ...contact };
        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    };

    const updateContactHandler = (updatedContact) => {
        const updatedContacts = contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        );
        setContacts(updatedContacts);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
        setEditContact(null);
    };

    const removeContactHandler = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    };

    const searchHandler = (searchTerm) => {
        setSearch(searchTerm);
        if (searchTerm !== "") {
            const newContactList = contacts.filter(contact =>
                Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(newContactList);
        } else {
            setSearchResults(contacts);
        }
    };

    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) setContacts(retrieveContacts);
    }, []);

    return (
        <Router>
            <Header />
            <div className="mt-28">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ContactList
                                contacts={search.length < 1 ? contacts : searchResults}
                                getContactId={removeContactHandler}
                                term={search}
                                searchKeyWord={searchHandler}
                                updateHandler={setEditContact}
                            />
                        }
                    />
                    <Route
                        path="/add"
                        element={
                            <AddContact
                                addContactHandler={addContactHandler}
                                editContact={editContact}
                                updateContactHandler={updateContactHandler}
                            />
                        }
                    />
                    <Route
                        path="/edit/:id"
                        element={
                            <AddContact
                                addContactHandler={addContactHandler}
                                editContact={editContact}
                                updateContactHandler={updateContactHandler}
                            />
                        }
                    />
                </Routes>
            </div>

        </Router>
    );
}

export default App;
