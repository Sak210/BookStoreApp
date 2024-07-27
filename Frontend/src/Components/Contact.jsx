import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => console.log(data);
  return (
    <>
    <div>
    <div className='flex h-screen items-center justify-center '>
    <div className="w-[600px]">
        <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Contact US</h3>
            <div className='mt-4 space-y-2'>
                    <span> Name </span>
                    <br/>
                    <input type = "text" placeholder='Enter your fullname' 
                    className = "w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("name", { required: true })}
                    />
            </div>
            <div className='mt-4 space-y-2'>
                    <span> Email </span>
                    <br/>
                    <input type = "email" placeholder='Enter your email' 
                    className = "w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                    />
            </div>
            <div className='mt-4 space-y-2'>
                    <span> Message </span>
                    <br/>
                    <textarea type = "text" placeholder='Type your message' 
                    className="w-full px-3 py-2 border rounded-md resize-y focus:outline-none "
                    {...register("message", { required: true })}
                    />
            </div>
            <div className='flex justify-around mt-4'>
                    <button className='bg-blue-600 text-white rounded-md px-3 py-1'>
                    Submit 
                    </button>
            </div>
        </form>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Contact
