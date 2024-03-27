import Image from "next/image";
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
export default function NavBar() {
  return (
    <nav className="w-[300px] fixed top-0 left-0 h-screen overflow-y-auto bg-primary z-50 text-white rounded-r-4xl">
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
        {NAV_LINKS.map((link) => (
          <li key={link.name} className="overflow-hidden rounded-l-5xl first:rounded-br-5xl bg-main-bg">
            <NavLink
              href={link.url}
              className="data-[is-active=true]:bg-main-bg data-[is-active=true]:text-primary flex gap-7.5 px-8 py-6 items-center bg-primary"
            >
              <span className="w-7.5 h-7.5">{/* icon here */}</span>
              <span className="uppercase">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-4 ml-12">
        <p className="uppercase text-accent text-sm">Active Users</p>
      </div>
    </nav>
  );
}
