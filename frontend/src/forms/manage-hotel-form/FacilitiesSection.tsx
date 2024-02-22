import { hotelFacilities } from "../../config/hotel-options-config";
import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold tracking-tight mb-3">
        Hotel facilities
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {hotelFacilities.map((facility, index) => (
          <label key={index} className="flex gap-1">
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                required: "This field is required",
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facilities is required";
                  }
                },
              })}
            />
            <p>{facility}</p>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-rose-500">{errors.facilities.message}</span>
      )}
    </div>
  );
};

export default FacilitiesSection;
