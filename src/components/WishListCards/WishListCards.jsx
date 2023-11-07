import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';
import WishListCard from '../WishListCard/WishListCard';

const WishListCards = () => {

    const axios = useAxios();
    const { user } = useAuth();
    const [mySwitch, setMySwitch] = useState(false)

    const getWishlist = async () => {
        const res = await axios.get(`/get-wishlist-by-user?user=${user?.email}`);
        return res;
    }

    const { data, isLoading } = useQuery({
        queryKey: ["wishlist", user, mySwitch],
        queryFn: getWishlist,
    })


    if (isLoading || !user) {
        return <Loading />
    }

    // console.log(data.data.result)



    return (
        <div className='min-h-[320px]'>
            {data.data.result.length > 0 &&
                <div className='grid container my-5 mx-auto gap-5'>

                    {
                        data.data.result.map((element) => (
                            <WishListCard key={element._id} element={element} mySwitch={mySwitch} setMySwitch={setMySwitch} />
                        ))
                    }


                </div>}
            {
                data.data.result.length === 0 &&
                <div className='flex justify-center items-center'>
                    <img className='opacity-50' src="https://i.ibb.co/Dp8pTxh/empty-Wishlist.png" alt="" />
                </div>}
        </div>

    );
};

export default WishListCards;