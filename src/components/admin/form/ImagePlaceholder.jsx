import { Image as ImageIcon, UploadCloud } from "lucide-react";
import { cn } from "./Input";

export function ImagePlaceholder({ label, className, error }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-text-main">
          {label}
        </label>
      )}
      <div 
        className={cn(
          "flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border-main rounded-xl bg-bg-main/50 hover:bg-bg-card transition-colors cursor-pointer group",
          error && "border-red-500",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadCloud className="w-8 h-8 mb-3 text-text-muted group-hover:text-primary transition-colors" />
          <p className="mb-2 text-sm text-text-main font-semibold">
            <span className="text-primary">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-text-muted">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
      </div>
      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
}
