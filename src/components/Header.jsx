

import React from 'react';
import Navbar from './Navbar';
import Form from './Form';


export default function Header() {      
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <Form />
                <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your real estate book of choice.</h2>
                <br />
                <p className='header-text text-capitalize'>Search for books about real estate and find your next read.</p>
                <Form />
                </div>
                </header>
        </div>
    );
}