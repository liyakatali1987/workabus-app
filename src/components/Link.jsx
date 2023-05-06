import React from "react";
import { Link } from "react-router-dom";
const AppLink = ({path, text}) => {
    return (
        <Link to={path}
        className="bg-blue-500 text-white text-sm font-medium text-white rounded-md p-4 space-x-5"
        >{text}
        </Link>
    )
}

export default AppLink;