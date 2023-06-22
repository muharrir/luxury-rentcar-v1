"use client";
import FormInput from "@/components/atoms/FormInput";
import IconEmail from "@/components/atoms/Forms/IconEmail";
import IconPassword from "@/components/atoms/Forms/IconPassword";
import IconUsername from "@/components/atoms/Forms/IconUsername";
import axios from "axios";
import { useFormik } from "formik";
import Lottie from "lottie-react";
import success from "../../../../public/assets/lottie/success.json";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";

export default function Register() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required").min(3).max(15),
      fullname: Yup.string().required("Fullname is required").min(3),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid Email Address"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character"
        ),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await axios.post("http://localhost:4000/api/register", values);
        setRegistrationSuccess(true);
        formik.resetForm();
      } catch (error) {
        console.log(error);
        setRegistrationSuccess(true);
      }
      setSubmitting(false);
    },
  });

  return (
    <section class="my-14 md:flex items-center justify-center relative">
      <div class="flex justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="md:w-[500px] bg-darkGrey md:px-16 md:py-16 rounded-2xl mx-6 p-6"
        >
          <div className="mb-8">
            <h1 className="text-indigo-950 font-bold text-4xl">Register</h1>
            <p className="text-sm font-normal text-gray-400 mt-2">
              Complete the form below to register your account
            </p>
          </div>

          <div className="space-y-4">
            <FormInput
              clx={
                formik.errors.username
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconUsername />}
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Username"
              errorMessage={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : null
              }
              onBlur={formik.handleBlur}
            />

            <FormInput
              clx={
                formik.errors.fullname
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconUsername />}
              name="fullname"
              type="text"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              placeholder="Full Name"
              errorMessage={
                formik.touched.fullname && formik.errors.fullname
                  ? formik.errors.fullname
                  : null
              }
              onBlur={formik.handleBlur}
            />

            <FormInput
              clx={
                formik.errors.email
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconEmail />}
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email Address"
              errorMessage={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null
              }
              onBlur={formik.handleBlur}
            />

            <FormInput
              clx={
                formik.errors.password
                  ? "focus:outline-red-500 border-red-500 text-red-500"
                  : "focus:outline-blue-500 valid:border-green-500"
              }
              icon={<IconPassword />}
              password={true}
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              errorMessage={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null
              }
              onBlur={formik.handleBlur}
            />
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="block w-full bg-indigo-950 hover:scale-105 transition-all mt-4 py-3 rounded-2xl text-white font-semibold"
          >
            Register
          </button>
          <div class="mt-4 text-sm">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="cursor-pointer text-blue-600 font-semibold hover:underline underline-offset-2"
            >
              Login
            </Link>
          </div>
        </form>
      </div>

      {/* Register Success */}
      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          registrationSuccess ? "block" : "hidden"
        }`}
      >
        <div className="bg-black/50 flex items-center justify-center  min-h-screen">
          <div className="bg-darkGrey rounded-2xl text-center w-[500px] h-[600px]">
            <div className="mt-10 w-full flex items-center justify-center h-1/2">
              <Lottie animationData={success} loop={true} className="w-1/2 " />
            </div>
            <h2 className="text-2xl font-bold my-4">
              Registration Successful!
            </h2>
            <p className="text-gray-400">
              Thank you for registering. <br /> Login first to access your
              account!
            </p>
            <Link href={"/login"}>
              <button className="bg-blue-500 text-white font-bold py-3 rounded-full w-52 mt-6">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Register Failed */}
      {/* <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          registrationFailed ? "block" : "hidden"
        }`}
      >
        <div className="bg-black/50 flex items-center justify-center  min-h-screen">
          <div className="bg-darkGrey rounded-2xl text-center w-[500px] h-[600px]">
            <div className="mt-10 w-full flex items-center justify-center h-1/2">
              <Lottie animationData={success} loop={true} className="w-1/2 " />
            </div>
            <h2 className="text-2xl font-bold my-4">Registration Failed!</h2>
            <p className="text-gray-400">Ooops something looks wrong</p>
            <Link href={"/login"}>
              <button className="bg-blue-500 text-white font-bold py-3 rounded-full w-52 mt-6">
                Close
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </section>
  );
}
