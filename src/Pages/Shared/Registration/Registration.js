import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Registration = () => {

    const {createNewUserManually, updateUser} = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const handleSignUp = data=>{
        console.log(data);
        setSignupError('');

        createNewUserManually(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            toast.success("User created successfully");

            const userInfo = {
                displayName: data.name,
                photoURL: data.image
            }
            updateUser(userInfo)
            .then(()=>{
                toast('Display Name should be updated by now!', {
                    icon: '👏',
                  })
            })
            .catch(err=>console.log(err))
        })
        .catch(error=>{
            console.log(error.message);
            setSignupError(error.message)
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl font-thin'>SignUp</h1>
                <form className='my-5' onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register('name', {required:true})}
                            className="input input-bordered w-full max-w-xs" />
                         {errors.name && <p className='text-red-500'>First name is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="text" placeholder='Your Photo URL'
                            {...register('image', {required:true})}
                            className="input input-bordered w-full max-w-xs" />
                         {errors.image && <p className='text-red-500'>Photo URL is must</p>}
                    </div>







                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register('email', {required: true})}
                            className="input input-bordered w-full max-w-xs" />
                         {errors.email && <p className='text-red-500'>Email name is required</p>}
                    </div>

                    <div className='form-control w-full max-w-xs'>
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register('password', {required: "Password must be atleast 6 character"})}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        {signupError && <p className='text-red-500'>{errors.password.message}</p>}
                       
                    </div>

                    <input className='btn btn-accent w-full mt-5' value="Login" type="submit" />
                </form>
                <p>New to Doctors Portal?
                    <Link to='/login' className='text-primary underline'>
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full text-black">Continue with Google</button>
            </div>
        </div>
    );
};

export default Registration;