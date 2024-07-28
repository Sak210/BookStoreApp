import React, { useState, useEffect } from 'react';
import Cards from '../Components/Cards';
import axios from "axios";
import {Link} from 'react-router-dom';
function Course() {

  const[book,setBook] = useState([]);
  useEffect(() =>{
    const getBook = async () => {
      try {
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);

  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We are delighted to have you {" "}
          <span className='text-pink-500'>Here!! :)</span>
          </h1>
          <p>
          We are absolutely thrilled to have you on board our BookStore App! 
          Our shelves are stocked with a vast collection of titles, and we can't
          wait for you to discover new authors, genres, and stories. Whether you're a 
          bookworm or just looking for a new adventure, we're confident you'll find something that sparks your imagination.
          We're delighted to have you here, and we hope you'll make our app your go-to destination for all things books!
          </p>
          <Link to="/">
            <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'> 
            Back 
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Course;
