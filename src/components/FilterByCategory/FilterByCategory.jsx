import React from 'react';

const FilterByCategory = ({categoryFilter,setCategoryFilter}) => {

    const category = [
        "travel",
        "food",
        "health",
        "technology",
        "lifestyle",
        "fashion",
        "sports",
      ]

    return (
        <div>
            <select className='border px-2 h-12 rounded' defaultValue={categoryFilter} onChange={(e)=> setCategoryFilter(e.target.value)}>
                <option value="">All Categories</option>
                {
                category.map((element, index)=>(
                  <option key={index+1} value={element} > {element.charAt(0).toUpperCase() + element.slice(1)}</option>
                ))
              }

            </select>
        </div>
    );
};

export default FilterByCategory;