import { forwardRef } from "react";
import { cn } from "./Input";

const Select = forwardRef(({ className, label, error, options = [], ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-text-main">
          {label}
        </label>
      )}
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-border-main bg-bg-main px-3 py-2 text-sm text-text-main ring-offset-bg-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors appearance-none",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
});
Select.displayName = "Select";

export { Select };
