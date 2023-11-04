import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <div className="hero h-72" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/office-supplies-background_1009245-1934.jpg?w=740)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Subscribe To Our Newsletter</h1>
      <form action="">
        <input type="text" required placeholder='your email' className='px-2 w-72 h-10 rounded-l outline-none'/>
        <button className='bg-red-700 px-4 h-10 rounded-r text-white'>Subscribe</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsLetter;