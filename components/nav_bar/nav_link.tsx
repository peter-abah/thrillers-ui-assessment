"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return <Link data-is-active={isActive ? "true" : "false"} {...props} />;
}
