import { getData } from "@/db/actions/todos";
import Todos from "@/app/components/Todos";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const data = await getData();
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader
          title="Todo page"
          actionButtons={
            <div className="ml-auto flex items-center gap-2">
              <Button asChild>
                <Link href="/handler/sign-up">Sign up</Link>
              </Button>
            </div>
          }
        />
        <Todos todos={data} />
      </SidebarInset>
    </SidebarProvider>
  );
}
