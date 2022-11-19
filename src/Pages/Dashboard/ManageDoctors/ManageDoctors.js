import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {

    const { data: doctors, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accesstoken')}`
                    }
                })
                const data = await res.json();
                return data;
            } catch (error) {

            }
        }
    })

    if (isLoading) {
        return <progress className="progress items-center justify-center w-56 h-10 "></progress>
    }

    return (
        <div>
            <h1 className='text-3xl font-thin mb-5'>Manage-Doctors {doctors?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src={doctor.image} alt=''/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <button className=' bg-red-400 px-5 py-1 rounded-sm '>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;