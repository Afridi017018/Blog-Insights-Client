import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';


const WishListCard = ({ element, mySwitch, setMySwitch }) => {
    const axios = useAxios();
    const navigate = useNavigate();

    const getSingleBlog = async () => {
        const result = await axios.get(`/get-single-blog/${element.blogId}`);
        return result;
    }

    const { data, isLoading } = useQuery({
        queryKey: ["singleWishlist", element],
        queryFn: getSingleBlog,

    })

    if (isLoading) {
        return <Loading />
    }


    const handleRemove = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/delete-wishlist-by-user/${element._id}`)
                    .then((res) => {
                   setMySwitch(!mySwitch)
                        Swal.fire(
                            'Removed!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })


            }
        })

    }


    return (
        <div className='px-5 lg:px-0 flex justify-center'>
            <div className="card card-side max-h-auto w-5/6 shadow-xl border rounded">
                <img className='min-h-full w-2/5 rounded-l' src="https://img.freepik.com/free-photo/one-person-standing-cliff-achieving-success-generated-by-ai_188544-11834.jpg?t=st=1699090908~exp=1699094508~hmac=da0835f35aee05e49cd9a814ab4bfbd33bc11ba83c5e4648a8d29b4bbb0d697a&w=826" alt="Album" />
                <div className="card-body text-gray-500 capitalize">
                    <div className='flex flex-col justify-center gap-3'>
                        <p className='text-gray-600 underline underline-offset-2 capitalize'>{data.data.result.category}</p>
                        <h2 className="card-title text-green-700">{data.data.result.title}</h2>

                        <p>{data.data.result.shortDesc}</p>
                    </div>
                    <div className="card-actions justify-center mt-5">
                        <button onClick={() => navigate(`/blog-details/${element.blogId}`)} className="bg-gray-600 hover:bg-gray-800 px-2 py-1 w-28 rounded text-white text-sm">See Details</button>
                        <button onClick={handleRemove} className="bg-red-700 hover:bg-red-950 px-2 py-1 w-28 rounded text-white text-sm">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;