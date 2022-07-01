import React from 'react';
import Modal from '../Modal/Modal';
const Tabel = ({ data, refetch }) => {
    const DeleteData = (_id) => {
        fetch(`http://localhost:5000/delete-billing/${_id}`, {
            method:"DELETE"
        }).then(res => res.json()).then(data => {
            if (data.acknowledged) {
                refetch()
            }
        })
       
    } 
    const Updatepd = (_id) => { 
        
    }
    return (
        <div className=' mt-5'>
            <div className="overflow-x-auto">
        <table className="table w-full">
    <thead>
      <tr>
        <th>Billing ID</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Paid Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
                        {
                            data?.map(td=><tr key={td._id}>
                                <th>{td._id}</th>
                                <td>{td.name}</td>
                                <td>{td.email}</td>
                                <td>{td.amount}</td>
                                <td className='flex gap-3'> <label htmlFor="my-modal-3" className='btn btn-xs' onClick={()=>Updatepd(td._id)}>Edit</label> <button className='btn btn-xs'
                                onClick={()=>DeleteData(td._id)}
                                >Delete</button></td>
                                
                              </tr>)
    }
    </tbody>
  </table>
            </div>
            
        </div>
    );
};

export default Tabel;