import React from 'react'
import Logo from "../../assets/images/image 5.png"
import Image from 'next/image'
export default function MainLogo() {
  return (
    <div>
         <Image className='w-6' src={Logo} alt='main logo' />
    </div>
  )
}
