"use client";
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';



const SideBar = ({ blogFileNames }: {
    blogFileNames: string[]
}) => {
    const [nav, setNav] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <aside className='hidden md:block w-64 bg-gray-800 min-h-screen fixed top-0 left-0 z-10'>
                <ul className='flex flex-col space-y-2 mt-8 mx-2'>
                    {blogFileNames.map((blogFileName, index) => (
                        <li className='' key={index}>
                            <Link href=""
                                className={`${index === activeTab ? 'bg-gray-700' : ''} flex rounded-lg hover:bg-gray-700 transition-colors duration-200 p-2`}
                                onClick={() => setActiveTab(index)}
                            >
                                <span>{blogFileName}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

            </aside>

            {/* hamburger  */}
            <div className=' text-gray-400 z-10 md:hidden'>
                {nav ? (
                    <aside className='w-64 bg-gray-800 min-h-screen fixed top-0 left-0 z-10'>
                        <div className='flex justify-start'>
                            <FaTimes size={30} onClick={() => setNav(!nav)} className='m-4 cursor-pointer' />
                        </div>
                        <ul className='flex flex-col space-y-2 mx-2'>

                            {blogFileNames.map((blogFileName, index) => (
                                <li className='' key={index}>
                                    <Link href=""
                                        className={`${index === activeTab ? 'bg-gray-700' : ''} flex rounded-lg hover:bg-gray-700 transition-colors duration-200 p-2`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <span>{blogFileName}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                ) : (
                    <div className='flex flex-col'>
                        <FaBars size={30} onClick={() => setNav(!nav)} className='m-4 cursor-pointer' />
                    </div>
                )}
            </div>

        </>
    )
}


export default SideBar