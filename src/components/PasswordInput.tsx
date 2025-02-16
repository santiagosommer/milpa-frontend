"use client"

import { Input } from "../components/Input"
import { Label } from "./Label"

export const PasswordInput = () => (
  <div className="mx-auto max-w-xs space-y-2">
    <Label htmlFor="password">Insert Password</Label>
    <Input
      className="w-full"
      placeholder="Enter password"
      type="password"
      id="password"
    />
  </div>
)

export default PasswordInput