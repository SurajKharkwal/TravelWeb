import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="fixed flex text-black text-2xl w-full gap-8 px-12 py-6 shadow-lg bg-white top-0">
      <Link to="/" className="mr-auto">
        Travel.
      </Link>
      <Link
        to="/"
        className="hover:text-violet-500 transition-colors duration-300"
      >
        Home
      </Link>
      <Link
        to="/"
        className="hover:text-violet-500 transition-colors duration-300"
      >
        About
      </Link>
      <Link
        to="/package"
        className="hover:text-violet-500 transition-colors duration-300"
      >
        Package
      </Link>
      <Link
        to="/"
        className="hover:text-violet-500 transition-colors duration-300"
      >
        Book
      </Link>
    </section>
  );
}
