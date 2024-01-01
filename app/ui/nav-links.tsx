'use-client';

import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinks = () => {
    const links = [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
        { name: 'Add Student', href: '/add-student', icon: PlusIcon },
        { name: 'Find Student', href: '/find-student', icon: MagnifyingGlassIcon },
        { name: 'Edit Student', href: '/edit-student', icon: PencilSquareIcon },
        { name: 'Delete Student', href: '/delete-student', icon: TrashIcon },
    ]

    // const pathname = usePathname();
    return (
        <div className='flex flex-col p-3 min-h-[90vh] z-40'>
            <div className='flex-1'>
                {
                    links.map((link) => {
                        const LinkIcon = link.icon
                        return (
                            <Link
                                className='flex items-center p-3 text-sm gap-2 rounded-md bg-gray-50 transition-colors hover:bg-gray-600 hover:text-white'
                                key={link.name}
                                href={link.href}>
                                <LinkIcon className='w-6' />
                                <p>{link.name}</p>
                            </Link>
                        )
                    })
                }
            </div>

            <Link
                className='flex items-center p-3 text-sm gap-2 rounded-md bg-gray-50 transition-colors hover:bg-gray-600 hover:text-white'
                key={'Sign out'}
                href='/signout'>
                <ArrowLeftStartOnRectangleIcon className='w-6' />
                <p>Sign out</p>
            </Link>

        </div>
    )
}

export default NavLinks