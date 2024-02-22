import { hotelTypes } from "../../config/hotel-options-config";
import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold tracking-tight mb-3">Hotel type</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {hotelTypes.map((type, index) => (
          <label
            key={index}
            className={`cursor-pointer text-center px-5 py-2 ${
              typeWatch === type ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}>
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-rose-500">{errors.type.message}</span>
      )}
    </div>
  );
};

export default TypeSection;
