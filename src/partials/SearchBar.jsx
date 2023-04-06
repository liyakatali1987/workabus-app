import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function SearchBar() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/results?result");
    };
    return (  
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center shadow-md" >
                <img className='w-64 mb-5' src={logo} alt="workabus-logo" />
                <form className="flex-col items-center" onSubmit={handleSubmit}>
                    <input
                        className="my-3 px-4 py-2 border w-full border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="job title, courses, companies ..."
                    />
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" type="submit" >
                        Search
                    </button>
                </form>
            </div>
            
        </div>

    )
}

export default SearchBar;
