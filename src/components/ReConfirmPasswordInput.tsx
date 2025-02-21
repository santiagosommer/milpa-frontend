"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "../components/Input"
import { Label } from "./Label"

export const ReConfirmPasswordInput = () => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div className="mx-auto max-w-xs space-y-2">
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input
        className="w-full"
        placeholder="Confirm password"
        type="password"
        id="confirmPassword"
        {...register("confirmPassword", { required: "Confirm Password is required" })}
      />
      {errors.confirmPassword?.message && typeof errors.confirmPassword.message === 'string' && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}
    </div>
  )
}

export default ReConfirmPasswordInput