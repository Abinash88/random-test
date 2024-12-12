import Button from '@/components/ui/buttons-components/button'
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp'
import router from 'next/router'

export default function OtpForm() {


  const onSubmit = (value:string) => {
    console.log(value)

  }

  return (
    <div className='w-full mt-4 md:mt-7'>

      <InputOTP
        maxLength={5}
        className="h-fit"
        onComplete={onSubmit}
        onChangeCapture={() => { }}
        disabled={false}
        autoFocus
      >
        <InputOTPSlot index={0} className={"className"} />
        <InputOTPSlot index={1} className={"className"} />
        <InputOTPSlot index={2} className={"className"} />
        <InputOTPSlot index={3} className={"className"} />
        <InputOTPSlot index={4} className={"className"} />
      </InputOTP>

      <Button onClick={() => router.push("/auth/otp")} className='w-full' variant={"dark"}>Submit </Button>
    </div>
  )
}
