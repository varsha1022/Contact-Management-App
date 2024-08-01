import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AddContact = (props) => {
    const [state, setState] = useState({
        name: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        if (props.editContact && id) {
            setState(props.editContact);
        } else {
            setState({ name: "", email: "" });
        }
    }, [props.editContact, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name === "" || state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        if (props.editContact) {
            props.updateContactHandler({ id, ...state });
        } else {
            props.addContactHandler(state);
        }
        setState({ name: "", email: "" });
    }

    return (
        <div className="m-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">{props.editContact ? "Update Contact" : "Add Contact"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Name:</label>
                    <input
                        type="text"
                        className="border-2 border-gray-300 rounded-lg w-full h-12 pl-3 focus:outline-none focus:border-blue-400"
                        name="name"
                        placeholder="Name"
                        value={state.name}
                        onChange={(e) => setState({ ...state, name: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Email:</label>
                    <input
                        type="email"
                        className="border-2 border-gray-300 rounded-lg w-full h-12 pl-3 focus:outline-none focus:border-blue-400"
                        name="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={(e) => setState({ ...state, email: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 text-lg bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200 tracking-wider"
                >
                    {props.editContact ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
};

export default AddContact;
