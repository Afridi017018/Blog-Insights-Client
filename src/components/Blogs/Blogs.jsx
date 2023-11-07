import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import Blog from '../Blog/Blog';
import FilterByCategory from '../FilterByCategory/FilterByCategory';
import Search from '../Saerch/Search';

const Blogs = () => {

    const axios = useAxios();

    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");

    const getAllBlogs= async ()=>{
          const res = await axios.get(`/get-blogs?search=${search}&category=${categoryFilter}`);
          return res;
        }
        
        const {data, isLoading} = useQuery({
          queryKey:["allBlogs", search, categoryFilter],
          queryFn: getAllBlogs,
        })
        
  
        if(isLoading)
        {
            return <Loading />
        }
      

    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-5 my-5'>
                <Search search={search} setSearch={setSearch} />
                <FilterByCategory categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
            </div>

            <div className='container lg:mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 justify-center items-center place-items-center '>
           
           {
            data.data.result.map((element)=>(
                <Blog key={element._id} element={element} />
            ))
           }

            </div>
        </div>
    );
};

export default Blogs;