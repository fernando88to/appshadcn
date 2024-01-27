import Image from "next/image"

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker";
import { MainNav } from "@/app/dashboard/components/main-nav";
import { Overview } from "@/app/dashboard/components/overview";
import { RecentSales } from "@/app/dashboard/components/recent-sales"
import { Search } from "@/app/dashboard/components/search";
import TeamSwitcher from "@/app/dashboard/components/team-switcher"
import { UserNav } from "@/app/dashboard/components/user-nav";
export const metadata = {
    title: 'Dashboard - Início',
    description: 'Next.js App Router + Material UI v5',
};



export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/dashboard-light.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/dashboard-dark.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <TeamSwitcher />
                        <MainNav className="mx-6" />
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-4 p-8 pt-6">
                    {children}
                </div>
            </div>
        </>
    )
}