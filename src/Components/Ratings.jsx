import React from 'react'
import { FaStar } from "react-icons/fa";

const Ratings = ({ rating, onClick, style}) => {
  return (
    <div className='flex items-center gap-2'>
        {[...Array(5)].map((_, i) => (
            <p className='' key={i} onClick={() => onClick(i)}>
                {rating > i ? (
                    <FaStar style={style} className='text-[1.2rem] text-blue-500'  />
                    
                ) : (
                    <FaStar style={style} className='text-[1.2rem] text-gray-400'  />
                )}
            </p>
        ))}
    </div>
  )
}

export default Ratings;
