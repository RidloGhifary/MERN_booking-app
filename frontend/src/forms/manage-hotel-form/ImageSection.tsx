import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImageSection = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");

  const handelDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold tracking-tight mb-3">Hotel Images</h1>
      <div className="border p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-6 gap-4">
            {existingImageUrls.map((url, i) => (
              <div className="relative group" key={i}>
                <img
                  src={url}
                  alt="url"
                  className="min-h-full object-contain"
                />
                <button
                  onClick={(event) => handelDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 text-white">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        <input
          type="file"
          multiple
          accept="image/*"
          className="cursor-pointer"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImageUrls?.length || 0);
              if (totalLength === 0)
                return "At least one image should be added";

              if (totalLength > 6)
                return "Total number of images cannot be more than 6";

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-rose-500">{errors.imageFiles.message}</span>
      )}
    </div>
  );
};

export default ImageSection;
