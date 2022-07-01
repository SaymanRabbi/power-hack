import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
const Login = () => {
  const [user, setUser] = useState('')
  console.log(user);
  const [token] = useToken(user)
  console.log(token);
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onsubmit = data => {
    const email = data.email
    setUser(email)
        fetch(`http://localhost:5000/login/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json()).then(dt =>
        
        {
          if (dt.email === data.email && dt.password === data.password) {
            localStorage.setItem("user", dt.email)
            reset()
            setError('')
            navigate('/')
          }
          if(dt.messages==='error') {
            setError('Login Failed')
            console.log('hello')
          }
        })
    }
  return (
    <div className='flex justify-center items-center' style={{minHeight:'100vh'}}>
    <div class=" md:w-2/4 w-3/4">
     <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
         <div class="mb-4">
           <h3 class="font-semibold text-2xl text-gray-800">Sign Up </h3>
           <p class="text-gray-500">Please Create A account.</p>
                 </div>
                 <form onSubmit={handleSubmit(onsubmit)}>
                 <div class="space-y-5">
                     <div class="space-y-2">
                             <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                             {/* ==================Email===================== */}
                             <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" placeholder="mail@gmail.com" {...register("email", { required: true,pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} />
                             {errors.email?.type === 'required' && <span className='text-red-500'>Email Name is required</span>}
                             {errors.email?.type === 'pattern' && <span className='text-red-500'>Email is Invalid</span>}
                         </div>
                         {/* ====================password=================== */}
                       <div class="space-y-2">
           <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
             Password
           </label>
                             <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password" {...register("password", { required: true,pattern:/^\d{6}$/})} />
                             {errors.password?.type === 'required' && <span className='text-red-500'>Password Name is required</span>}
                             {
                                 errors.password?.type==='pattern'&&<span className='text-red-500'>Password Should Be 6 Digit</span>
                             } 
                         </div>
           <div class="flex items-center justify-between">
          
              </div>
              {
                error && <span className='text-red-500'>{error}</span>
              }
         <div>
           <button type="submit" class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
             Sign Up
           </button>
         </div>
         </div>
         </form>
         <p className='mt-2'><Link to='/register'>Dont Have A Account?</Link></p>
     </div>
   </div>
     </div>
     
    );
};

export default Login;