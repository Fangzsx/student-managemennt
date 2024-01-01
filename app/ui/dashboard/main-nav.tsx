import React from 'react'
import Logo from '../Logo'

const MainNav = () => {
    return (
        <nav>
            <div className='flex w-full p-2 gap-4 bg-gray-900 text-white'>
                <Logo />
                <h1>Student Management System</h1>
            </div>
        </nav>
    )
}

export default MainNav