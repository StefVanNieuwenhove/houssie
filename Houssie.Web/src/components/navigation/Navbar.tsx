import { Links } from '@/lib/Links';
import { Link, NavLink, Outlet } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarTrigger,
  useSidebar,
} from '../ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { setOpen } = useSidebar();
  return (
    <>
      <Sidebar
        className='pt-18 backdrop-saturate-180 backdrop-blur-xl border-r'
        collapsible='offcanvas'>
        <SidebarHeader></SidebarHeader>
        <SidebarContent>
          {Links.map((group) => (
            <SidebarGroup key={group.name}>
              <SidebarGroupLabel>{group.name}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.links.map((link) =>
                    link.sublinks ? (
                      <Collapsible
                        key={link.name}
                        className='group/collapsible'>
                        <SidebarMenuItem key={link.name}>
                          <SidebarMenuButton asChild>
                            <CollapsibleTrigger className='flex w-full items-center justify-between'>
                              <span className='flex items-center gap-2'>
                                {link.icon} {link.name}
                              </span>
                              <ChevronDown
                                size={16}
                                className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180'
                              />
                            </CollapsibleTrigger>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuSub>
                          <CollapsibleContent>
                            {link.sublinks.map((sublink) => (
                              <SidebarMenuSubButton asChild key={sublink.path}>
                                <Link
                                  to={sublink.path}
                                  onClick={() => setOpen(false)}>
                                  {sublink.name}
                                </Link>
                              </SidebarMenuSubButton>
                            ))}
                          </CollapsibleContent>
                        </SidebarMenuSub>
                      </Collapsible>
                    ) : (
                      <SidebarMenuItem key={link.name}>
                        <SidebarMenuButton asChild>
                          <Link to={link.path} onClick={() => setOpen(false)}>
                            <span className='flex items-center gap-2'>
                              {link.icon} {link.name}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ),
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
      <header className='sticky top-0 z-50 w-full h-18 flex items-center justify-between border-b px-4 backdrop-saturate-180 backdrop-blur-xl'>
        <SidebarTrigger />
        <h1 className='text-white text-3xl uppercase font-bold'>Houssie</h1>
        <p>close</p>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
