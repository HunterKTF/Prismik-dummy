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
        <Tabs defaultValue="rentabilidad" className="w-full px-4">
          <TabsList className="grid w-fit grid-cols-4">
            <TabsTrigger value="rentabilidad">Rentabilidad</TabsTrigger>
            <TabsTrigger value="actividad">Actividad</TabsTrigger>
            <TabsTrigger value="liquidez">Liquidez</TabsTrigger>
            <TabsTrigger value="solvencia">Solvencia</TabsTrigger>
          </TabsList>
          <TabsContent value="rentabilidad">
            <div className="w-full h-screen border border-black">
              <h1 className="w-full">Dashboard content</h1>
            </div>
          </TabsContent>
          <TabsContent value="actividad"></TabsContent>
          <TabsContent value="liquidez"></TabsContent>
          <TabsContent value="solvencia"></TabsContent>
        </Tabs>
      </SidebarInset>
    </SidebarProvider>
  )
}
