import { ASSESTS } from '@/assests'
import ButtonWithIcon from '@/components/ui/buttons-components/button-with-icon'
import { TextComp } from './auth-text'

export default function MoreLogins() {
  return (
    <div className='w-full'>
      <TextComp variant={"auth_p"} className='flex items-center justify-center my-5  gap-2'>
        <span className='w-20 h-0.5 bg-border'></span>
        Or,
        <span className='w-20 h-0.5 bg-border'></span>
      </TextComp>
      <div className="flex xs:flex-row flex-col gap-2 xs:gap-3">
        <ButtonWithIcon img={ASSESTS.GOOGLE} imgClass='size-7' className='rounded-full gap-2 flex-1' variant={'outline'}>Login with Google</ButtonWithIcon>
        <ButtonWithIcon img={ASSESTS.FACEBOOK} imgClass='size-6 ' className='rounded-full gap-2 flex-1' variant={'outline'}>Login with Facbook</ButtonWithIcon>
      </div>
    </div>
  )
}
