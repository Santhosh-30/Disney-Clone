import React from 'react'

function HeaderItem({ name, Icon }) {
  return (
    <div className='text-white flex items-center gap-2 hover:underline underline-offset-8 cursor-pointer'>
      <Icon />
      <h2>{name}</h2>

    </div>
  )
}

export default HeaderItem