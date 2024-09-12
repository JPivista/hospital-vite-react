import MakeanAppointmentForm from '../../utils/AppointmentForm'
const MakeanAppointment = () => {
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4  bg-[#DFEDFF]">
                <div className="container-xl lg:pt-20 py-10 flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-5">
                        <div>

                            <img src='/book-appointment.jpg' alt='book an appointment' className='h-full object-cover object-center opacity-80' />
                        </div>
                        <div className="flex flex-col gap-4 lg:p-6">
                            <p className="text-dblue text-xl font-semibold">
                                ONLINE APPOINMENT
                            </p>
                            <p className="lg:text-4xl text-2xl font-semibold">
                                Make an Online Appoinemnt Booking For Treatment Patients
                            </p>
                            <MakeanAppointmentForm />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MakeanAppointment
