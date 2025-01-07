import React from 'react'
import HeroiconsBars4Solid from '@/components/icons/HeroiconsBars4Solid';
import QlementineIconsUser16 from '@/components/icons/QlementineIconsUser16';

function NavBar() {
  return (
    <div className='flex items-center place-content-between bg-background p-2 border-b-[0.2px] border-b-gray-300'>
      <HeroiconsBars4Solid />
      <h1 className='text-gray-300 text-lg'>Taste<br />Share</h1>
      <QlementineIconsUser16 />
    </div>
  )
}

export default NavBar
