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
  </div>
);
