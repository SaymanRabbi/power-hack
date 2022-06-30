import React from 'react';

const Tabel = ({data}) => {
    
    return (
        <div className=' mt-5'>
            <div class="overflow-x-auto">
        <table class="table w-full">
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
                                <td>action</td>
                              </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Tabel;