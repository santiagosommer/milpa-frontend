import { Card } from './Card';
import { Button } from "../components/Button";
import EmailInput from "../components/EmailInput";

export const LoginCard = () => (
  <Card className="mx-auto max-w-lg">
    <div>
      <h1>Login</h1>
      <p>This is the minimal working example of a Login route.</p>
      <EmailInput />
      <br />
      <Button type="submit">Log in</Button>
    </div>
  </Card>
);

export default LoginCard;