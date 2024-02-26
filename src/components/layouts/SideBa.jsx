import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { TbClipboardList } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxExit } from "react-icons/rx";

const SideBar = () => {
  return (
    <div className="bg-red-700 w-2/6 h-screen p-10 ">
      <ul className="space-y-4space ">
        <li className="flex">
          <LuLayoutDashboard />
          <p>داشبورد</p>
        </li>
        <div className="divider"></div>
        <li className="flex">
          <CgProfile />
          <p>پروفایل</p>
        </li>
        <div className="divider"></div>

        <li className="flex">
          <TbClipboardList />
          <p>لیست سفارشات</p>
        </li>
        <div className="divider"></div>

        <li className="flex">
          <MdOutlineLocationOn />
          <p>آدرس</p>
        </li>
        <div className="divider"></div>

        <li className="flex">
          <RxExit/>
          <p>خروج</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
