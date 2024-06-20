import { getUser } from '@workos-inc/authkit-nextjs'
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";


const NewListing = async () => {
    const { user } = await getUser();

    if (!user) {
        return (
            <div className='container'>

                <div>You need to be logged in to post a job</div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div>
                <h2 className='text-lg mt-6'>Your companies</h2>
                <p className='text-gray-500 text-sm mb-2'>
                    Select a company to create a job add
                </p>
                <div className="border border-blue-300 bg-blue-100 p-4 rounded-md">
                    No companies found
                </div>

                <h2 className='text-lg mt-6'>Create a new company</h2>
                <p className='text-gray-500 text-sm mb-2'>
                    To create job listing your first need to register a company
                </p>
                <form action="" className='flex gap-2'>
                    <input
                        className='p-2 border border-gray-400 rounded-md focus:outline-none'
                        type="text"
                        placeholder='company name'
                    />
                    <button className='flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md'>
                        Create a company <FaLongArrowAltRight className='h-6' />

                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewListing