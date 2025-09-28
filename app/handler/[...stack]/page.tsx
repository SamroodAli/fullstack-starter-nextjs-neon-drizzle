import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack/server";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";

export default async function Page(props: unknown) {
  const AuthPage = (
    <StackHandler
      componentProps={{
        AccountSettings: {},
      }}
      fullPage
      app={stackServerApp}
      routeProps={props}
    />
  );

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
        <SiteHeader />
        {AuthPage}
      </SidebarInset>
    </SidebarProvider>
  );
}
