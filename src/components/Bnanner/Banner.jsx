import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className="hero min-h-[554px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/man-surfing-net-laptop-coffee-break-generated-by-ai_188544-20377.jpg?t=st=1699111772~exp=1699115372~hmac=4ef9422a0cca6e29a1bd7843315891a87c97f39364592cdd1d1d2fff5439bfb5&w=826' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='flex justify-center'>
                            <img className='h-16 w-52' src="/techlogo.png" alt="" />
                        </div>
                        <h1 className="mb-5 text-4xl font-bold">Your Portal to the World of Blogging</h1>
                        <p className="mb-5">Embark on a journey of exploration across diverse topics, gaining inspiration and igniting your curiosity. Join us in uncovering hidden gems and sharing the excitement of discovery in the ever-evolving world of knowledge and ideas.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;