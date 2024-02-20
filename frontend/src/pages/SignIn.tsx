import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import { Toast } from "../components/Toast";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      Toast.fire({
        icon: "success",
        title: "Sign In Successful",
      });
      navigate("/");
    },
    onError: (error: Error) => {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "Sign In Failed",
      });
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
            Login for existing account
          </div>
          <form className="py-4" onSubmit={onSubmit}>
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
            <div className="flex items-center justify-between mt-8">
              <button
                className="bg-blue-700 hover:bg-blue-700/90 transition w-full md:w-fit text-white py-3 px-8"
                type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <p className="text-center my-4">
          <Link
            to="/register"
            className="text-grey-dark text-sm no-underline hover:text-grey-darker">
            I do not have an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
