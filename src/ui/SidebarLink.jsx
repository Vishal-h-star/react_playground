import React from "react";

const SidebarLink = ({ title, subtitle, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left px-3 py-2 rounded-lg transition
        ${active ? "bg-card text-info" : "text-muted hover:bg-card"}
      `}
    >
      <div className="text-sm font-medium">{title}</div>
      {subtitle && <div className="text-xs opacity-70">{subtitle}</div>}
    </button>
  );
};

export default SidebarLink;
