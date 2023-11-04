import React from 'react';

const FeatureBlog = () => {
    return (
        <div className='px-5 lg:px-0'>
            <div className="card card-side min-h-72 w-full shadow-xl border rounded-none">
                <img className='min-h-full w-2/4 ' src="https://img.freepik.com/free-photo/one-person-standing-cliff-achieving-success-generated-by-ai_188544-11834.jpg?t=st=1699090908~exp=1699094508~hmac=da0835f35aee05e49cd9a814ab4bfbd33bc11ba83c5e4648a8d29b4bbb0d697a&w=826" alt="Album" />
                <div className="card-body text-gray-500 capitalize">
                    <h2 className="card-title text-green-700">Travel On Sajek an hiamlos</h2>
                    <p className='font-bold text-gray-600'>Category: Tour</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci doloribus, quis possimus deleniti laborum vel sit velit modi deserunt blanditiis!</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>navigate(`/details`)} className="bg-gray-600 hover:bg-gray-800 px-2 py-1 w-28 rounded text-white text-sm">Details</button>
                        <button onClick={()=>navigate(`/updateProduct/`)} className="bg-green-800 hover:bg-green-950 px-2 py-1 w-28 rounded text-white text-sm">Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureBlog;