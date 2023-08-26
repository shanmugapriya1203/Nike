import React from 'react';
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
      <img
        src={imgURL}
        alt='customer'
        className='w-20 h-20 mx-auto rounded-full mb-4 object-cover'
      />
      <p className='text-gray-600 mb-4'>{feedback}</p>
      <div className='flex items-center justify-center mb-2'>
        <img
          src={star}
          width={18}
          height={18}
          alt='rating star'
          className='mr-1'
        />
        <p className='text-gray-700 font-semibold text-sm'>{rating}</p>
      </div>
      <h3 className='text-lg font-semibold text-gray-900'>{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
