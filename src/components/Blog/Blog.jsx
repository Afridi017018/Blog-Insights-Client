import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const Blog = ({ element }) => {
    const { user } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    const handleAddToWishlist = async () => {
        if(!user)
        {
            navigate('/login')
            return;
        }
        const res = await axios.post(`/add-to-wishlist`, { blogId: element._id, user: user?.email })
        toast.dismiss();
        toast.success(res.data.message);
    }

    return (
        <div>

            <div className="card rounded-md card-compact w-80 lg:w-96 drop-shadow-2xl bg-base-100">
                <figure><img className='w-full h-72' src={element.image} alt="" /></figure>
                <div className="card-body min-h-[215px]">
                    <div>
                        <p className='text-gray-600 underline underline-offset-2 capitalize'>{element.category}</p>
                        <h2 className="text-xl font-bold mt-2">{element.title}</h2>
                    </div>
                    <p className='text-gray-500'>{element.shortDesc}</p>


                    <div className="card-actions justify-center">
                        <button onClick={() => navigate(`/blog-details/${element._id}`)} className="bg-gray-600 hover:bg-gray-800 text-white px-2 py-1 rounded font-medium">See Details</button>
                        <button onClick={handleAddToWishlist} className="bg-green-800 hover:bg-green-950 text-white px-2 py-1 rounded font-medium">Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;