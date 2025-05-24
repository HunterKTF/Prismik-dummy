"use client"

import * as React from "react"

import { NavProjects } from "@/components/appSidebar/nav-projects"
import { NavUser } from "@/components/appSidebar/nav-user"
import { TeamSwitcher } from "@/components/appSidebar/team-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from "@/components/ui/sidebar"

// Import sample data for nav sidebar
import { data } from "@/components/appSidebar/nav-data"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}