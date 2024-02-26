import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { TbClipboardList } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxExit } from "react-icons/rx";

const MapArray = () => {
  const items = [
    { name: 'داشبورد', icon: '<LuLayoutDashboard/>' },
    { name: 'Item 2', icon: 'icon2' },
    { name: 'Item 3', icon: 'icon3' }
  ];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <span>{item.name}</span>
              <img src={`/${item.icon}.png`}  />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapArray;
