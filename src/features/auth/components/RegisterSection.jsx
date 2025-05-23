"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { userRegister } from "@/services/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const password = watch("password");

  const onSubmit = async (data) => {
    // Add registration logic here

    // Add login logic here
    console.log(data);

    try {
      const res = await userRegister({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Registration failed");
      }
      toast.success("Registration successful");

      // programatic route
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen dark:bg-gray-900">
      <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
          PMP Software
        </Link>

        <div className="w-full bg-slate-100 rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 border border-slate-200 rounded-lg space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-serif font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-medium  ${
                    errors.name
                      ? "text-red-500 dark:text-red-500"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  Your name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`${
                    errors.name
                      ? "border-red-500 border"
                      : "bg-gray-50 border border-gray-300"
                  } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.email ? "text-red-500 dark:text-red-500" : ""
                  }`}
                >
                  Your email
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.email ? "border-red-500 border" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.password ? "text-red-500 dark:text-red-500" : ""
                  }`}
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.password ? "border-red-500 border" : ""
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password_confirmation"
                  className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                    errors.password_confirmation
                      ? "text-red-500 dark:text-red-500"
                      : ""
                  }`}
                >
                  Confirm password
                </label>
                <input
                  {...register("password_confirmation", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  type="password"
                  id="password_confirmation"
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.password_confirmation ? "border-red-500 border" : ""
                  }`}
                />
                {errors.password_confirmation && (
                  <p className="text-red-500 text-sm">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                Create an account
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
