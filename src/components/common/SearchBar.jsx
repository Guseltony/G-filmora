import React from 'react'

export const SearchBar = () => {

    const styles = {
        background: 'transparent',
        outline: 'none',
        padding: '4px',
        color: '#fff',
        width: '100%'
    }

  return (
    <div className='border-b-2 border-red-800 md:w-[50%] mt-8 border-rounded bg-purple-700/80 py-2 px-2'>
        <input type="text" placeholder='enter movies title, author, genre . . .' style={styles} />
    </div>
  )
}
