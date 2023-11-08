import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

const UpdateBlog = () => {

  const axios = useAxios();
  const { id } = useParams();
  const [blogData, setBlogData] = useState({
    title: '',
    image: '',
    category: '',
    shortDesc: '',
    longDesc: '',
  });

  const category = [
    "travel",
    "food",
    "health",
    "technology",
    "lifestyle",
    "fashion",
    "sports",
  ]

  const getSingleBlog = async () => {
    const result = await axios.get(`/get-single-blog/${id}`);
    // console.log(result.data.result)
    const {title, image, category, shortDesc, longDesc} = result.data.result;
      setBlogData({title, image, category, shortDesc, longDesc});
    return result;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["singleBlog"],
    queryFn: getSingleBlog,
    refetchOnWindowFocus:false,
    refetchOnMount:true,
    cacheTime: 10000,
    staleTimeout: 10000,
  })

  if (isLoading)
   {
      return <Loading />
    }



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    await axios.put(`/update-blog`, {...blogData, _id: data.data.result._id})
    toast.dismiss();
    toast.success("Blog Updated Successfully");

  };

  return (
    <div className="max-w-4xl mx-2 lg:mx-auto my-10 p-6 bg-base-100 rounded-md shadow-2xl border text-green-600">
      <h2 className="text-2xl font-semibold mb-4">Update Blog</h2>
      <form onSubmit={handleSubmit}>

        <div className='flex gap-5'>
          <div className="mb-4 w-4/5">
            <label htmlFor="title" className="block text-sm font-bold mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              placeholder="Title"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />

          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-bold mb-2">Category:</label>
            <select
              name="category"
              value={blogData.category}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="" disabled>Select Category</option>
        
              {
                category.map((element, index)=>(
                  <option key={index+1} value={element} > {element.charAt(0).toUpperCase() + element.slice(1)}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold mb-2">Image URL:</label>
          <input
            type="text"
            name="image"
            value={blogData.image}
            placeholder="Image URL"
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>



        <div className="mb-4">
          <label htmlFor="shortDesc" className="block text-sm font-bold mb-2">Short Description:</label>
          <textarea
            name="shortDesc"
            value={blogData.shortDesc}
            placeholder="Short Desc"
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="longDesc" className="block text-sm font-bold mb-2">Long Description:</label>
          <textarea
            name="longDesc"
            value={blogData.longDesc}
            placeholder="Long Description"
            onChange={handleInputChange}
            className="w-full border rounded p-2 h-36"
            required
          />
        </div>

        <div className='text-center'>
          <button
            type="submit"
            className="bg-green-800 hover:bg-green-950 text-white font-semibold py-2 px-4 my-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;