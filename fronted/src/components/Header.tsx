import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 ">
      <div className="container flex justify-between items-center flex-1">
        <Link
          to={"/"}
          className="tracking-tight text-3xl text-orange-500 font-bold"
        >
          WebWeaverFoods.com
        </Link>
      </div>
    </div>
  );
};

export default Header;
