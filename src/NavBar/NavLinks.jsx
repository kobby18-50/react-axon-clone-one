import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
    return ( 
        // <div className="navbar text-white fixed bg-black">
        <div className={color ? "navbar text-white fixed bg-black duration-300" : "navbar text-white fixed"}>
    <div className="flex-1">
      <Link className="text-xl btn btn-ghost">AXON INFO SYSTEMS</Link>
    </div>
    <div className="flex-none ">
      <ul className="menu menu-horizontal px-1">
        <li className="hover:text-red-900">
          {" "}
          <Link>Services</Link>
         
          
        </li>
        <li tabIndex={0} className="hover:text-red-900">
          <Link>Expertise</Link>
    
          <ul className="p-2 bg-base-100 text-black">
            <li className="">
              <Link className="hover:text-red-900">Submenu 1</Link>
              <Link className="hover:text-red-900">Submenu 2</Link>
            </li>
            <li>
            </li>
          </ul>
        </li>
        <li tabIndex={0}>
          <Link className="hover:text-red-900">Products</Link>
    
          <ul className="p-2 bg-base-100 text-black">
            <li className="">
              <Link className="hover:text-red-900">Submenu 1</Link>
              <Link className="hover:text-red-900">Submenu 2</Link>
            </li>
            <li>
            </li>
          </ul>
        </li>
        <li>
          <Link className="hover:text-red-900">Our Work</Link>
        </li>
        <li>
          <Link className="hover:text-red-900">Blog</Link>
        </li>
        <li>
          <Link className="hover:text-red-900">About us</Link>
        </li>
        <li>
          <Link className="hover:text-red-900">Contact</Link>
        </li>
        <li>
          <button className="btn bg-transparent border-white rounded-none hover:text-red-900 hover:bg-transparent">
              Get in touch
          </button>
        </li>
      </ul>
    </div>
    </div>
     );
}
 
export default NavLinks;