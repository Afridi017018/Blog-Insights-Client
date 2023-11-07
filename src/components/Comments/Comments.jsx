import React from 'react';
import Comment from '../Comment/Comment';

const Comments = ({comments}) => {
// console.log(comments)
    return (
        <div>
            {
                   comments.length > 0 &&
                    comments.map((comment)=>(
                        <Comment key={comment._id} comment={comment} />
                    ))
                }

        </div>
    );
};

export default Comments;