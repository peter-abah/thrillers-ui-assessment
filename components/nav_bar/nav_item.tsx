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

const URL_TO_ICON_COMPONENT: Record<string, IconType> = {
  "/dashboard": HomeIcon,
  "/": PlaneIcon,
  "/reports": PaperIcon,
  "/wallet": WalletIcon,
  "/stats": StatsIcon,
  "/settings": SettingsIcon,
};

export default function NavItem({ item }: { item: { url: string; name: string } }) {
  const IconComponent = URL_TO_ICON_COMPONENT[item.url] || DefaultIcon;
  return (
    <li key={item.name}>
      <NavLink
        href={item.url}
        className="group relative rounded-l-5xl data-[is-active=true]:bg-main-bg data-[is-active=true]:text-primary flex gap-7.5 px-8 py-4 2xl:py-6 items-center bg-primary"
      >
        <span className="absolute hidden group-[[data-is-active=true]]:block bg-main-bg h-full w-24 -top-full right-0 before:absolute before:w-full before:h-full origin-right before:top-0 z-10 before:z-20 before:left-0 before:rounded-br-5xl before:bg-primary"></span>
        <span className="absolute hidden group-[[data-is-active=true]]:block bg-main-bg h-full w-24 -bottom-full right-0 before:absolute before:w-full before:h-full origin-right before:top-0 z-10 before:left-0 before:rounded-tr-5xl before:bg-primary"></span>
        <IconComponent className="w-7.5 h-7.5 text-accent" />
        <span className="uppercase">{item.name}</span>
      </NavLink>
    </li>
  );
}
