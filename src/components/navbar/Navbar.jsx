import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import AdminLink from "../adminLink/AdminLink";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <AdminLink />
          <AuthLinks />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
