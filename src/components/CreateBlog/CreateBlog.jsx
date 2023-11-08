import React from 'react';
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate();
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
          <div className='my-5'>
      <div className="hero h-72" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/office-supplies-background_1009245-1948.jpg?w=826)' }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Join millions of others</h1>
            <p className='mb-5'>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
            
            <button onClick={()=> navigate('/add-blog')} className='bg-green-800 hover:bg-green-950 px-2 py-1 rounded'>Create Your Blog</button>
           
          </div>
        </div>
      </div>
    </div>
        </motion.div>
    );
};

export default CreateBlog;