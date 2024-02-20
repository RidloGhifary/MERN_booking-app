import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { Toast } from "../components/Toast";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: () => {
      Toast.fire({
        icon: "success",
        title: "Registration successfully",
      });
      navigate("/");
      // console.log("registration successful");
    },
    onError: (error: Error) => {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
      console.log(error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="w-full">
      <div className="container mx-auto py-8">
        <div className="w-11/12 lg:w-2/3 mx-auto bg-white rounded px-4 md:px-8">
          <div className="py-4 font-bold text-3xl mb-4">
            Register for a free account
          </div>
          <form className="py-4" onSubmit={onSubmit}>
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="first_name">
                  First Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="first_name"
                  type="text"
                  placeholder="Your first name"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-rose-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="w-1/2 ml-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="last_name">
                  Last Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Your last name"
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                />
                {errors.lastName && (
                  <span className="text-rose-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="email">
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Your email address"
                {...register("email", {
                  required: "This field is required",
                })}
              />
              {errors.email && (
                <span className="text-rose-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="password"
                type="password"
                placeholder="Your secure password"
                {...register("password", {
                  required: "This field is required",
                  minLength: { value: 6, message: "at least 6 characters" },
                })}
              />
              {errors.password && (
                <span className="text-rose-500">{errors.password.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="ConfirmPassword">
                Confirm Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="ConfirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  validate: (value) => {
                    if (!value) return "This field i required";
                    else if (watch("password") !== value)
                      return "Your password do not match";
                  },
                })}
              />
              {errors.confirmPassword && (
                <span className="text-rose-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mt-8">
              <button
                className="bg-blue-700 hover:bg-blue-700/90 transition w-full md:w-fit text-white py-3 px-8"
                type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="text-center my-4">
          <Link
            to="/login"
            className="text-grey-dark text-sm no-underline hover:text-grey-darker">
            I already have an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
