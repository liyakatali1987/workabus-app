import React from 'react';
import IconLogo from '../assets/ICON.png';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between h-16 p-2.5">
                <div>
                    <Link className='flex items-center justify-center' to={"/"}>
                        <img src={IconLogo} className='h-6 mr-2'></img>
                        <span className='hidden sm:flex'> Workabus </span>
                    </Link>
                </div>
                <div className='hidden sm:flex'>
                    <Link className='mr-4' to={"/post-job"} > Post a Job </Link>
                    <Link to={"/post-course"} > Post a Course </Link>
                </div>
                <div>
                    <BiUser className='cursor-pointer' />
                </div>
            </div>
        </>
    );
};

export default Navbar;
