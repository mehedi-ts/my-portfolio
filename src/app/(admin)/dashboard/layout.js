import { Sidebar } from "@/components/admin/Sidebar";
import { TopNav } from "@/components/admin/TopNav";

export const metadata = {
  title: "Dashboard | Admin Panel",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-bg-main text-text-main overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
