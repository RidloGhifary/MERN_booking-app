import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold tracking-tight mb-3">Hotel Guest</h1>
      <div className="grid grid-cols-2 gap-4 p-6 bg-gray-300">
        <div>
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="adults">
            Adults
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="adults"
            type="number"
            min={1}
            placeholder="Your hotel price per night"
            {...register("adultCount", {
              required: "This field is required and 1 is minimum",
            })}
          />
          {errors.adultCount && (
            <span className="text-rose-500">{errors.adultCount.message}</span>
          )}
        </div>
        <div>
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="child">
            Children
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="child"
            type="number"
            min={1}
            placeholder="Your hotel price per night"
            {...register("childCount", {
              required: "This field is required and 1 is minimum",
            })}
          />
          {errors.childCount && (
            <span className="text-rose-500">{errors.childCount.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestSection;
