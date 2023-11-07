import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import AddComment from '../AddComment/AddComment';
import Comments from '../Comments/Comments';

const BlogInfo = () => {
    const axios = useAxios();
    const { id } = useParams();
    const navigate = useNavigate();

    const getSingleBlog = async () => {
        const result = await axios.get(`/get-single-blog/${id}`);
        return result;
    }

    const { data, isLoading } = useQuery({
        queryKey: ["singleBlog"],
        queryFn: getSingleBlog
    })

    if (isLoading) {
        return <Loading />
    }

 

    return (
        <div className='my-5 px-5'>
            <div>
                <img className='w-full h-[26rem] rounded' src="https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?w=740&t=st=1699130640~exp=1699131240~hmac=2105ac0da8bb53b0788129846777cbad58cbf2892908a3511ffc9227d6a0817f" alt="" />
            </div>
            <div className='my-2 text-center'>
                <button onClick={()=> navigate(`/update-blog/${data.data.result._id}`)} className='bg-green-700 px-2 py-1 text-white w-20 rounded'>Update</button>
            </div>
            <div className='my-3'>
                <p className='text-gray-600 underline underline-offset-2 font-bold capitalize'>{data.data.result.category}</p>
            </div>
            <div className='my-3'>
                <h2 className='text-2xl font-bold'>{data?.data.result.title}</h2>
            </div>
            <div>
                <p className='italic font-bold text-gray-600 text-lg my-2'>{data?.data.result.shortDesc}</p>
            </div>
            <div className='my-3'>
                <p className='text-gray-600 text-lg'>{data?.data.result.longDesc}</p>
            </div>
            <div>
                <AddComment />
            </div>
            <div>
                <Comments />
            </div>
        </div>
    );
};

export default BlogInfo;