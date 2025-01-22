import Link from 'next/link'
import React from 'react'
import LaUserFriends from '../icons/LaUserFriends'
import FluentPeopleCommunity32Regular from '../icons/FluentPeopleCommunity32Regular'
import IconamoonHeartThin from '../icons/IconamoonHeartThin'
import FamiconsNotificationsOutline from '../icons/FamiconsNotificationsOutline'

function BottonMenu() {
  return (
    <div className='flex fixed bottom-0 bg-gray-300 w-full place-content-center items-center px-6 py-3 justify-between'>
        <Link href=""><LaUserFriends className="fill-gray-950" /></Link>
        <Link href="/comunity"><FluentPeopleCommunity32Regular className="fill-gray-950" /></Link>
        <Link href="/favorite"><IconamoonHeartThin className="fill-gray-950" /></Link>
        <Link href="/notifications"><FamiconsNotificationsOutline className="fill-gray-950" /></Link>
    </div>
  )
}

export default BottonMenu

