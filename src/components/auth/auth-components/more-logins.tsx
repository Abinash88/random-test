import React from 'react'
import { TextComp } from './auth-text'
import ButtonWithIcon from '@/components/ui/buttons-components/button-with-icon'
import { GOOGLE } from '@/assests'

export default function MoreLogins() {
  return (
    <div className='w-full'>
      <TextComp variant={"auth_p"} className='flex items-center justify-center my-5  gap-2'>
        <span className='w-20 h-0.5 bg-border'></span>
        Or,
        <span className='w-20 h-0.5 bg-border'></span>
      </TextComp>
      <div className="">
          <ButtonWithIcon icon={GOOGLE} className='rounded-full gap-2 flex-1 w'  variant={'outline'}>Login with Google</ButtonWithIcon>
      </div>
    </div>
  )
}
