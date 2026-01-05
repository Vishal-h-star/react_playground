import Sidebar from "./Sidebar";

export default function AdminLayout({
  activeId,
  onSelect,
  children,
}) {
  return (
    <div className="bg-app min-h-screen text-primary">

      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 z-30 bg-app border-b border-subtle">
        <Sidebar
          activeId={activeId}
          onSelect={onSelect}
          mobileOnly
        />
      </div>

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            activeId={activeId}
            onSelect={onSelect}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}
