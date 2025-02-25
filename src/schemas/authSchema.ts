import * as yup from "yup";

// Custom validation function for email TLD
const emailValidation = yup.string()
  .email("Invalid email address")
  .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/, {
    message: "Invalid top-level domain",
    excludeEmptyString: true,
  })
  .required("Email is required");

// Form validation sign up schema definition
const authSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
  country: yup.string().required("Country is required"),
  department: yup.string().required("Department is required"),
  userType: yup.string().required("User Type is required"),
  email: emailValidation,
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export { emailValidation, authSchema };