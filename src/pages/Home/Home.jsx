import React from 'react';
import Banner from '../../components/Bnanner/Banner';
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs';
import NewsLetter from '../NewsLetter/NewsLetter';


const Home = () => {
    return (
        <div>
           <Banner />
           <RecentBlogs />
           <NewsLetter />
        </div>
    );
};

export default Home;