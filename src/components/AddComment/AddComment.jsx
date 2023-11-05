import React from 'react';

const AddComment = () => {
    return (
        <div className='my-10'>
            <div className='my-2'>
                <h2 className='text-xl font-bold text-red-700'>Comments</h2>
            </div>
            <div className='flex'>
                <textarea className='border w-96 h-16 px-2 outline-none rounded-l'></textarea>
                <button className='bg-green-700 text-white h-16 px-3 rounded-r'>Add Comment</button>
            </div>
        </div>
    );
};

export default AddComment;