// components/Sidebar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";
 
const Sidebar: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className=" bg-gray-800 min-h-screen z-50 text-white max-w-34 p-4 md:flex">
      <div className="flex justify-end md:hidden transition translate-x-2">
        {openSidebar ? (
          <GrClose
            className="invert"
            size={30}
            onClick={() => setOpenSidebar((prev) => !prev)}
          />
        ) : (
          <HiBars3BottomRight
            size={30}
            onClick={() => setOpenSidebar((prev) => !prev)}
          />
        )}
      </div>
      <div
        className={`flex-col   md:flex space-y-4 ${
          openSidebar ? "flex" : "hidden" 
        } `}
      >
        <ul
          onClick={() => setOpenSidebar((prev) => !prev)}
          className="min-h-full items-start flex-col py-9   justify-between   flex"
        >
          <div className="flex flex-col  justify-center gap-9">

          <li>
            <NavLink
              to="/"
              className=" hover:text-gray-300  "
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
              Charts <br /> & <br /> Maps
            </NavLink>
          </li>
          </div>
          {/* <a href="https://github.com/sammed-21/contact-management.git" >

          <img src={github} width={50} height={50} alt="link to by github"/>
          </a> */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
