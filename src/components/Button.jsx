import { Link } from "react-router-dom";

export function Clink({ children, to = "/", px = 12, py = 12, className = "" }) {
  return (
    <Link
      to={to}
      className={`capitalize bg-black duration-500 hover:bg-violet-500 text-white text-xl ${className}`}
      style={{
        paddingLeft: `${px}px`,
        paddingRight: `${px}px`,
        paddingTop: `${py}px`,
        paddingBottom: `${py}px`,
      }}
    >
      {children}
    </Link>
  );
}

export function Button({ children, px, py, className = "" }) {
  return (
    <button
      className={`capitalize bg-black duration-500 hover:bg-violet-500 text-white text-xl ${className}`}
      style={{
        paddingLeft: `${px}px`,
        paddingRight: `${px}px`,
        paddingTop: `${py}px`,
        paddingBottom: `${py}px`,
      }}
    >
      {children}
    </button>
  );

}
