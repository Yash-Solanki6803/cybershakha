import AuthLinks from "../../components/authLinks/AuthLinks";
import Navlink from "../../components/navLink/NavLink";
import classNames from "classnames";

const Navbar = () => {
  return (
    <nav
      className={classNames(
        " flex items-center justify-between px-32 py-5 h-36 z-50 fixed w-full -ml-32 backdrop-blur-md"
      )}
    >
      {/* Company Name */}
      <div className="text-4xl font-semibold ">
        Cyber <span className="text-brand_primary">Shakha</span>
      </div>
      {/* nav links */}
      <div className="bg-glass p-3 rounded-[3rem] flex justify-around gap-9">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/blogs">Blogs</Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/about#services">Services</Navlink>
      </div>
      {/* AuthLinks */}
      <div className="bg-glass p-3 rounded-[3rem] flex justify-around gap-9">
        <AuthLinks />
      </div>
    </nav>
  );
};

export default Navbar;
