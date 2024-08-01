import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 ">
            <div className=" container mx-auto flex  justify-center items-center  ml-0">
                <h1 className="text-3xl  font-bold ">Contact Manager</h1>
                <nav>
                    <Link
                        to="/"
                        className=" top-6 absolute right-5 font-bold text-white text-xl no-underline hover:text-gray-100"
                        aria-label="Home"
                    >
                        Home
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;