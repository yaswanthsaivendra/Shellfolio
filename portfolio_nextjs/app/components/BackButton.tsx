import React from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link  from 'next/link';

const BackButton = ({path} : {
    path : string
}) => {
  return (
    <div className='justify-end flex'>
        <Link href={path} className='pr-16 pt-8 z-50 flex items-center space-x-2 cursor-pointer hover:text-primary transition-all duration-200'>
            <IoArrowBackCircleOutline size={24}/>
            <p className='text-lg'>back</p>
        </Link>
    </div>
  )
}

export default BackButton