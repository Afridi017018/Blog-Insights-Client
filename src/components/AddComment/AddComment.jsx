import React from 'react';

const AddComment = () => {
    return (
        <div className='mt-10 mb-5'>
            <div className='my-2'>
                <h2 className='text-xl font-bold text-gray-600'>Comments</h2>
            </div>
            <div className='flex'>
                <textarea className='border h-14 w-96 px-2 outline-none rounded-l'></textarea>
                <button className='bg-green-700 text-white h-14 w-32 px-3 rounded-r'>Add Comment</button>
            </div>
        </div>
    );
};

export default AddComment;