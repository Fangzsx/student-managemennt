import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className={`flex h-10 items-center rounded-lg bg-gray-900 text-white text-sm px-4 hover:bg-gray-600 transition-colors focus-visible:outline focus-visible:outline-2  focus-visible:outline-gray-900 active:bg-gray900 ${className}`}
            >
            {children}
        </button>
    )
}

export default Button