import React from "react";
import { useNavigate } from 'react-router-dom';
import user from "../Images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contacts;
    const navigate = useNavigate();

    const editContact = () => {
        props.updateHandler(props.contacts);
        navigate(`/edit/${id}`);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4" key={id}>
            <div className="flex items-center">
                <img className="rounded-full h-12 w-12" src={user} alt="user" />
                <div className="ml-4">
                    <div className="text-xl font-semibold">{name}</div>
                    <div className="font-medium text-gray-600 tracking-wide">{email}</div>
                </div>
            </div>
            <div className="flex items-center">
                <i
                    style={{ fontSize: "26px", marginTop: "4px" }}
                    className="bi bi-pencil-square text-blue-600 cursor-pointer ml-4"
                    onClick={editContact}
                ></i>
                <i
                    style={{ fontSize: "26px", marginTop: "4px" }}
                    className="bi bi-trash-fill text-red-500 cursor-pointer ml-4"
                    onClick={() => props.clickHandler(id)}
                ></i>
            </div>
        </div>
    );
};

export default ContactCard;
