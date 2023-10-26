import React from 'react'

const AddBook = () => {
  return (
    <div className='flex flex-col m-10 gap-2'>
        <input className='border border-black p-1 rounded-md' type="text" name="isbn13" id="" placeholder='ISBN13' />
        <input className='border border-black p-1 rounded-md' type="text" name="title" id="" placeholder='Title' />
        <input className='border border-black p-1 rounded-md' type="text" name="authors" id="" placeholder='Author' />
        <input className='border border-black p-1 rounded-md' type="text" name="categories" id="" placeholder='Categories' />
        <div className='flex justify-between'>
            <input className='border border-black p-1 rounded-md w-[80rem]' type="text" name="thumbnail" id="" placeholder='ImageURL'/>
            <button className='border border-black rounded-md text-[17px] p-1'>Add By Link</button>
        </div>
        <input className='border border-black p-1 rounded-md' type="text" name="description" id="" placeholder='Description'/>
        <input className='border border-black p-1 rounded-md' type="text" name="published_year" id="" placeholder='Published Year'/>
        <input className='border border-black p-1 rounded-md' type="text" name="average_rating" id="" placeholder='Average Rating' />
        <input className='border border-black p-1 rounded-md' type="text" name="num_pages" id="" placeholder='Pages' />
    </div>
  )
}

export default AddBook