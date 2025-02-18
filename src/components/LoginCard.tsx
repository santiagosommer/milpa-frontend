import { Card } from './Card';
import { Button } from "../components/Button";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './LoginCard.css';

const schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const LoginCard = () => {

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  return(
    <FormProvider {...methods}>
      <Card className="login-card mx-auto max-w-lg">
        <form onSubmit={methods.handleSubmit(onSubmit)}  className="flex flex-col items-center justify-center p-4 space-y-4">
          <h1 className="login-title text-2xl font-bold text-gray-900 dark:text-gray-50">Login</h1>
          <p className="login-text font-bold">Welcome back!</p>
          <div className="text-input w-full max-w-xs">
            <EmailInput />
            <PasswordInput />
          </div>
          <Button type="submit" className="login-button w-full max-w-xs" variant="primary">Log in</Button>
        </form>
      </Card>
    </FormProvider>
  );
}

export default LoginCard;