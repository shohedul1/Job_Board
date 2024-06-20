import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const JobRow = () => {
    return (
        <>
            <div className='bg-white p-6 rounded-lg shadow-sm relative'>
                <div className='absolute cursor-pointer top-4 right-4'>
                    <FaHeart className='size-6 text-gray-300' />
                </div>
                <div className='flex gap-4'>
                    <div className='content-center'>
                        <img className='size-12' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="" />
                    </div>
                    <div className='md:flex grow'>
                        <div className='grow'>
                            <div className='text-gray-500 text-sm'>Spotify</div>
                            <div className='font-bold mb-1 text-lg'>Product desingner</div>
                            <div className='text-gray-400 text-sm'>
                                Remote &middot; new York, US &middot; Full-time
                            </div>
                        </div>
                        <div className='content-end text-gray-500 text-xs'>
                            2 week ago
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobRow