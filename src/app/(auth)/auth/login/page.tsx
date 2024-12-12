import { TextComp } from "@/components/auth/auth-components/auth-text";
import MoreLogins from "@/components/auth/auth-components/more-logins";
import MainLoginForm from "@/components/auth/login";
import BackOption from "@/components/reusables/back-option";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-[400px] w-full">
      <div className="fixed top-8 left-2">
        <BackOption link="/" />
      </div>
      <div>
        <TextComp variant={"auth_title"} className=''>Welcome! 👋 Login Here.</TextComp>
        <TextComp variant={"auth_p"}>log in to explore exclusive deals, personalized  effortless shopping.</TextComp>
      </div>
      <MainLoginForm />
      <TextComp variant={"auth_p"} className="mt-7 mb-4">
        Haven't signup yet? {" "}
        <Link className="text-dark-600 underline" href={'/auth/register'}>SignUp Here.</Link>
      </TextComp>
      <MoreLogins />
    </div>
  )
} 
