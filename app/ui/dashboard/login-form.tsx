import React from 'react'
import Button from '../Button'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

const LoginForm = () => {
    return (
        <form className='h-full'>
            <div className='flex flex-col w-fit mt-10'>
                <h1 className='mb-3 text-1xl text-gray-900'>Please login to continue</h1>
                <div>
                    <label className='block mb-3 text-xs text-gray-900 mt-5' htmlFor='email'>Email</label>
                    <input className='rounded-md border border-gray-200 py-[9px] pl-2' name='email' type='email' />
                </div>
                <div className='mt-4'>
                    <label className='block mb-3 text-xs text-gray-900' htmlFor='password'>Password</label>
                    <input className='rounded-md border border-gray-200 py-[9px] pl-2' name='password' type='text' />
                </div>
                <Link key='signin' href='/dashboard' className='flex justify-between mt-6 bg-gray-900 px-4 py-2 rounded-md text-white transition-colors hover:bg-gray-600'>
                    <span className='h-full'>Login</span>
                    <ArrowRightIcon className='w-5' />
                </Link>
            </div>
        </form>
    )
}

export default LoginForm