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
        const res = await axios.post(`/add-to-wishlist`, { blogId: element._id, user: user?.email })
        toast.dismiss();
        toast.success(res.data.message);
    }

    return (
        <div className='px-5 lg:px-0'>
            <div className="card card-side min-h-72 w-full shadow-xl border rounded-none">
                <img className='min-h-full w-2/4 ' src="https://img.freepik.com/free-photo/one-person-standing-cliff-achieving-success-generated-by-ai_188544-11834.jpg?t=st=1699090908~exp=1699094508~hmac=da0835f35aee05e49cd9a814ab4bfbd33bc11ba83c5e4648a8d29b4bbb0d697a&w=826" alt="Album" />
                <div className="card-body text-gray-500 capitalize">
                <p className='text-gray-600 underline underline-offset-2 capitalize'>{element.category}</p>
                    <h2 className="card-title text-green-700">{element.title}</h2>
                    
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