import { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        treatment: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        if (!formData.name) formErrors.name = "Name is required";

        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }

        if (!formData.phone) {
            formErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = "Phone number should be 10 digits";
        }

        if (!formData.treatment) formErrors.treatment = "Please select a treatment";

        return formErrors;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            alert('Form submitted successfully!');
            // Handle form submission
        } else {
            setErrors(formErrors);
        }
    };

    return (

        <>
            <form onSubmit={handleSubmit} className="space-y-6 mt-7 rounded-md max-w-4xl lg:gap-2 flex flex-col">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="placeholder-[#002570] placeholder-wave font-semibold w-full px-3 py-2 border border-[#002570] rounded-lg bg-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="placeholder-[#002570] placeholder-wave font-semibold w-full px-3 py-2 border border-[#002570] rounded-lg bg-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                </div>

                {/* Row 2: Phone and Treatment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="placeholder-[#002570] placeholder-wave font-semibold w-full px-3 py-2 border border-[#002570] rounded-lg bg-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Phone"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <select
                            name="treatment"
                            value={formData.treatment}
                            onChange={handleChange}
                            className="placeholder-[#002570] placeholder-wave font-semibold w-full px-3 py-2 border border-[#002570] rounded-lg bg-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Treatment</option>
                            <option value="Plastic Surgery">Plastic Surgery</option>
                            <option value="Dermatology">Dermatology</option>
                            {/* Add more treatments as needed */}
                        </select>
                        {errors.treatment && <p className="text-red-500 text-sm mt-1">{errors.treatment}</p>}
                    </div>
                </div>

                {/* Row 3: Message */}
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="placeholder-[#002570] placeholder-wave font-semibold w-full px-3 py-2 border border-[#002570] rounded-lg bg-transparent hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        placeholder="Your Message"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default AppointmentForm;
