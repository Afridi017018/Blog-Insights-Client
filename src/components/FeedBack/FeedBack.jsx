import React, { useState } from 'react';
import './FeedBack.css'

const FeedBack = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleContact = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }


    return (
        <div className='my-10'>
            <div className="hero bg-custom-img">
                <div className="hero-overlay bg-opacity-70"></div>
                <div data-aos="zoom-in-up" className="hero-content text-center text-neutral-content">
                    <div className='text-center py-10'>
                        <h2 className='text-4xl font-bold text-white m-5'>Give Us Your Feedback</h2>
                        <p className='text-white'>Your Thoughts Matter! Share Your Suggestions, Ideas, and Insights. We're Eager to Hear from You.</p>
                        <form onSubmit={handleContact} className='text-center my-5 text-black'>
                            <div>
                               
                                <input className='w-2/3 my-2 px-3 py-1 h-10 rounded-lg' placeholder='Enter Your Name' type="text" value={formData.name} onChange={handleChange} name="name" id="" required />
                            </div>

                            <div>
                         
                                <input className='w-2/3 my-2 px-3 py-1 h-10 rounded-lg' placeholder='Enter Your Email' type="email" value={formData.email} onChange={handleChange} name="email" id="" required />
                            </div>
                            
                            <div>
                                <textarea className='w-2/3 my-2 px-3 py-1 h-24 rounded-lg' placeholder='Your FeedBack' type="text" value={formData.message} required onChange={handleChange} name="message" id="" />
                            </div>

                            <div>
                                <button type='submit' className='bg-blue-500 hover:bg-blue-800 px-3 py-1 text-white font-medium rounded w-28 text-lg'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FeedBack;