import BottonMenu from '@/components/bottom-menu/BottonMenu'
import React from 'react'

function page() {
  return (
    <>
    <div className='flex-col w-full bg-background place-content-center items-center mt-12 p-6'>
      <h1 className='text-gray-300'>Fvorites Page</h1>
    </div>
    <BottonMenu />
    </>
  )
}

export default page
