import { useMutation, useQuery } from "react-query";
import * as apiClient from "../api-client";
import { useParams } from "react-router-dom";
import ManageHotelForm from "../forms/manage-hotel-form/ManageHotelForm";
import { Toast } from "../components/Toast";

const EditHotel = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery("fetchMyHotelById", () =>
    apiClient.fetchMyHotelById(hotelId || "")
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      Toast.fire({
        icon: "success",
        title: "Successful updating hotel",
      });
    },
    onError: () => {
      Toast.fire({
        icon: "error",
        title: "Failed updating hotel",
      });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading} />
  );
};

export default EditHotel;
