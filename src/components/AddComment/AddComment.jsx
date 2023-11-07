import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const AddComment = ({id, mySwitch, setMySwitch, user, blogOwner}) => {
    // console.log(user);
    // console.log(blogOwner)
    // const {user} = useAuth();
    const axios = useAxios();
    
const navigate = useNavigate();
    const handleAddComment = async (e) => {
        e.preventDefault();
        if(!user)
        {
            navigate("/login");
            return;
        }
       await axios.post(`/add-comment`,{user: user, blogId: id, comment: e.target.comment.value})
       setMySwitch(!mySwitch);

    }


    return (
        <div className='mt-10 mb-3'>
            <div className='my-2'>
                <h2 className='text-xl font-bold text-gray-600 underline underline-offset-4'>Comments</h2>
            </div>
            <form onSubmit={handleAddComment} className={`${user === blogOwner ? 'hidden' : "flex" }`}>
                <textarea
                    className='border h-14 w-96 px-2 outline-none rounded-l'
                    name='comment'
                    placeholder='Enter your comment...'
                    required
                />
                <button
                    type='submit'
                    className="bg-green-700 text-white h-14 w-32 px-3 rounded-r"
                >
                    Add Comment
                </button>
            </form>
        </div>
    );
};

export default AddComment;