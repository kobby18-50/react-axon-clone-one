import { Link } from "react-router-dom";

const MobileNav = () => {
  const menus = [
    { name: "Services" },
    { name: "Expertise" },
    { name: "Products" },
    { name: "Our Work" },
    { name: "Blog" },
    { name: "About us" },
    { name: "Contact" },
  ];
  return (
    <div className="navbar bg-transparent absolute">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus.map((menu, index) => (
              <li key={index}>
                <Link>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-end text-xl text-white font-medium">
        <h1>AXON</h1>
      </div>
    </div>
  );
};

export default MobileNav;
