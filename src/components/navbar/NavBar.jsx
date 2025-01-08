import React from 'react'
import HeroiconsBars4Solid from '@/components/icons/HeroiconsBars4Solid';
import QlementineIconsUser16 from '@/components/icons/QlementineIconsUser16';
import Link from 'next/link';




function NavBar({toggleMenu}) {
  return (
    <div className='relative flex items-center place-content-between bg-background p-4 border-b-[0.2px] border-b-gray-300'>
      <HeroiconsBars4Solid onClick={toggleMenu}/>
      <Link href="/taste-share"><img src='/logo.jpg' className='w-6' /></Link>
      <Link href="/log"><button className='bg-gray-300 text-gray-950 font-semibold mb-2 rounded-lg py-1 px-3 '>Login</button></Link>
      
    </div>
  )
}

export default NavBar
