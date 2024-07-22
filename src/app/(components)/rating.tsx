import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({stars=5, rating=5, showRatingValue=true}: {stars?:number, rating?:number, showRatingValue?:boolean}) => {
  return (
    <div className="mt-[8px]">
    <div className="flex self-start gap-x-[8px] items-center">
      {/* Rating Stars */}
      <div className="flex">
        {new Array(stars).fill(0).map((_, index) => (
          <FaStar
            key={index}
            className={` ${
              rating && index <= rating - 1
                ? " text-[#FFAD33] opacity-100 "
                : "text-[20px] text-white opacity-25"
            }`}
          />
        ))}
      </div>
     {showRatingValue && <span>({rating})</span>}
    </div>
  </div>
  )
}

export default Rating