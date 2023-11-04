import React from 'react';
import FeatureBlog from '../FeatureBlog/FeatureBlog';

const FeatureBlogs = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center text-gray-500 my-10 underline underline-offset-8'>Recent Blogs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 container my-5 mx-auto gap-5'>
                <FeatureBlog />
                <FeatureBlog />
                <FeatureBlog />
                <FeatureBlog />
                <FeatureBlog />
                <FeatureBlog />
                

            </div>

        </div>
    );
};

export default FeatureBlogs;