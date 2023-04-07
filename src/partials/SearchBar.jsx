import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { MdOutlineSearch } from "react-icons/md"
import { TextInput, Button } from 'flowbite-react';
import AppButton from './Button';
function SearchBar() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/results?result");
    };
    return (
        <div className='items-center justify-center items-center justify-center'>
            <form>
                <div className='flex flex-row justify-center item-center'>
                    <div className='basis-1/2'>
                        <TextInput
                            id="searchterm"
                            placeholder='Jobs, Courses, Certificates'
                            required={true}
                            className='mb-2 block'
                            icon={MdOutlineSearch}
                        />
                    </div>
                    <div className='mx-2 my-1'>
                        <AppButton text="Search"/>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default SearchBar;
