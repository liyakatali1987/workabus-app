import React from "react";
import { Link } from "react-router-dom";
const AppLink = ({path, text}) => {
    return (
        <Link to={path}
        className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md mx-2"
        >{text}
        </Link>
    )
}

export default AppLink;