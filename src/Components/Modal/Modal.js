import React from 'react';
import { useForm } from "react-hook-form";

const Modal = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(errors)
  const onSubmit = data => console.log(data);

return (
<div>
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
   <div class="modal" >
  <div class="modal-box relative">
    <label htmlFor="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-5 m-auto w-full'>
          {/* ====================Name Filed======================== */}
          <input type="text" placeholder="Full Name" class="input input-bordered w-3/4 mx-auto" {...register("name", { required: true , pattern: /^[a-zA-Z ]{2,30}$/})} />
          <div className='w-3/4 mx-auto'>
          {errors.name?.type === 'required' && <span className='text-red-500'>Full Name is required</span>}
          {errors.name?.type==='pattern' && <span className='text-red-500'>Minimun 2 Words</span>}
          </div>

          {/* ====================Email Filed======================== */}
          <input type="email" placeholder="Your Email" class="input input-bordered mx-auto w-3/4" {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} />
          <div className='w-3/4 mx-auto'>
          {errors.email?.type === 'required' && <span className='text-red-500'>Email is required</span>}
          {errors.email?.type === 'pattern' && <span className='text-red-500'>Invalid Email</span>}
          </div>
           {/* ====================Number Filed======================== */}
          <input type="number" placeholder="Your Number" class="input input-bordered mx-auto w-3/4"{...register("number", { required: true, pattern: /^\d{11}$/ })} />
          <div className='w-3/4 mx-auto'>
          {errors.number?.type === 'required' && <span className='text-red-500'>Number is required</span>}
          {errors.number?.type === 'pattern' && <span className='text-red-500'>Phone Number Should be 11 Digit</span>}
          </div>
          {/* ====================Paid Amount Filed======================== */}
          <input type="number" placeholder="Paid Amount" class="input input-bordered mx-auto w-3/4" {...register("amount", { required: true, pattern: /^[62|0]+\d{9}/ })} />
          <div className='w-3/4 mx-auto'>
          {errors.amount?.type === 'required' && <span className='text-red-500'>Amount is required</span>}
         </div>
          <button className='btn' type='submit'>Submit</button>
      </form>
       
  </div>
  </div>
  </div>
    );
};

export default Modal;