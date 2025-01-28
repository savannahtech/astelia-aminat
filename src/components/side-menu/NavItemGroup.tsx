import * as React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "./NavIcon";

export function NavItemGroup({
  items,
  isCollapsed,
  currentPath,
  ...props
}: NavItemGroupProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2 px-2">
          {items.map((item) => { 
            const isActive = currentPath === item.url;

            return (
              <SidebarMenuItem key={item.title} className="group relative">
                <SidebarMenuButton
                  asChild
                  size="sm"
                  className={cn(
                    "flex items-center gap-3 rounded-md px-4 py-5 text-[15px] font-normal transition-all",
                    isActive
                      ? "rounded-md bg-green-50 text-gray-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-800",
                    isCollapsed && "justify-center",
                  )}
                >
                  <Link href={item.url}>
                    {item.icon && (
                      <Icon
                        name={item.icon}
                        key={item.title}
                        className={cn(
                          "!h-[20px] !w-[20px] !text-[#A3A9B6] transition-transform group-hover:scale-110",
                          isActive ? "!text-black" : "",
                          // isActive ? "  !text-black" : "brightness-0 invert-0",
                        )}
                      />
                    )}
                    {!isCollapsed && (
                      <span className="ml-3 font-sans text-[15px] font-normal text-gray-700">
                        {item.title}
                      </span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
