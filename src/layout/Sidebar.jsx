import { useState } from "react";
import SidebarLink from "../ui/SidebarLink";
import { playGroundLinks } from "../assets/playgroundData";


export default function Sidebar({ activeId, onSelect ,mobileOnly = false  }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-subtle bg-app">
        <span className="font-semibold text-white">Frontend Architecture</span>

        <button
          onClick={() => setOpen(true)}
          className="text-primary"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 inset-y-0 left-0 w-64
          bg-sidebar border-r border-subtle
          transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:screen
        `}
      >
        {/* Header */}
        <div className="p-4  border-b border-subtle flex justify-between items-center">
          <span className="font-semibold text-white">Frontend Architecture</span>

          {/* Close button (mobile only) */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-white"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="p-3 space-y-1">
          {playGroundLinks.map((link) => (
            <SidebarLink
              key={link.id}
              title={link.title}
              subtitle={link.subtitle}
              active={activeId === link.id}
              onClick={() => {
                onSelect(link.id);
                setOpen(false); // close on mobile
              }}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
