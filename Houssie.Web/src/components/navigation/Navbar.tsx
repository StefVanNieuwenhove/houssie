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
      <Sidebar collapsible='offcanvas'>
        <SidebarHeader></SidebarHeader>
        <SidebarContent>
          {Links.map((group) => (
            <SidebarGroup>
              <SidebarGroupLabel>{group.name}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.links.map((link) =>
                    link.sublinks ? (
                      <Collapsible className='group/collapsible'>
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
      <header className='h-16 w-full border-b flex items-center px-4 bg-primary'>
        <SidebarTrigger className='text-white' />
        <h1 className='text-lg font-bold text-center w-full uppercase text-white hover:text-gray-300 hover:underline ransition-colors'>
          Houssie
        </h1>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
