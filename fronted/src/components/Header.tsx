import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 ">
      <div className="container flex justify-between items-center flex-1">
        <Link
          to={"/"}
          className="tracking-tight text-3xl text-orange-500 font-bold"
        >
          WebweaverFoods.com
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <DesktopNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
