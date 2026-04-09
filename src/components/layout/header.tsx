//import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-full bg-[rgb(0,0,3)] py-3 px-4 app-bb flex items-center justify-between md:py-4 md:px-6">
      <h1 className="font-comfortaa font-extrabold text-xl flex items-baseline">
        Funcly<span className="text-xs text-gray-500 px-1">v1.0.1</span>
      </h1>
      <ul className="flex items-center gap-4 text-sm font-jmono pr-1">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "rgb(248 248 65)" } : {}
          }
        >
          js
        </NavLink>
        <NavLink
          to="/kt"
          style={({ isActive }) =>
            isActive ? { color: "rgb(248 248 65)" } : {}
          }
        >
          kt
        </NavLink>
      </ul>
    </header>
  );
}
