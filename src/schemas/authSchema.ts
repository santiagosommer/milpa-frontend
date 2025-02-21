import * as yup from "yup";

// Custom validation function for email TLD
const emailValidation = yup.string()
  .email("Invalid email address")
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address")
  .required("Email is required");

export { emailValidation };