import * as React from "react"

import { SearchForm } from "@/components/search-form"
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
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { adminRoutes } from "@/routes/adminRoutes"
import { customerRoutes } from "@/routes/customerRoutes"
import { sellerRoutes } from "@/routes/sellerRoutes"
import { Route } from "@/types/routes.type"
import { Roles } from "@/constants/roles"


export function AppSidebar({user, ...props }: {user : {role: string} & React.ComponentProps<typeof Sidebar>}) {
  
  let routes: Route[] = [];
  switch (user.role) {
    case Roles.admin:
      routes = adminRoutes;
      break;
    case Roles.customer:
      routes = customerRoutes;
      break;
    case Roles.seller:
      routes = sellerRoutes
      break;
  
    default:
      routes = [];
      break;
  }

  // routes.forEach(item => console.log(item.items));

  return (
    <Sidebar {...props}>
  
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem className="my-2" key={item.title}>
                    <SidebarMenuButton className="flex justify-center items-center text-lg font-medium" asChild>
                      <Link className="bg-cyan-800 h-12" href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
