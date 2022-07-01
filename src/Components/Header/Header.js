import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = localStorage.getItem('user')
    return (
        <nav className=' bg-gray-500'>
            <div className='container px-10 flex justify-between items-center py-5'>
            <div className='logo'>
               <Link to='/' className='font-semibold'>Logo</Link>
             </div>
           <div className='amount flex gap-3 items-center'>
            <h3 className='font-semibold'>Paid Total:0</h3>
                    {
                    !user&&<Link to='/login'>Login</Link>
                    }
                    
            </div>
            </div>
        </nav>
    );
};

export default Header;