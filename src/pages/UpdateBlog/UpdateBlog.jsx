import React, { useState } from 'react';

const UpdateBlog = () => {
    const [blogData, setBlogData] = useState({
      title: '',
      imageUrl: '',
      category: '',
      shortDescription: '',
      longDescription: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBlogData({ ...blogData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(blogData);
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
              <option value="Category">Category 1</option>
              <option value="Category2">Category 2</option>
              <option value="Category3">Category 3</option>
            </select>
          </div>
          </div>
  
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-bold mb-2">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={blogData.imageUrl}
              placeholder="Image URL"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
  
          
  
          <div className="mb-4">
            <label htmlFor="shortDescription" className="block text-sm font-bold mb-2">Short Description:</label>
            <textarea
              name="shortDescription"
              value={blogData.shortDescription}
              placeholder="Short Description"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="longDescription" className="block text-sm font-bold mb-2">Long Description:</label>
            <textarea
              name="longDescription"
              value={blogData.longDescription}
              placeholder="Long Description"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
  
          <div className='text-center'>
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-950 text-white font-semibold py-2 px-4 my-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default UpdateBlog;