import React from 'react';

const FilterByCategory = () => {
    return (
        <div>
            <select className='border' defaultValue="" onChange={(e)=> console.log(e.target.value)}>
                <option value="" disabled>All Categories</option>
                <option value="tour">Tour</option>
                <option value="travel">Travel</option>

            </select>
        </div>
    );
};

export default FilterByCategory;