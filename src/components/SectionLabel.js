export default function SectionLabel({ children, className = "" }) {
  return (
    <div className={`flex items-center space-x-4 mb-4 ${className}`}>
      <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
        {children}
      </span>
      <div className="h-[1px] w-12 bg-primary/30 shrink-0" />
    </div>
  );
}
