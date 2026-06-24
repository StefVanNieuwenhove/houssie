"use client"

import { Link as LinkType } from "@/types/nav"
import { SidebarMenuButton, useSidebar } from "../ui/sidebar"
import Link from "next/link"

const NavButton = ({ name, href, icon }: LinkType) => {
  const { toggleSidebar } = useSidebar()
  return (
    <SidebarMenuButton asChild onClick={toggleSidebar}>
      <Link href={href}>
        <span>{icon}</span>
        {name}
      </Link>
    </SidebarMenuButton>
  )
}

export default NavButton
