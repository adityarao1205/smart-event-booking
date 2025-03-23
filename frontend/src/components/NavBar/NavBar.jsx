import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'

const NavBar = function() {
  return (
        <div className='bg-[var(--primary)] flex items-center justify-between px-5 py-1 drop-shadow h-28'>
            <Link to='/' className='text-[var(--textCol)] text-2xl '>Event Management System</Link>
            <div className='flex items-center justify-between px-6 py-2 gap-2 w-full'>
                <SearchBar />
            </div>
            <div>
                <Link to='/login' className='text-2xl'>Login</Link>
                <Link to='/signup' className='text-2xl'>SignUp</Link>
            </div>
        </div>
    )
}

export default NavBar;