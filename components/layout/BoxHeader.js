const BoxHeader = ({ title, bgColor, isCompound }) => (
  <div
    className="flex justify-between items-center px-5 py-3 border-b"
    style={{
      backgroundColor: bgColor,
      borderColor: isCompound
        ? "rgba(200, 199, 199, 0.2)"
        : "rgba(255,255,255,0.1)",
    }}
  >
    <h2
      className={`font-bd font-black text-2xl uppercase tracking-tight ${isCompound ? "text-[#c8c7c7]" : "text-white"}`}
    >
      {title}
    </h2>
    <span
      className={`font-yellix font-bold text-xs px-3 py-1 rounded-full ${isCompound ? "bg-[#c8c7c7] text-[#112237]" : "bg-black/20 text-white/80"}`}
    >
      1G | 3.5G
    </span>
  </div>
);
