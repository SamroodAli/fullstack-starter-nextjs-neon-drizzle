import { getData } from "@/db/actions/todos";
import Todos from "@/app/components/Todos";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { stackServerApp } from "@/stack/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const user = await stackServerApp.getUser({ or: "redirect" });

  const todos = await getData(user?.id);
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
          title="Title page"
          actionButtons={
            !user ? (
              <div className="ml-auto flex items-center gap-2">
                <Button asChild>
                  <Link href="/handler/sign-up">Sign up</Link>
                </Button>
              </div>
            ) : null
          }
        />
        <Todos todos={todos} />
      </SidebarInset>
    </SidebarProvider>
  );
}
