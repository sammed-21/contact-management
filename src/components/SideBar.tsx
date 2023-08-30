// components/Sidebar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr"
import { HiBars3BottomRight } from "react-icons/hi2";
const Sidebar: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className=" bg-gray-800 min-h-screen  text-white max-w-34 p-4 md:flex">
      <div className="flex justify-end md:hidden transition translate-x-2">
        {
          openSidebar ?         
 <GrClose className="invert" size={30} onClick={() =>setOpenSidebar((prev) => !prev)}/>:<HiBars3BottomRight size={30} onClick={() => setOpenSidebar((prev) => !prev)} />
        }
      </div>
      <div
        className={`flex-col h-full  md:flex space-y-4 ${
          openSidebar ? "flex" : "hidden"
        } `}
      >
        <ul onClick={() =>setOpenSidebar((prev) => !prev)} className="min-h-full items-start flex-col mt-[5rem]  justify-start gap-[4rem] flex">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-gray-300"
              // activeClassName="font-semibold"
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/charts-maps"
              className="text-white hover:text-gray-300"
              // activeClassName="font-semibold"
            >
              Charts <br/> & <br/> Maps
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
