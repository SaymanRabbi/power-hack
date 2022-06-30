import React from 'react';
import Modal from '../Modal/Modal';
import Tabel from '../Tabel/Tabel';
import { useQuery } from 'react-query';

const Billings = () => {
    const { data,isLoading,refetch } = useQuery('billingdata', ()=>fetch('http://localhost:5000/billing-list').then(res => res.json()))
    if (isLoading) {
        return
    }
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
            <Tabel data={data} />
            <Modal refetch={refetch} />
        </div>
    );
};

export default Billings;