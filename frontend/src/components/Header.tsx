import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { TypeAnimation } from "react-type-animation";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="w-full bg-blue-700 p-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">
            <TypeAnimation
              sequence={[
                "Holidayuks",
                1000,
                "Holidayuks.",
                1000,
                "Holidayuks..",
                1000,
                "Holidayuks...",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-booking"
                className="bg-white text-blue-700 cursor-pointer px-5 py-2 hover:bg-white/90">
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="bg-white text-blue-700 cursor-pointer px-5 py-2 hover:bg-white/90">
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white text-blue-700 cursor-pointer px-5 py-2 hover:bg-white/90">
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
