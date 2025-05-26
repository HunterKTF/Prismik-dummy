'use client'

import { useState } from 'react'

import { AppSidebar } from "@/components/appSidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Profitability } from './profitability'
import { Activity } from './activity'
import { Liquidity } from './liquidity'
import { Solvency } from './solvency'

export function DashboardContent() {
  const [page, setPage] = useState('profitability')

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1>Dashboard page</h1>
            <Select defaultValue='profitability' onValueChange={(value) => setPage(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a group" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Group</SelectLabel>
                  <SelectItem value="profitability">Profitability</SelectItem>
                  <SelectItem value="activity">Activity</SelectItem>
                  <SelectItem value="liquidity">Liquidity</SelectItem>
                  <SelectItem value="solvency">Solvency</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </header>

        {page === 'profitability' && <Profitability /> }
        {page === 'activity' && <Activity />}
        {page === 'liquidity' && <Liquidity />}
        {page === 'solvency' && <Solvency />}
      </SidebarInset>
    </SidebarProvider>
  )
}