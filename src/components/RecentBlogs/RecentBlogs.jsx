import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import RecentBlog from '../RecentBlog/RecentBlog';



const RecentBlogs = () => {
const axios = useAxios();
    const getRecent = async () => {
        const res = await axios.get(`/get-recent-blogs`);
        return res;
    }
    
    const { data, isLoading } = useQuery({
        queryKey: ["recent"],
        queryFn: getRecent,
    })
    
    
    if (isLoading) {
        return <Loading />
    }
 



    return (
        <div>
            <h2 className='text-2xl font-bold text-center text-gray-500 my-10 underline underline-offset-8'>Recent Blogs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 container my-5 mx-auto gap-5'>
                {/* <RecentBlog /> */}
               
               {
                data.data.result.map((element)=>(
                    <RecentBlog key={element._id} element={element} />
                ))
               }
                
                

            </div>

        </div>
    );
};

export default RecentBlogs;