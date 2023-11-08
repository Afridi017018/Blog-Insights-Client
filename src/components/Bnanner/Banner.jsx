import React from 'react';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate();
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>

            <div className="hero min-h-[554px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/man-surfing-net-laptop-coffee-break-generated-by-ai_188544-20377.jpg?t=st=1699111772~exp=1699115372~hmac=4ef9422a0cca6e29a1bd7843315891a87c97f39364592cdd1d1d2fff5439bfb5&w=826' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='flex justify-center'>
                            <img className='h-20 w-52' src="/bloginsightslogo.png" alt="" />
                        </div>
                        <h1 className="mb-5 text-4xl font-bold">Your Portal to the World of Blogging</h1>
                        <p className="mb-5">Embark on a journey of exploration across diverse topics, gaining inspiration and igniting your curiosity. Join us in uncovering hidden gems and sharing the excitement of discovery in the ever-evolving world of knowledge and ideas.</p>
                        <button onClick={()=>navigate('/all-blogs')} className='bg-green-800 hover:bg-green-950 px-3 py-1 text-lg rounded text-white'>All Blogs</button>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;