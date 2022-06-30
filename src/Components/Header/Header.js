import React from 'react';

const Header = () => {
    return (
        <nav className=' bg-gray-500'>
            <div className='container px-10 flex justify-between items-center py-5'>
            <div className='logo'>
               <h2 className='font-semibold'>Logo</h2>
             </div>
           <div className='amount'>
              <h3 className='font-semibold'>Paid Total:0</h3>
            </div>
            </div>
        </nav>
    );
};

export default Header;