import React from 'react';

const Comment = () => {
    return (
        <div className='w-[21rem] md:w-[32rem] border p-1 my-2'>
            <div className='flex gap-2 items-center'>
                <img className='w-8 h-8 rounded-full' src="https://lh3.googleusercontent.com/-WS_25Ri5Bjk/AAAAAAAAAAI/AAAAAAAAAAA/AML38-skTcxIe20mIbw5NS-yTtFU6tqmgQ/photo.jpg?sz=46" alt="" />
                <p className='font-bold'>Shahid Afridi</p>
                
            </div>
            <div className='my-1'>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto laboriosam harum architecto assumenda voluptas reprehenderit dicta at enim voluptatem id!</p>
            </div>
        </div>
    );
};

export default Comment;