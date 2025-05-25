import { AppSidebar } from "@/components/appSidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Profitability } from "@/components/dashboard/profitability"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1>Dashboard page</h1>
          </div>
        </header>
        <Tabs defaultValue="profitability" className="w-full px-4">
          <TabsList className="grid w-fit grid-cols-4">
            <TabsTrigger value="profitability">Rentabilidad</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
            <TabsTrigger value="solvency">Solvency</TabsTrigger>
          </TabsList>
          <TabsContent value="profitability" className="w-full h-[86vh]">
            <Profitability />
          </TabsContent>
          <TabsContent value="activity"></TabsContent>
          <TabsContent value="liquidity"></TabsContent>
          <TabsContent value="solvency"></TabsContent>
        </Tabs>
      </SidebarInset>
    </SidebarProvider>
  )
}
