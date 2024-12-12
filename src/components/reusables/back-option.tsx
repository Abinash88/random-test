import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { TextComp } from '../auth/auth-components/auth-text'
import ButtonWithIcon from '../ui/buttons-components/button-with-icon'

export default function BackOption({ link, className }: { link: string, className?: string }) {
  return (
    <Link href={link} className='flex items-center gap-1 '>
      <ButtonWithIcon size={'sm'} variant={"ghost"} icon={<ChevronLeft className={cn(` md:size-6 text-dark-500 size-5`, className)} />}>
        <TextComp className='text-dark-500' variant={'auth_p'}>Back</TextComp>
      </ButtonWithIcon>
    </Link>
  )
}
