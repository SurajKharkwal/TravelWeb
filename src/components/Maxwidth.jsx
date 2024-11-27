
export default function Maxwidth({ children, className = "" }) {
  return (
    <div className={`${className} max-w-7xl`}>{children}</div>
  );
}
