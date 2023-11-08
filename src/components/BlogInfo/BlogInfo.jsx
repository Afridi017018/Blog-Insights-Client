import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import AddComment from '../AddComment/AddComment';
import Comments from '../Comments/Comments';

const BlogInfo = () => {
    const axios = useAxios();
    const { user, loading } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();
    const [mySwitch, setMySwitch] = useState(false)

    const getSingleBlog = async () => {
        const result = await axios.get(`/get-single-blog/${id}`);
        return result;
    }

    const { data, isLoading } = useQuery({
        queryKey: ["singleBlog", mySwitch],
        queryFn: getSingleBlog
    })

    if (isLoading || loading) {
        return <Loading />
    }



    return (
        <div className='my-5 px-5'>
            <div>
                <img className='w-full h-[30rem] rounded' src={data.data.result.image} alt="" />
            </div>
            <div className='my-2 text-center'>
                {user?.email &&
                    <button onClick={() => navigate(`/update-blog/${data.data.result._id}`)} className={`bg-green-700 px-2 py-1 text-white w-20 rounded ${user.email !== data.data.result.user && "hidden"}`}>Update</button>
                }
            </div>
            <div className='my-3'>
                <p className='text-gray-600 underline underline-offset-2 font-bold capitalize'>{data.data.result.category}</p>
            </div>
            <div className='my-3'>
                <h2 className='text-2xl font-bold'>{data?.data.result.title}</h2>
            </div>
            <div>
                <p className='italic font-bold text-gray-600 text-lg my-2'>{data.data.result.shortDesc}</p>
            </div>
            <div className='my-3'>
                <p className='text-gray-600 text-lg'>{data?.data.result.longDesc}</p>
            </div>
            <div>
                {
                    <AddComment id={id} mySwitch={mySwitch} setMySwitch={setMySwitch} user={user?.email} blogOwner={data.data.result.user} />
                }
            </div>
            <div>
                {
                    data.data.comments.length > 0 ?

                        <Comments comments={data?.data.comments} />
                        :
                        <p className='text-gray-600 italic'>No comment has been made yet !</p>

                }

            </div>
        </div>
    );
};

export default BlogInfo;