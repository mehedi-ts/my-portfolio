export default function Logo({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
    xl: "h-16",
  };

  return (
    <div className={`flex items-center ${sizeMap[size]} ${className} overflow-visible`}>
      <svg 
        viewBox="0 0 150 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-auto overflow-visible"
      >
        <text 
          x="5" 
          y="42" 
          className="fill-text-main font-signature text-[42px]"
        >
          Mehedi
        </text>
        {/* Elegant flowing underline flourish */}
        <path 
          d="M5 52 C 40 60, 90 60, 135 46" 
          className="stroke-primary" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none"
        />
        {/* Accent dot */}
        <circle cx="142" cy="34" r="2.5" className="fill-primary" />
      </svg>
    </div>
  );
}
