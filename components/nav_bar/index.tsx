"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ReactNode } from "react";
import { MdClose as CloseIcon, MdMenu as MenuIcon } from "react-icons/md";
import MapIcon from "../icons/map";
import NavItem from "./nav_item";

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

export default function NavWrapper() {
  return (
    <>
      {/* For mobile and Tablets */}
      <Dialog.Root modal>
        <div className="sticky top-0 bg-main-bg sm:bg-transparent sm:w-fit z-50">
          <Dialog.Trigger className="p-4 sm:p-6 rounded-lg text-primary h-fit w-fit xl:hidden sm:my-8">
            <MenuIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </Dialog.Trigger>
        </div>
        <Dialog.Portal>
          <Dialog.Content asChild>
            <nav className="w-[315px] 2xl:w-[350px] fixed top-0 left-0 h-screen overflow-y-auto z-50 data-[state=open]:animate-scaleXOpen data-[state=closed]:animate-scaleXClose origin-left">
              <Dialog.Close className="absolute p-4 sm:p-6 rounded-lg text-white h-fit left-0 top-0 sm:top-8 z-50">
                <CloseIcon className="w-10 h-10" />
              </Dialog.Close>
              <div className="rounded-r-5xl bg-primary text-white overflow-hidden min-h-screen">
                <div className="w-full aspect-square flex flex-col justify-center items-center gap-5 bg-primary-dark">
                  <div className="rounded-full grid place-items-center bg-primary-dark w-28.5 h-28.5 relative before:absolute before:w-30 before:h-30 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:conic-gradient before:rounded-full">
                    <span className="absolute w-full h-full top-1/2 left-1/2 bg-primary-dark rounded-full -translate-x-1/2 -translate-y-1/2"></span>
                    <div className="w-25 h-25 relative">
                      <Image
                        src={user.profileImageURL}
                        alt={user.name}
                        fill
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  <h1 className="uppercase text-xl font-bold">{user.name}</h1>
                  <p className="lowercase font-bold text-sm">{user.email}</p>
                </div>

                <ul className="pl-4.5 pt-4 2xl:pt-6">
                  {NAV_LINKS.map((item) => (
                    <NavItem item={item} key={item.url} />
                  ))}
                </ul>

                <div className="px-8 2xl:pl-12 2xl:pr-14 pt-5 pb-9 2xl:py-9">
                  <p className="uppercase text-accent font-semibold mb-8">Active Users</p>
                  <div aria-hidden className="flex mb-7">
                    <Image
                      src="/images/woman.jpeg"
                      alt=""
                      width={64}
                      height={64}
                      className="rounded-full border-[3px] border-primary"
                    />
                    <Image
                      src="/images/man-1.jpg"
                      alt=""
                      width={64}
                      height={64}
                      className="rounded-full border-[3px] border-primary -ml-4"
                    />
                    <Image
                      src="/images/man-2.jpg"
                      alt=""
                      width={64}
                      height={64}
                      className="rounded-full border-[3px] border-primary -ml-4"
                    />
                    <Image
                      src="/images/man-3.jpg"
                      alt=""
                      width={64}
                      height={64}
                      className="rounded-full border-[3px] border-primary -ml-4"
                    />
                    <span className="-ml-4 w-16 h-16 bg-accent text-white grid place-items-center rounded-full border-[3px] border-primary font-semibold">
                      +70
                    </span>
                  </div>

                  <MapIcon className="w-full text-main-bg/50" />
                </div>
              </div>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* For Desktops */}
      <div className="hidden xl:block">
        <nav className="w-[315px] 2xl:w-[350px] fixed top-0 left-0 h-screen overflow-y-auto z-50 data-[state=open]:animate-scaleXOpen data-[state=closed]:animate-scaleXClose origin-left">
          <div className="rounded-r-5xl bg-primary text-white overflow-hidden min-h-screen">
            <div className="w-full aspect-square flex flex-col justify-center items-center gap-5 bg-primary-dark">
              <div className="rounded-full grid place-items-center bg-primary-dark w-28.5 h-28.5 relative before:absolute before:w-30 before:h-30 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:conic-gradient before:rounded-full">
                <span className="absolute w-full h-full top-1/2 left-1/2 bg-primary-dark rounded-full -translate-x-1/2 -translate-y-1/2"></span>
                <div className="w-25 h-25 relative">
                  <Image src={user.profileImageURL} alt={user.name} fill className="rounded-full" />
                </div>
              </div>

              <h1 className="uppercase text-xl font-bold">{user.name}</h1>
              <p className="lowercase font-bold text-sm">{user.email}</p>
            </div>

            <ul className="pl-4.5 pt-4 2xl:pt-6">
              {NAV_LINKS.map((item) => (
                <NavItem item={item} key={item.url} />
              ))}
            </ul>

            <div className="px-8 2xl:pl-12 2xl:pr-14 pt-5 pb-9 2xl:py-9">
              <p className="uppercase text-accent font-semibold mb-8">Active Users</p>
              <div aria-hidden className="flex mb-7">
                <Image
                  src="/images/woman.jpeg"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full border-[3px] border-primary"
                />
                <Image
                  src="/images/man-1.jpg"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full border-[3px] border-primary -ml-4"
                />
                <Image
                  src="/images/man-2.jpg"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full border-[3px] border-primary -ml-4"
                />
                <Image
                  src="/images/man-3.jpg"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full border-[3px] border-primary -ml-4"
                />
                <span className="-ml-4 w-16 h-16 bg-accent text-white grid place-items-center rounded-full border-[3px] border-primary font-semibold">
                  +70
                </span>
              </div>

              <MapIcon className="w-full text-main-bg/50" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

function NavBar({ closeBtn, ...dialogProps }: { closeBtn?: ReactNode } & any) {
  return (
    <nav
      className="w-[315px] 2xl:w-[350px] fixed top-0 left-0 h-screen overflow-y-auto z-50 data-[state=open]:animate-scaleXOpen data-[state=closed]:animate-scaleXClose origin-left"
      {...dialogProps}
    >
      {closeBtn}
      <div className="rounded-r-5xl bg-primary text-white overflow-hidden min-h-screen">
        <div className="w-full aspect-square flex flex-col justify-center items-center gap-5 bg-primary-dark">
          <div className="rounded-full grid place-items-center bg-primary-dark w-28.5 h-28.5 relative before:absolute before:w-30 before:h-30 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:conic-gradient before:rounded-full">
            <span className="absolute w-full h-full top-1/2 left-1/2 bg-primary-dark rounded-full -translate-x-1/2 -translate-y-1/2"></span>
            <div className="w-25 h-25 relative">
              <Image src={user.profileImageURL} alt={user.name} fill className="rounded-full" />
            </div>
          </div>

          <h1 className="uppercase text-xl font-bold">{user.name}</h1>
          <p className="lowercase font-bold text-sm">{user.email}</p>
        </div>

        <ul className="pl-4.5 pt-4 2xl:pt-6">
          {NAV_LINKS.map((item) => (
            <NavItem item={item} key={item.url} />
          ))}
        </ul>

        <div className="px-8 2xl:pl-12 2xl:pr-14 pt-5 pb-9 2xl:py-9">
          <p className="uppercase text-accent font-semibold mb-8">Active Users</p>
          <div aria-hidden className="flex mb-7">
            <Image
              src="/images/woman.jpeg"
              alt=""
              width={64}
              height={64}
              className="rounded-full border-[3px] border-primary"
            />
            <Image
              src="/images/man-1.jpg"
              alt=""
              width={64}
              height={64}
              className="rounded-full border-[3px] border-primary -ml-4"
            />
            <Image
              src="/images/man-2.jpg"
              alt=""
              width={64}
              height={64}
              className="rounded-full border-[3px] border-primary -ml-4"
            />
            <Image
              src="/images/man-3.jpg"
              alt=""
              width={64}
              height={64}
              className="rounded-full border-[3px] border-primary -ml-4"
            />
            <span className="-ml-4 w-16 h-16 bg-accent text-white grid place-items-center rounded-full border-[3px] border-primary font-semibold">
              +70
            </span>
          </div>

          <MapIcon className="w-full text-main-bg/50" />
        </div>
      </div>
    </nav>
  );
}
