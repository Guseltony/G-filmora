import React from 'react'

export const MovieTab = ({t, activeTab, onclick }) => {
return (
    <div>
        <p
            className={`${activeTab === t ? 'bg-[#ef4444] scale-105' : 'bg-transparent'} transition-all duration-500 ease-in-out text-xs lg:text-base text-white capitalize px-6 py-1  rounded-full `}
            onClick={() => onclick()}> {t}
        </p>
    </div>
)
}
