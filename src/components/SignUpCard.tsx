// Form validation: https://react-hook-form.com/get-started
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import { Button } from "./Button";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { Card } from './Card';
import ReConfirmPasswordInput from "./ReConfirmPasswordInput";

// Styles
import './LoginCard.css';

// Custom validation function for email TLD
const emailValidation = yup.string()
  .email("Invalid email address")
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
  .required("Email is required");

// Form validation schema definition
const schema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const SignUpCard = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string; password: string; confirmPassword: string }) => {
    // Send data to backend here
    console.log(data.email, data.password, data.confirmPassword);
  };

  return(
    // FormProvider is intented for deeply nested structures
    // The idea is to develop the form structure in the future, hence the use of FormProvider
    <FormProvider {...methods}>
      <Card className="login-card mx-auto max-w-lg">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center p-4 space-y-4">
          <h1 className="login-title text-2xl font-bold text-gray-900 dark:text-gray-50">Sign Up</h1>
          <p className="login-text font-bold">Create your account</p>
          <div className="text-input w-full max-w-xs">
            <EmailInput />
            <PasswordInput />
            <ReConfirmPasswordInput />
          </div>
          <Button type="submit" className="login-button w-full max-w-xs" variant="primary">Sign Up</Button>
        </form>
      </Card>
    </FormProvider>
  );
};

export default SignUpCard;