import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-3">Add Hotel</h1>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="name"
            type="text"
            placeholder="Your hotel name"
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors.name && (
            <span className="text-rose-500">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="city">
            City
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="city"
            type="text"
            placeholder="Your hotel places"
            {...register("city", {
              required: "This field is required",
            })}
          />
          {errors.city && (
            <span className="text-rose-500">{errors.city.message}</span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="description">
          Description
        </label>
        <textarea
          rows={10}
          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="description"
          placeholder="Your hotel description"
          {...register("description", {
            required: "This field is required",
          })}></textarea>
        {errors.description && (
          <span className="text-rose-500">{errors.description.message}</span>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-2">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="pricePerNight">
            Price per night
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="pricePerNight"
            type="number"
            min={1}
            placeholder="Your hotel price per night"
            {...register("pricePerNight", {
              required: "This field is required",
            })}
          />
          {errors.pricePerNight && (
            <span className="text-rose-500">
              {errors.pricePerNight.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="starRating">
            Rating
          </label>
          <select
            id="starRating"
            className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            {...register("starRating", {
              required: "This field is required",
            })}>
            <option value="">Select as rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-rose-500">{errors.starRating.message}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
