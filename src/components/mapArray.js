import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { TbClipboardList } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxExit } from "react-icons/rx";

const Divider = () => (
  <div className="divider"/>
);

const MapArray = () => {
  const items = [
    { name: 'داشبورد', icon: LuLayoutDashboard },
    { name: 'پروفایل', icon: CgProfile },
    { name: 'لیست سفارشات', icon: TbClipboardList },
    { name: 'آدرس', icon: MdOutlineLocationOn },
    { name: 'خروج', icon: RxExit }
  ];

  return (
    <div >
      <ul className=''>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className='flex gap-3 items-center '>
              {React.createElement(item.icon, { size: 25 })}
              <span>{item.name}</span>
            </li>
            {index !== items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default MapArray;
