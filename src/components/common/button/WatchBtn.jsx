import React from 'react'
import { FaTv } from 'react-icons/fa6'
import { IoPlaySharp } from 'react-icons/io5'

export const WatchBtn = ({text}) => {
return (
    <div>
        <button className='relative flex flex-row gap-4 items-center justify-center px-4 py-2 group overflow-hidden hover:border-[#ad16a1] duration-500 cursor-pointer md:h-14 md:w-48 w-36 h-12 bg-[#10b981]/[0.10] rounded-4xl'>
            <div className='absolute z-10 w-40 h-40 rounded-full group-hover:scale-125 transition-all duration-500 ease-in-out bg-[#10b981]/[0.20] delay-150 group-hover:delay-100'></div>
            <div className='absolute z-10 w-48 h-48 rounded-full group-hover:scale-125 transition-all duration-500 ease-in-out bg-[#10b981]/[0.30] delay-150 group-hover:delay-180'></div>
            <div className='absolute z-10 w-32 h-32 rounded-full group-hover:scale-125 transition-all duration-500 ease-in-out bg-[#10b981]/[0.40] delay-150 group-hover:delay-150'></div>
            <div className='absolute z-10 w-24 h-24 rounded-full group-hover:scale-125 transition-all duration-500 ease-in-out bg-[#10b981]/[0.70] delay-150 group-hover:delay-200'></div>
            <div className='absolute z-10 w-16 h-16 rounded-full group-hover:scale-125 transition-all duration-500 ease-in-out bg-[#10b981] delay-150 group-hover:delay-300'></div>
            <FaTv size={20} className='z-20' strokeWidth={3} />
            <p className='uppercase text-sm font-extrabold z-20 transition-all group-hover:tracking-widest'>{ text }</p>
            
        </button>
    </div>
)
}
