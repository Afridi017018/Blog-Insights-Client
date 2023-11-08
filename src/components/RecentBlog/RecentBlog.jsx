import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const RecentBlog = ({element}) => {
    const navigate = useNavigate();
const axios = useAxios();
const {user} = useAuth();

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
        <div className='px-5 lg:px-0'>
            <div className="card card-side w-full shadow-xl border rounded-none min-h-[300px]">
                <img className='min-h-full w-2/4 ' src={element.image} alt="Album" />
                <div className="card-body text-gray-500 capitalize">
               <div>
               <p className='text-gray-600 underline underline-offset-2 capitalize'>{element.category}</p>
                    <h2 className="card-title text-green-700 text-lg my-2">{element.title}</h2>
               </div>
                    
                    <p>{element.shortDesc}</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>navigate(`/blog-details/${element._id}`)} className="bg-gray-600 hover:bg-gray-800 px-2 py-1 w-28 rounded text-white text-sm">See Details</button>
                        <button onClick={handleAddToWishlist} className="bg-green-800 hover:bg-green-950 px-2 py-1 w-28 rounded text-white text-sm">Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;