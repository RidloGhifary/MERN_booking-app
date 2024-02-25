import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNight: number;
  hotel: HotelType;
};

const BookingDetailSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNight,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location:
        <div className="font-bold">{`${hotel.name}, ${hotel.city}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold"> {checkIn.toDateString()}</div>
        </div>
        <div>
          Check-out
          <div className="font-bold"> {checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of stay:
        <div className="font-bold">{numberOfNight} nights</div>
      </div>

      <div>
        Guests{" "}
        <div className="font-bold">
          {adultCount} adults{" "}
          {childCount === 0 ? "" : `& ${childCount}children`}
        </div>
      </div>
    </div>
  );
};

export default BookingDetailSummary;
