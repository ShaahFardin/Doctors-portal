import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = "c0c288d3b71cdf6e06fc9836f621bfc8";
    const navigate = useNavigate();


    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        // Host image to imgbb server
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image : imageData.data.url
                }

                // save doctor to the database
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then( res => res.json())
                .then( data => {
                    toast.success(`${doctor.name} is added successfully`);
                    navigate('/dashboard/manage-doctors')
                })
            })
    }


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appoinment-specialty');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <progress className="progress w-56 h-10 "></progress>
    }

    return (
        <div className='w-96 p-7 items-center justify-center'>
            <h1 className='text-4xl'>Add Doctor</h1>
            <form className='my-5' onSubmit={handleSubmit(handleAddDoctor)}>



                {/* Name Field */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text"
                        {...register('name', { required: true })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>First name is required</p>}
                </div>


                {/* Email Field */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email"
                        {...register('email', { required: true })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>Email name is required</p>}
                </div>



                <select
                    {...register('specialty', { required: true })}
                    className="select select-bordered w-full max-w-xs mt-5">
                    {
                        specialties.map(specialty =>
                            <option key={specialty._id} value={specialty.name}>
                                {specialty.name}
                            </option>)
                    }
                </select>

                <div className="form-control  max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" placeholder='Your Photo URL'
                        {...register('image', { required: true })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-5' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;