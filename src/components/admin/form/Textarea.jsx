import { forwardRef } from "react";
import { cn } from "./Input";

const Textarea = forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-text-main">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-border-main bg-bg-main px-3 py-2 text-sm text-text-main ring-offset-bg-main placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
