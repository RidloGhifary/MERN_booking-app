import { useMutation } from "react-query";
import ManageHotelForm from "../forms/manage-hotel-form/ManageHotelForm";
import * as apiClient from "../api-client";
import { Toast } from "../components/Toast";

const AddHotels = () => {
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      Toast.fire({
        icon: "success",
        title: "Hotel saved successful",
      });
    },
    onError: () => {
      Toast.fire({
        icon: "error",
        title: "Hotel saved error",
      });
    },
  });

  const handleSave = (handleFormData: FormData) => {
    mutate(handleFormData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotels;
