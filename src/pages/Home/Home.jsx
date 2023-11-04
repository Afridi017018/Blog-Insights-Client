import React from 'react';
import Banner from '../../components/Bnanner/Banner';
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import CreateBlog from '../../components/CreateBlog/CreateBlog';


const Home = () => {
    return (
        <div>
           <Banner />
           <RecentBlogs />
           <CreateBlog />
           <NewsLetter />
           
        </div>
    );
};

export default Home;