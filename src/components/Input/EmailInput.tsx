"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "./Input"
import { Label } from "./Label"

export const EmailInput = () => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div className="mx-auto max-w-xs space-y-2">
      <Label htmlFor="email">Insert Email</Label>
      <Input 
        className="w-full"
        placeholder="Enter email"
        id="email"
        type="email"
        {...register("email")}
      />
      {errors.email?.message && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
    </div>
  )
}

export default EmailInput