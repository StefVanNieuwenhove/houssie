import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarTrigger,
} from "../ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"
import { ChevronDown, LayoutPanelLeft } from "lucide-react"
import NavButton from "./NavButton"
import ThemeToggle from "./ThemeToggle"
import { links } from "@/lib/Links"
import { HEIGHT_NAVBAR } from "@/lib/constants"

const Navbar = () => {
  return (
    <>
      <header
        style={{ height: HEIGHT_NAVBAR }}
        className={`sticky top-0 z-50 flex w-full items-center justify-between border-b px-4 backdrop-blur-xl backdrop-saturate-180`}
      >
        <SidebarTrigger />
        <h1 className="text-2xl font-bold text-primary uppercase">Houssie</h1>
        <ThemeToggle />
      </header>
      <Sidebar
        style={{ paddingTop: HEIGHT_NAVBAR }}
        className="border-r backdrop-blur-xl backdrop-saturate-180"
        collapsible="offcanvas"
      >
        <SidebarContent>
          <SidebarMenu className="">
            <SidebarMenuItem>
              <NavButton
                name="Dashboard"
                href="/"
                icon={<LayoutPanelLeft size={16} />}
              />
            </SidebarMenuItem>
          </SidebarMenu>
          {links.map((group) => (
            <Collapsible
              key={group.group}
              defaultOpen
              className={`group/collapsible`}
            >
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    {group.group}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    {group.items.map((item, index) => (
                      <SidebarMenu key={`${item.name}-${index}`}>
                        <SidebarMenuItem>
                          {item.type === "single" ? (
                            <NavButton
                              name={item.name}
                              href={item.links} // string path
                              icon={item.icon}
                            />
                          ) : (
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuButton>
                                  <span>{item.icon}</span>
                                  {item.name}
                                </SidebarMenuButton>
                              </CollapsibleTrigger>

                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {item.links.map((subItem, subIndex) => (
                                    <SidebarMenuItem
                                      key={`${subItem.name}-${subIndex}`}
                                    >
                                      <NavButton {...subItem} />
                                    </SidebarMenuItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </Collapsible>
                          )}
                        </SidebarMenuItem>
                      </SidebarMenu>
                    ))}
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ))}
        </SidebarContent>
      </Sidebar>
    </>
  )
}

export default Navbar
