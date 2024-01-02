import React from 'react'

const layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <section className='max-h-[100vh] overflow-y-auto'>
            {children}
        </section>
    )
}

export default layout