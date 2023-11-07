import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';

const Comment = ({comment}) => {

    const axios = useAxios();
    // console.log(comment)

    const getUserInfo = async () => {
        const result = await axios.get(`/get-user-info/${comment.user}`);
        return result;
    }

    const { data, isLoading } = useQuery({
        queryKey: ["userInfo", comment],
        queryFn: getUserInfo
    })

    if (isLoading) {
        return ;
    }

    
    return (
        <div className='w-[21rem] md:w-[32rem] border p-1 my-2'>
            <div className='flex gap-2 items-center'>
                <img className='w-8 h-8 rounded-full' src={data.data.data.photo} alt="" />
                <p className='font-bold'>{data.data.data.name}</p>
                
            </div>
            <div className='my-1'>
                <p className='text-sm text-gray-600'>{comment.comment}</p>
            </div>
        </div>
    );
};

export default Comment;