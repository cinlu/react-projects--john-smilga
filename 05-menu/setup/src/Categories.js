import React from 'react';

const Categories = ({categories, filterItems}) => {

  //dynamic approach which is synced to the data
  return (
    <div className='btn-container'>
      {categories.map((category, index)=> {
        return (
          <button type='button' className='filter-btn' key={index} onClick={()=> filterItems(category)}> 
            {category} 
          </button>
        )
      })}
    </div>
  )

  //manually adding each category button 
  // return (
  //   <div className='btn-container'>
  //     <button className='filter-btn' onClick={()=> filterItems('all')}> all </button>
  //     <button className='filter-btn' onClick={()=> filterItems('breakfast')}> breakfast </button>
  //     <button className='filter-btn' onClick={()=> filterItems('lunch')}> lunch </button>
  //     <button className='filter-btn' onClick={()=> filterItems('shakes')}> shakes </button>
  //   </div>
  // );
};

export default Categories;
