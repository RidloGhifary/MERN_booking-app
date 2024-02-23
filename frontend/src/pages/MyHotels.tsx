import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { Toast } from "../components/Toast";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import { rupiah } from "../config/rupiah-format";

const MyHotels = () => {
  const { data: hotelDatas } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {
        Toast.fire({
          icon: "error",
          title: "Something went wrong",
        });
      },
    }
  );

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-5 mb-4">
        <h1 className="text-3xl font-bold tracking-tight">My Hotels</h1>
        <Link
          to={"/add-hotel"}
          className="bg-blue-700 hover:bg-blue-700/70 transition text-white px-5 py-2">
          Add hotel
        </Link>
      </div>

      {!hotelDatas ? (
        <div className="bg-blue-500 text-white w-full p-8 text-center rounded">
          <p>No Hotels found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {hotelDatas?.map((hotel) => (
            <div
              data-testid="hotel-card"
              className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">
              <h2 className="text-2xl font-bold">{hotel.name}</h2>
              <div className="whitespace-pre-line line-clamp-[8] md:line-clamp-3">
                {hotel.description}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BsMap className="mr-1" />
                  {hotel.city}
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BsBuilding className="mr-1" />
                  {hotel.type}
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BiMoney className="mr-1" />
                  {rupiah(hotel.pricePerNight)} / night
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BiHotel className="mr-1" />
                  {hotel.adultCount} {`adult${hotel.adultCount > 1 ? "s" : ""}`}
                  , {hotel.childCount}
                  {hotel.childCount === 1 ? " child" : " children"}
                </div>
                <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                  <BiStar className="mr-1" />
                  {hotel.starRating} Star Rating
                </div>
              </div>
              <span className="flex justify-end">
                <Link
                  to={`/edit-hotel/${hotel._id}?name=${hotel.name}`}
                  className="flex bg-blue-700 text-white px-5 py-2 hover:bg-blue-700/70 transition">
                  View Details
                </Link>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyHotels;
