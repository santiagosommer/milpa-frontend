"use client"

import { Input } from "./Input"
import { Label } from "./Label"

export const EmailInput = () => (
  <div className="mx-auto max-w-xs space-y-2">
    <Label htmlFor="email">Insert Email</Label>
    <Input placeholder="Enter email" id="email" name="email" type="email" />
  </div>
)

export default EmailInput