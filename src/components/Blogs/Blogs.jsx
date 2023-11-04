import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    return (
        <div>
            {/* <div>
            <h2 className='text-4xl font-bold text-gray-700 mt-10 text-center'>Our Services</h2>
        </div> */}
            <div className='container lg:mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 justify-center items-center place-items-center'>

                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />

            </div>
        </div>
    );
};

export default Blogs;