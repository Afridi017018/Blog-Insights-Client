import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate()
    return (
        <div>

            <div className="card rounded-md card-compact w-80 lg:w-96 drop-shadow-2xl bg-base-100">
                <figure><img className='w-full h-72' src="https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?w=740&t=st=1699130640~exp=1699131240~hmac=2105ac0da8bb53b0788129846777cbad58cbf2892908a3511ffc9227d6a0817f" alt="" /></figure>
                <div className="card-body">
                    <p className='text-gray-600 underline underline-offset-2'>Tour</p>
                    <h2 className="text-2xl font-bold">This is Blog</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, molestiae.</p>


                    <div className="card-actions justify-center">
                        <button onClick={() => navigate(`/blog-details`)} className="bg-gray-600 hover:bg-gray-800 text-white px-2 py-1 rounded font-medium">See Details</button>
                        <button onClick={() => navigate(`/details/`)} className="bg-green-800 hover:bg-green-950 text-white px-2 py-1 rounded font-medium">Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;