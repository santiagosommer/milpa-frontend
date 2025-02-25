"use client"

import { useFormContext } from "react-hook-form"
import { Input } from "./Input"
import { Label } from "./Label"

interface FieldInputProps {
  fieldType: string;
}

export const FieldInput = ({ fieldType }: FieldInputProps) => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div className="mx-auto max-w-xs space-y-2">
      <Label htmlFor={fieldType}>Insert {fieldType}</Label>
      <Input
        className="w-full"
        placeholder={`Insert ${fieldType}`}
        type="text"
        id={fieldType}
        {...register(fieldType, { required: `${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)} is required` })}
      />
      {/* Displays the error message if the field is not provided */}
      {errors[fieldType]?.message && typeof errors[fieldType]?.message === 'string' && (
        <p className="text-red-500 text-sm">{errors[fieldType].message}</p>
      )}
    </div>
  )
}

export default FieldInput