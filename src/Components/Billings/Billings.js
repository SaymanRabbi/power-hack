import React from 'react';
import Modal from '../Modal/Modal';

const Billings = () => {
    return (
        <div className='px-10'>
            <div class="navbar bg-gray-500">
  <div className=' md:w-28 w-20'>
   <h2 className='normal-case text-xl'>Billings</h2>
  </div>
    <div>
    <input type="text" placeholder="Search" class="input w-full max-w-xs" />
                </div>
                <div className=' ml-auto'>
                   <label htmlFor="my-modal-3" class="btn modal-button">Add New Bill</label>
                </div>
            </div>
            <Modal/>
        </div>
    );
};

export default Billings;