// Form validation: https://react-hook-form.com/get-started
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Components
import { Button } from "./Button";
import EmailInput from "./Input/EmailInput";
import PasswordInput from "./Input/PasswordInput";
import { Card } from './Card';
import ReConfirmPasswordInput from "./Input/ReConfirmPasswordInput";
import FieldInput from "./Input/FieldInput";

// Schemas
import {  authSchema } from "../schemas/authSchema";

// Styles
import './CreateUserCard.css';

export const CreateUserCard = () => {
  const methods = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = (data: { email: string; password: string; confirmPassword: string }) => {
    // Send data to backend here
    console.log(data.email, data.password, data.confirmPassword);
  };

  return(
    // FormProvider is intented for deeply nested structures
    // The idea is to develop the form structure in the future, hence the use of FormProvider
    <FormProvider {...methods}>
      <Card className="create-user-card mx-auto max-w-lg">
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center p-4 space-y-4">
          <h1 className="create-user-title text-2xl font-bold text-gray-900 dark:text-gray-50">User creation</h1>
          <p className="create-user-text font-bold">Create a user</p>
          <div className="text-input w-full max-w-xs">
            <FieldInput fieldType="username" />
            <FieldInput fieldType="name" />
            <EmailInput />
            <FieldInput fieldType="address" />
            <FieldInput fieldType="phone" />
            <FieldInput fieldType="country" />
            <FieldInput fieldType="department" />
            <FieldInput fieldType="userType" />
            <PasswordInput />
            <ReConfirmPasswordInput />
          </div>
          <Button type="submit" className="create-user-button w-full max-w-xs" variant="primary">Sign Up</Button>
        </form>
      </Card>
    </FormProvider>
  );
};

export default CreateUserCard;