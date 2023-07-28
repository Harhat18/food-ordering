import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "must be at least 3 characters"),
  phoneNumber: Yup.number()
    .min(10, "must be at least 10 characters")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  persons: Yup.number()
    .min(1, "must be at least 1 person")
    .required("Number of persons is required"),
  date: Yup.date().required("Date is required"),
});
