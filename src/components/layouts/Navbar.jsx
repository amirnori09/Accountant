import Page from "@/app/login/page";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost">خانه</a>
        <a className="btn btn-ghost">فروشگاه</a>
        <a className="btn btn-ghost">معرفی محصول</a>
        <Link href="/login">
          <button>ورود</button>
        </Link>
      </div>

      <div className="">
        <div className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
            <p className="font-bold">علی ریکی</p>
      </div>
    </div>
  );
};

export default Navbar;
