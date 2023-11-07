import React from 'react';

const Search = ({search,setSearch}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        const inputValue = e.target.search.value;
        setSearch(inputValue.trim());
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className='flex justify-center items-center'>
                    <input type="text" name='search' defaultValue={search} placeholder='Search ...' className='w-72 lg:w-96 h-12 border px-2 rounded-l outline-none' />
                    <button type='submit' className='bg-green-700 text-white h-12 px-2 w-20 rounded-r'>Search</button>
                </div>
            </form>
        </div>
    );
};

export default Search;
