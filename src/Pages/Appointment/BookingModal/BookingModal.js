import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate , setTreatment}) => {

    const { name, slots } = treatment;
    const date = format(selectedDate, "PP")

    const handleModalSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            phone, email, slot
        }
        console.log(booking);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">
                        {name}
                    </h3>
                    <form onSubmit={handleModalSubmit}>
                        <input type="text" value={date} disabled className="input input-bordered w-full  my-2" />
                        <select name='slot' className="select select-bordered w-full my-2">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Full Name" className="input input-bordered w-full my-2" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full my-2" />
                        <input name='' type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
                        <button type='submit' className="btn mt-5 w-full">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;