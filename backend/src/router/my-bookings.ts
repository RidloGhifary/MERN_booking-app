import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";
import Hotel from "../models/hotel";
import { HotelType } from "../shared/types";

// ROUTE - /api/my-bookings

const router = express.Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.find({
      bookings: { $elemMatch: { userId: req.userId } },
    }).sort({ lastUpdated: -1 });

    const result = hotels.map((hotel) => {
      const userBookings = hotel.bookings.filter(
        (booking) => booking.userId === req.userId
      );

      const hotelWithUserBookings: HotelType = {
        ...hotel.toObject(),
        bookings: userBookings,
      };

      return hotelWithUserBookings;
    });

    res.status(200).send(result);
  } catch (error) {
    console.log("Error while fetching bookings hotel", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
