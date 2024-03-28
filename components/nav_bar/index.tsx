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
import MapIcon from "../icons/map";
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
    name: "Wallet",
    url: "/wallet",
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
    <nav className="w-[350px] fixed top-0 left-0 h-screen overflow-y-auto bg-primary z-50 text-white rounded-r-5xl">
      <div className="w-full aspect-square flex flex-col justify-center items-center gap-5 bg-primary-dark z-20">
        <div className="rounded-full grid place-items-center bg-primary-dark w-28.5 h-28.5 relative before:absolute before:w-30 before:h-30 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:conic-gradient before:rounded-full">
          <span className="absolute w-full h-full top-1/2 left-1/2 bg-primary-dark rounded-full -translate-x-1/2 -translate-y-1/2"></span>
          <div className="w-25 h-25 relative">
            <Image src={user.profileImageURL} alt={user.name} fill className="rounded-full" />
          </div>
        </div>

        <p className="uppercase text-xl font-bold">{user.name}</p>
        <p className="lowercase font-bold text-sm">{user.email}</p>
      </div>

      <ul className="pl-4.5 pt-6">
        {NAV_LINKS.map((link) => {
          const IconComponent = URL_TO_ICON_COMPONENT[link.url] || DefaultIcon;
          return (
            <li key={link.name}>
              <NavLink
                href={link.url}
                className="group relative rounded-l-5xl data-[is-active=true]:bg-main-bg data-[is-active=true]:text-primary flex gap-7.5 px-8 py-6 items-center bg-primary"
              >
                <span className="absolute hidden group-[[data-is-active=true]]:block bg-main-bg h-full w-24 -top-full right-0 before:absolute before:w-full before:h-full origin-right before:top-0 z-10 before:z-20 before:left-0 before:rounded-br-5xl before:bg-primary"></span>
                <span className="absolute hidden group-[[data-is-active=true]]:block bg-main-bg h-full w-24 -bottom-full right-0 before:absolute before:w-full before:h-full origin-right before:top-0 z-10 before:left-0 before:rounded-tr-5xl before:bg-primary"></span>
                <IconComponent className="w-7.5 h-7.5 text-accent" />
                <span className="uppercase">{link.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="pl-12 pr-14 py-9">
        <p className="uppercase text-accent font-semibold mb-8">Active Users</p>
        <div aria-hidden className="flex mb-7">
          <Image
            src="/images/woman.jpeg"
            alt=""
            width={64}
            height={64}
            className="rounded-full border-4 border-primary"
          />
          <Image
            src="/images/man-1.jpg"
            alt=""
            width={64}
            height={64}
            className="rounded-full border-4 border-primary -ml-4"
          />
          <Image
            src="/images/man-2.jpg"
            alt=""
            width={64}
            height={64}
            className="rounded-full border-4 border-primary -ml-4"
          />
          <Image
            src="/images/man-3.jpg"
            alt=""
            width={64}
            height={64}
            className="rounded-full border-4 border-primary -ml-4"
          />
          <span className="-ml-4 w-16 h-16 bg-accent text-white grid place-items-center rounded-full border-4 border-primary font-semibold">
            +70
          </span>
        </div>

        <MapIcon className="w-full text-main-bg/50" />
      </div>
    </nav>
  );
}
