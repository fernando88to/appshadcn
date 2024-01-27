import {Metadata} from "next"

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs";
import {CalendarDateRangePicker} from "@/app/dashboard/components/date-range-picker";
import {Overview} from "@/app/dashboard/components/overview";
import {RecentSales} from "@/app/dashboard/components/recent-sales"

export const metadata: Metadata = {
    title: "Dashboard - Teste"

}

export default function DashBoardTestePage() {
    return (
        <>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard - Teste</h2>
                <div className="flex items-center space-x-2">
                    <CalendarDateRangePicker/>
                    <Button>Download</Button>
                </div>
            </div>

        </>
    )
}