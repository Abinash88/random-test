import Image from '@/components/ui/Image'
import type { _LayoutProps } from '@/types/global'

export default function AuthLayout({ children }: _LayoutProps) {
  return (
    <div className=" flex items-center h-[100dvh] w-full justify-center overflow-y-auto">
      <div className='flex flex-col w-[90%] py-5 items-center m-auto'>
        <div className='flex flex-col pt-4'>
          <div className="flex flex-col mb-5 ">
            <Image className='h-[100px] w-auto object-contain' alt='M-commerce logo' src={"/logos/logo.png"} />
            <p className='md:text-xl text-lg text-center  font-semibold text-gradient'>Flexo</p>
          </div>
          {
            children
          }
        </div>
      </div>
    </div>
  )
}
