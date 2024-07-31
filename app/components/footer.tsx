import { Link } from "@remix-run/react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1E1E1E] space-y-5 pt-28 pb-10">
        <div className="container flex justify-between">
          <Logo size={6} />
          <div>
            <div className="mb-2">Join Our Newsletter</div>
            <form className="flex w-[500px] max-w-full">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="user@bigramy.com"
                className="flex-1 bg-transparent p-2 border border-gray-100/50 text-white placeholder:text-gray-100/50"
              />
              <button
                type="submit"
                className="bg-[#55E749] px-5 py-2 text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="h-[1px] bg-gray-100/50 container mx-auto"></div>
        <div className="container flex gap-16">
          <div>
            <p className="max-w-[300px] text-sm mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quasi ducimus beatae dicta modi ipsa fugit ab delectus rem facilis
              numquam consequatur ullam dolor atque vitae expedita aliquam nihil
              eaque, facere quos accusantium architecto omnis. Deserunt commodi
              ab unde iusto reiciendis ipsam aspernatur neque similique odio
              culpa eveniet, quo ullam.
            </p>
            <p>Follow us on</p>
          </div>
          <div>
            <ul className="md:me-32 space-y-5">
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/news">Tournaments</Link>
              </li>
              <li>
                <Link to="/news">Courses</Link>
              </li>
              <li>
                <Link to="/news">E-books</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5">
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/privacy">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center py-4 text-sm">
        2024 LOGO. All Rights Reserved.
      </div>
    </footer>
  );
}
