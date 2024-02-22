import { FormProvider, useForm } from "react-hook-form";
import DetailSection from "./DetailSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestSection from "./GuestSection";
import ImageSection from "./ImageSection";

export type HotelFormData = {
  name: string;
  city: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageFiles: FileList;
};

const ManageHotelForm = () => {
  const formMethod = useForm<HotelFormData>();
  const { handleSubmit } = formMethod;

  const onSubmit = handleSubmit((formData: HotelFormData) => {
    // TODO - Create new FormData object & call API
    console.log(formData);
  });

  return (
    <FormProvider {...formMethod}>
      <form
        className="flex flex-col gap-4 lg:w-10/12 mx-auto"
        onSubmit={onSubmit}>
        <DetailSection />
        <TypeSection />
        <FacilitiesSection />
        <GuestSection />
        <ImageSection />
        <span className="flex justify-end">
          <button
            type="submit"
            className="text-lg bg-blue-700 text-white px-6 py-2 hover:bg-blue-700/70 transition cursor-pointer">
            Save my hotel
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
