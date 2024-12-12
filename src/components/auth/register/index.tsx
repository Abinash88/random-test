"use client"

import Button from '@/components/ui/buttons-components/button'
import { Form } from '@/components/ui/form'
import FormInput from '@/components/ui/form-components/form-input'
import { RegisterSchema, type RegisterSchemaTypes } from '@/schema/auth-schema/schema.register'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { TextComp } from '../auth-components/auth-text'

export default function RegisterForm() {

  const router = useRouter()

  const form = useForm<RegisterSchemaTypes>({
    resolver: zodResolver(RegisterSchema),
    mode: "onSubmit",
    values: {
      email: "",
      password: "",
      username: "",
    }
  })

  const onSubmit = () => {

  }

  return (
    <div className='w-full mt-4 md:mt-7'>
      <Form {...form}>
        <form className=' space-y-3 3xl:space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput
            name='username'
            required
            labelClass=" md:block hidden"
            form={form}
            label='User Name'
            input={{ type: "email", placeholder: "User Name" }}
          />
          <FormInput
            name='email'
            required
            labelClass=" md:block hidden"
            form={form}
            label='Email'
            input={{ type: "email", placeholder: "Email Address" }}
          />
          <FormInput
            name='password'
            required
            labelClass=" md:block hidden"
            form={form}
            label='Password'
            input={{ type: "password", placeholder: "Password" }}
          />
          <div className="flex justify-between gap-4 pb-3 xs:flex-row flex-col md:gap-0 ">
            <TextComp className='leading-[160%] text-left md:text-xs text-[10px]' variant={"auth_p"}>
              By signing, you agree to our {" "}
              <Link className='underline text-dark-600' href={"/privacy-policy"}> Privacy Policy </Link>
              {" "}
              &
              {" "}
              <Link className='underline text-dark-600' href={"/privacy-policy"}> Terms and Conditions </Link>
            </TextComp>
          </div>
          <Button onClick={() => router.push("/auth/otp")} className='w-full' variant={"dark"}>Submit </Button>
        </form>
      </Form>
    </div>
  )
}
