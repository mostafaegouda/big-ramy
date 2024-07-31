import { Link } from "@remix-run/react";
import { ShoppingCartIcon } from "lucide-react";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <div className="container flex justify-end py-2">
        <Link to="/ar">العربية</Link>
      </div>
      <div className="h-[1px] bg-green-100/50"></div>
      <div className="container py-5 flex justify-between items-center">
        <Link to="/">
          <span className="sr-only">Home</span>
          <Logo size={6} />
        </Link>
        <div>
          <Link to="/sign-in">Sign in</Link> or{" "}
          <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
      <div className="bg-[#1E1E1E] py-2">
        <nav className="container mx-auto">
          <ul className="flex items-center gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/ebooks">E-books</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="ms-auto">
              <Link to="/Cart" className="font-bold flex items-center gap-2">
                <ShoppingCartIcon />
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
