"use client";

import * as React from "react";
import {
  SquareUserIcon,
  GalleryHorizontal,
  Images,
  Newspaper,
  Database,
  Users,
  User,
} from "lucide-react";

import { NavMain } from "@/components/shadcn/nav-main";
import { NavProjects } from "@/components/shadcn/nav-projects";
import { NavSecondary } from "@/components/shadcn/nav-secondary";
import { NavUser } from "@/components/shadcn/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserAuth } from "@/lib/utils";
import { APP_NAME } from "@/constant/const";

const data = {
  user: {
    name: "Millati Hanifa Syahidah",
    email: "millatihanifasyahidah@gmail.com",
    avatar:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocKotmDXuborNfsiCxwih_2KxjXCV1lGoyKtMcGLAWlkFTBl1wsd%3Ds96-c&w=64&q=75",
  },
  navMain: [
    {
      title: "Master Data",
      url: "#",
      icon: Database,
      isActive: true,
      items: [
        {
          title: "Guru",
          url: "/panel/master-data/guru",
        },
        {
          title: "Kelas",
          url: "/panel/master-data/kelas",
        },
      ],
    },
    {
      title: "Users",
      url: "/panel/users",
      icon: Users,
    },
    {
      title: "Data Siswa",
      url: "/panel/siswa",
      icon: User,
    },
    {
      title: "Banner Slider",
      url: "/panel/banner-slider",
      icon: GalleryHorizontal,
    },
    {
      title: "Galeri",
      url: "/panel/galeri",
      icon: Images,
    },
    {
      title: "Artikel",
      url: "/panel/artikel",
      icon: Newspaper,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {/* <Command className="size-4" /> */}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{APP_NAME}</span>
                  <span className="truncate text-xs">Admin Panel</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
