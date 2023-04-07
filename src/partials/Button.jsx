import React from "react";
import { Button } from "flowbite-react";
const AppButton = ({clickEvent, text}) => {
    return (
        <Button class="bg-indigo-500 text-white text-sm font-medium rounded-md mx-2"
         onClick={clickEvent}>
            {text}
        </Button>
    )
}

export default AppButton;