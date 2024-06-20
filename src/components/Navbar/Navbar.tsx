
import { getSignInUrl, getUser, signOut } from '@workos-inc/authkit-nextjs';
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
    const { user } = await getUser();
    const signInUrl = await getSignInUrl();



    return (
        <header>
            <div className=' flex items-center justify-between mx-auto my-4 container'>
                <Link className='font-bold text-xl' href={"/"}>Job Board</Link>
                <nav className='flex gap-2'>
                    {!user && (
                        <Link className='bg-gray-200 py-2 px-4 rounded-md' href={signInUrl}>Login</Link>
                    )}
                    {user && (
                        <form
                            action={async () => {
                                'use server';
                                await signOut();
                            }}
                        >
                            <button type="submit" className='py-2 px-4 rounded-md bg-gray-200 '>
                                Logout 
                            </button>
                        </form>

                    )}
                    <Link className='bg-blue-600 text-white py-2 px-4 rounded-md' href={"/new-listing"}>
                        Post a job
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar