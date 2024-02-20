
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full bg-blue-700 p-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holidayuks</Link>
        </span>
        <span className="bg-white px-6 py-3 text-blue-700 cursor-pointer">
          <Link to="sign-in">Sign In</Link>
        </span>
      </div>
    </div>
  )
}

export default Header