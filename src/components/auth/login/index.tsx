import { Form } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, type LoginSchemaTypes } from '@/schema/auth-schema/schema.login'

export default function MainLoginForm() {

  const form = useForm<LoginSchemaTypes>({ resolver: zodResolver(LoginSchema) })

  const onSubmit = () => {

  }

  return (
    <div className='w-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

        </form>
      </Form>
    </div>
  )
}
