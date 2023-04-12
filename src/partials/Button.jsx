import React from "react";
import { Button } from "flowbite-react";
const AppButton = ({clickEvent, text}) => {
    return (
        <Button className="bg-blue-500 text-white text-sm font-medium rounded-md px-1 py-1"
         onClick={clickEvent}>
            {text}
        </Button>
    )
}

export default AppButton;