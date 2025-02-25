"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "./Input"
import { Label } from "./Label"

export const PasswordInput = () => {
  const { register, formState: { errors } } = useFormContext()

  return(
    <div className="mx-auto max-w-xs space-y-2">
      <Label htmlFor="password">Insert Password</Label>
      <Input
        className="w-full"
        placeholder="Enter password"
        type="password"
        id="password"
        {...register("password", { required: "Password is required" })}
      />
      {/* Displays the error message if the password is not provided */}
      {errors.password?.message && typeof errors.password.message === 'string' && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}
    </div>
  )
}

export default PasswordInput