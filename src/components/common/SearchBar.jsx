import React from 'react'

export const SearchBar = () => {

    const styles = {
        background: 'transparent',
        outline: 'none',
        padding: '4px',
        color: '#fff',
        border: '2px solid green',
        width: '100%'
    }

  return (
    <div className='border-2 border-red-800 w-[50%] mt-10 '>
        <input type="text" placeholder='enter movies title, author, genre . . .' style={styles} />
    </div>
  )
}
