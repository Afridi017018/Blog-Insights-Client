import React from 'react';
import WishListCard from '../WishListCard/WishListCard';

const WishListCards = () => {
    return (
        <div className='grid container my-5 mx-auto gap-5'>
      
            <WishListCard />
            <WishListCard />
            <WishListCard />
            <WishListCard />
        </div>
    );
};

export default WishListCards;