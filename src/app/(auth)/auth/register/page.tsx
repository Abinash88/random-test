import { TextComp } from '@/components/auth/auth-components/auth-text'
import MoreLogins from '@/components/auth/auth-components/more-logins'
import RegisterForm from '@/components/auth/register'
import BackOption from '@/components/reusables/back-option'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="max-w-[400px] w-full">
      <div className="fixed top-8 left-2">
        <BackOption link="/auth/login" />
      </div>
      <div className="">
        <TextComp variant={"auth_title"} className=''>Create an Account</TextComp>
        <TextComp variant={"auth_p"}>Join us Today and start shopping.</TextComp>
      </div>
      <RegisterForm />
      <TextComp variant={"auth_p"} className="mt-7 mb-4">
        Have an Account?
        {" "}
        <Link className="text-dark-600 underline" href={'/auth/login'}>Login Here.</Link>
      </TextComp>
      <MoreLogins />
    </div>
  )
}
