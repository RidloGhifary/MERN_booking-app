import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { Toast } from "./Toast";

const SignOutButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      Toast.fire({
        icon: "success",
        title: "Log Out Successful",
      });
    },
    onError: (error: Error) => {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    },
  });

  const onClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={onClick}
      className="px-5 py-2 cursor-pointer bg-rose-500 hover:bg-rose-500/80 transition text-white">
      Sign out
    </button>
  );
};

export default SignOutButton;
