import Header from "@/app/dashboard/components/layout/header";
import Sidebar from "@/app/dashboard/components/layout/sidebar";

export const metadata = {
    title: 'Dashboard - Início',
    description: 'Next.js App Router + Material UI v5',
};







export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="flex h-screen border-collapse overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
                    {children}
                </main>
            </div>
        </>
    )
}