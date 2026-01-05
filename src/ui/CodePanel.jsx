import React from "react";

const CodePanel = ({ title, code, highlight }) => {
  const lines = code?.split("\n");
  return (
    <div className="bg-card border border-subtle rounded-xl p-4 text-sm">
      <div className="text-muted mb-2">{title}</div>
      <pre className="overflow-x-auto">
        <code>
          {lines.map((line, i) => {
            const isHighlight = highlight && line.includes(highlight);
            return (
              <div
                key={i}
                className={
                  isHighlight
                    ? "bg-yellow-500/20 border-l-4 border-yellow-400 pl-2"
                    : ""
                }
              >
                {line}
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
};

export default CodePanel;
