import { TextComp } from '@/components/auth/auth-components/auth-text'
import BackOption from '@/components/reusables/back-option'
import { Link } from 'lucide-react'

export default function OtpPage() {
  return (
    <div className="">
      <div className="absolute top-10 left-2">
        <BackOption link="/auth/login" />
      </div>
      <div className="">
        <TextComp variant={"auth_title"} className=''>Welcome! 👋 Login Here.</TextComp>
        <TextComp variant={"auth_p"}>log in to explore exclusive deals, personalized  effortless shopping.</TextComp>
      </div>
      <TextComp variant={"auth_p"} className="mt-7 mb-4">
        Haven't signup yet? {" "}
        <Link className="text-dark-600 underline" href={'/auth/register'}>SignUp Here.</Link>
      </TextComp>
    </div>
  )
}
