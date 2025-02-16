import { Card } from './Card';
import { Button } from "../components/Button";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";

export const LoginCard = () => (
  <Card className="mx-auto max-w-lg">
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-gray-600">Welcome back!</p>
      <div className="w-full max-w-xs">
        <EmailInput />
      </div>
      <div className="w-full max-w-xs">
        <PasswordInput />
      </div>
      <Button type="submit" className="w-full max-w-xs">Log in</Button>
    </div>
  </Card>
);

export default LoginCard;