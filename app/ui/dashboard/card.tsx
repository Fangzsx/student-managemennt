import React from 'react'
import { UsersIcon } from '@heroicons/react/24/outline'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'

export type DataType = 'totalStudents' | 'totalRegular' | 'totalIrregular' | 'totalMale' | 'totalFemale' | 'courseSummary';

const iconMap = {
    totalStudents: UsersIcon,
    totalRegular: AcademicCapIcon,
    totalIrregular: ArrowPathIcon,
    totalMale: UserIcon,
    totalFemale: UserIcon,
    courseSummary: BookOpenIcon

}

const Card = ({ title, value, type }: { title: string; value: number; type: DataType }) => {
    const Icon = iconMap[type]

    return (
        <div className='flex flex-col mb-4 rounded-md border border-gray-300 items-center p-4'>
            <h1 className='text-3xl mb-6 font-bold text-grey900'>{value}</h1>
            <Icon className='w-6 text-gray-900' />
            <p className='text-gray-700'>{title}</p>

        </div>
    )
}

export default Card