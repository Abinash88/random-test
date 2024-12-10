import { Container } from '@/components/reusables'
import Image from '@/components/ui/Image'
import type { _LayoutProps } from '@/types/global'
import React from 'react'

export default function AuthLayout({ children }: _LayoutProps) {
  return (

    <Container className='flex flex-col'  >
      <Container className='flex flex-col' variant={'centered'} >
        <div className="flex flex-col mb-5 ">
          <Image className='h-[100px] w-auto object-contain' alt='M-commerce logo' src={"/logos/logo.png"} />
          <p className='md:text-xl text-lg text-center  font-semibold text-gradient'>Flexo</p>
        </div>
        {
          children
        }
      </Container>
    </Container>
  )
}
