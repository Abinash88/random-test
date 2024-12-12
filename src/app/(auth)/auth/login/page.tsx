import { TextComp } from "@/components/auth/auth-components/auth-text";
import MoreLogins from "@/components/auth/auth-components/more-logins";
import MainLoginForm from "@/components/auth/login";

export default function LoginPage() {
  return (
    <div className="">
      <div className="">
        <TextComp variant={"auth_title"} className=''>Welcome! 👋 Login Here.</TextComp>
        <TextComp variant={"auth_p"}>log in to explore exclusive deals, personalized  effortless shopping.</TextComp>
      </div>
      <MainLoginForm />
      <MoreLogins />
    </div>
  )
} 
