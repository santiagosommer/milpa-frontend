// Form validation: https://react-hook-form.com/get-started
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import { Button } from "./Button";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { Card } from './Card';

// Schemas
import { emailValidation } from "../schemas/authSchema";

// Styles
import './LoginCard.css';


// Form validation schema definition
const schema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required("Password is required"),
  
});

export const LoginCard = () => {

  // useForm: https://react-hook-form.com/docs/useform
  // Uses methods.handleSubmit to validate the form with the schema provided
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    fetch('https://mywebsite.example/endpoint/', { // Put endpoint here
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": data.email,
        'password': data.password,
      })
    })
  };

  return(
    // FormProvider is intented for deeply nested structures
    // The idea is to develop the form structure in the future, hence the use of FormProvider
    <FormProvider {...methods}>
      <Card className="login-card mx-auto max-w-lg">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center p-4 space-y-4">
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