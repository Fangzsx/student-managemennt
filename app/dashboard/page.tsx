import React from 'react'
import Card, { DataType } from '../ui/dashboard/card'


const page = () => {
  const data: { name: string; value: number; type: DataType }[] = [
    { name: 'Total students', value: 100, type: 'totalStudents' },
    { name: 'No. of regular students', value: 39, type: 'totalRegular' },
    { name: 'No. of irregular students', value: 61, type: 'totalIrregular' },
    { name: 'No. of male students', value: 30, type: 'totalMale' },
    { name: 'No. of female students', value: 7, type: 'totalFemale' },
    { name: 'Course Summary', value: 100, type: 'courseSummary' },
  ];

  return (
    <div className='flex flex-col items-end p-4'>
      <div className='grid grid-cols-1 w-4/6 md:grid-cols-4 md:w-4/6 gap-4 sm:w-3/5 sm:grid-cols-2 lg:w-4/5 z-10'>
        {
          data.map(d => {
            return (
              <Card title={d.name} value={d.value} type={d.type} />
            )
          })
        }

      </div>

    </div>
  )
}

export default page