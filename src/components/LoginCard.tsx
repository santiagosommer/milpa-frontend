import { Card } from './Card';
import { Button } from "../components/Button";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import './LoginCard.css';

export const LoginCard = () => (
  <Card className="login-card mx-auto max-w-lg">
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="login-title text-2xl font-bold text-gray-900 dark:text-gray-50">Login</h1>
      <p className="login-text font-bold">Welcome back!</p>
      <div className="text-input w-full max-w-xs">
        <EmailInput />
        <PasswordInput />
      </div>
      <Button type="submit" className="login-button w-full max-w-xs" variant="primary">Log in</Button>
    </div>
  </Card>
);

export default LoginCard;