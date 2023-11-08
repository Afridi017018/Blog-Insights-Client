import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { toast } from 'react-toastify';

const AddBlog = () => {
const {user} = useAuth();
const axios = useAxios();



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

  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBlogData({ ...blogData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post(`/add-blog`, {...blogData, user: user.email })
      toast.dismiss();
      toast.success("Blog Added Successfully");
      setBlogData({
        title: '',
        image: '',
        category: '',
        shortDesc: '',
        longDesc: '',
      })
    };
  
    return (
      <div className="max-w-4xl mx-2 lg:mx-auto my-10 p-6 bg-base-100 rounded-md shadow-2xl border text-green-600">
        <h2 className="text-2xl font-semibold mb-4">Create a New Blog</h2>
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
              placeholder="Short Description"
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
              Create
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddBlog;

















// [
//   {
//     "title": "The Latest in Mobile Technology",
//     "category": "technology",
//     "image": "technology-image-1.jpg",
//     "shortDesc": "Explore the newest mobile innovations and trends in the tech world.",
//     "longDesc": "Stay up-to-date with the latest advancements in mobile technology, from cutting-edge smartphones to app development and more.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:32:42.350+00:00"
//   },
//   {
//     "title": "Artificial Intelligence Breakthroughs",
//     "category": "technology",
//     "image": "technology-image-2.jpg",
//     "shortDesc": "Discover the groundbreaking developments in artificial intelligence and machine learning.",
//     "longDesc": "Dive into the world of AI and ML, from self-driving cars to chatbots and the impact on various industries.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:32:47.350+00:00"
//   },
//   {
//     "title": "Adventures in the Great Outdoors",
//     "category": "travel",
//     "image": "travel-image-1.jpg",
//     "shortDesc": "Embark on thrilling outdoor adventures and explore nature's wonders.",
//     "longDesc": "Get ready for unforgettable experiences in the wilderness, from hiking in the mountains to camping under the stars.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:32:52.350+00:00"
//   },
//   {
//     "title": "Cultural Expeditions Around the World",
//     "category": "travel",
//     "image": "travel-image-2.jpg",
//     "shortDesc": "Immerse yourself in diverse cultures and traditions from across the globe.",
//     "longDesc": "Journey to distant lands, taste exotic cuisine, and witness the beauty of different cultures and traditions.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:32:57.350+00:00"
//   },
//   {
//     "title": "Mental Health Matters",
//     "category": "health",
//     "image": "health-image-1.jpg",
//     "shortDesc": "Explore the importance of mental health and emotional well-being.",
//     "longDesc": "Discover techniques for managing stress, anxiety, and maintaining a healthy state of mind.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:02.350+00:00"
//   },
//   {
//     "title": "Fitness and Nutrition Tips",
//     "category": "health",
//     "image": "health-image-2.jpg",
//     "shortDesc": "Get expert advice on maintaining a fit and healthy lifestyle.",
//     "longDesc": "Find guidance on exercises, healthy eating, and overall well-being for a healthier you.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:07.350+00:00"
//   },
//   {
//     "title": "Delicious Culinary Creations",
//     "category": "food",
//     "image": "food-image-1.jpg",
//     "shortDesc": "Savor mouthwatering recipes and culinary delights from around the world.",
//     "longDesc": "Get ready to indulge in a world of flavors, from gourmet dishes to home-cooked comfort food.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:12.350+00:00"
//   },
//   {
//     "title": "Cooking with a Twist",
//     "category": "food",
//     "image": "food-image-2.jpg",
//     "shortDesc": "Discover innovative cooking techniques and unique culinary experiments.",
//     "longDesc": "Unleash your inner chef and try out new and creative cooking ideas in your kitchen.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:17.350+00:00"
//   },
//   {
//     "title": "Living the Minimalist Lifestyle",
//     "category": "lifestyle",
//     "image": "lifestyle-image-1.jpg",
//     "shortDesc": "Explore the art of minimalism and decluttering for a simpler life.",
//     "longDesc": "Learn how to simplify your life, focus on what truly matters, and live with intention.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:22.350+00:00"
//   },
//   {
//     "title": "Traveling the World as a Digital Nomad",
//     "category": "lifestyle",
//     "image": "lifestyle-image-2.jpg",
//     "shortDesc": "Embrace the digital nomad lifestyle and work remotely from exotic locations.",
//     "longDesc": "Discover the freedom of working and traveling simultaneously, and the adventures it brings.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:27.350+00:00"
//   },
//   {
//     "title": "Trends and Style Guides",
//     "category": "fashion",
//     "image": "fashion-image-1.jpg",
//     "shortDesc": "Stay fashionable with the latest trends and style tips.",
//     "longDesc": "Upgrade your wardrobe, stay on top of fashion trends, and express your personal style.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:32.350+00:00"
//   },
//   {
//     "title": "Sustainable Fashion Choices",
//     "category": "fashion",
//     "image": "fashion-image-2.jpg",
//     "shortDesc": "Make eco-friendly fashion choices and contribute to a greener world.",
//     "longDesc": "Explore sustainable fashion options, ethical brands, and eco-conscious shopping practices.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:37.350+00:00"
//   },
//   {
//     "title": "Mastering Sports Techniques",
//     "category": "sports",
//     "image": "sports-image-1.jpg",
//     "shortDesc": "Improve your athletic skills and excel in your favorite sports.",
//     "longDesc": "Learn from experts, practice, and achieve excellence in various sports and physical activities.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:42.350+00:00"
//   },
//   {
//     "title": "Wellness through Yoga and Meditation",
//     "category": "sports",
//     "image": "sports-image-2.jpg",
//     "shortDesc": "Achieve mental and physical wellness through yoga and meditation.",
//     "longDesc": "Discover the benefits of yoga and meditation for a healthier and more balanced lifestyle.",
//     "user":"shahidafridi017018@gmail.com",
//     "createdAt": "2023-11-06T19:33:47.350+00:00"
//   }
// ]

