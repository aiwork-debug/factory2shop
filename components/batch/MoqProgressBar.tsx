import React from "react";

interface MoqProgressBarProps {
  current: number;
  target: number;
  progress?: number;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  theme?: "light" | "dark";
}

export default function MoqProgressBar({
  current,
  target,
  progress: customProgress,
  showLabels = true,
  size = "md",
  className = "",
  theme = "light",
}: MoqProgressBarProps) {
  const calculatedProgress =
    target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0;
  const progress = customProgress !== undefined ? customProgress : calculatedProgress;

  const heightClass = size === "sm" ? "h-1.5" : size === "lg" ? "h-3" : "h-2";

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {showLabels && (
        <div
          className={`flex justify-between items-center text-[10px] font-medium ${
            theme === "dark" ? "text-slate-300" : "text-slate-500"
          }`}
        >
          <span>
            {current.toLocaleString()} / {target.toLocaleString()} units
          </span>
          <span
            className={`font-extrabold ${
              theme === "dark" ? "text-emerald-400" : "text-slate-800"
            }`}
          >
            {progress}% MOQ
          </span>
        </div>
      )}
      <div
        className={`w-full ${heightClass} rounded-full overflow-hidden ${
          theme === "dark" ? "bg-slate-800" : "bg-slate-100"
        }`}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            progress >= 80 ? "bg-emerald-500" : "bg-blue-600"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
