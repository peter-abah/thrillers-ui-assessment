import Image from "next/image";
import { IconType } from "react-icons";
import { AiOutlinePieChart as StatsIcon } from "react-icons/ai";
import {
  IoHomeOutline as HomeIcon,
  IoNewspaperOutline as PaperIcon,
  IoSettingsOutline as SettingsIcon,
} from "react-icons/io5";
import { LuWallet as WalletIcon } from "react-icons/lu";
import { PiAirplaneTiltLight as PlaneIcon } from "react-icons/pi";
import { RiContractLeftRightFill as DefaultIcon } from "react-icons/ri";
import NavLink from "./nav_link";

const user = {
  name: "Alex Johnson",
  email: "alex.johnson@gmail.com",
  profileImageURL: "/images/user.jpg",
};

const NAV_LINKS = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    name: "Flights",
    url: "/",
  },
  {
    name: "Reports",
    url: "/reports",
  },
  {
    name: "Statistics",
    url: "/stats",
  },
  {
    name: "Settings",
    url: "/settings",
  },
];

const URL_TO_ICON_COMPONENT: Record<string, IconType> = {
  "/dashboard": HomeIcon,
  "/": PlaneIcon,
  "/reports": PaperIcon,
  "/wallet": WalletIcon,
  "/stats": StatsIcon,
  "/settings": SettingsIcon,
};
export default function NavBar() {
  return (
    <nav className="w-[350px] fixed top-0 left-0 h-screen overflow-y-auto bg-primary z-50 text-white rounded-r-4xl">
      <div className="w-full aspect-square flex flex-col justify-center items-center gap-5">
        <Image
          src={user.profileImageURL}
          alt={user.name}
          width={100}
          height={100}
          className="rounded-full "
        />
        <p className="uppercase text-xl font-bold">{user.name}</p>
        <p className="lowercase font-bold text-sm">{user.email}</p>
      </div>

      <ul className="pl-4.5 flex flex-col">
        {NAV_LINKS.map((link) => {
          const IconComponent = URL_TO_ICON_COMPONENT[link.url] || DefaultIcon;
          return (
            <li key={link.name} className="overflow-hidden rounded-l-5xl bg-main-bg">
              <NavLink
                href={link.url}
                className="data-[is-active=true]:bg-main-bg data-[is-active=true]:text-primary flex gap-7.5 px-8 py-6 items-center bg-primary"
              >
                <IconComponent className="w-7.5 h-7.5 text-accent" />
                <span className="uppercase">{link.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 ml-12">
        <p className="uppercase text-accent text-sm">Active Users</p>
      </div>
    </nav>
  );
}
