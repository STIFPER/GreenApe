const TerpeneBadge = ({ name }) => {
  const key = name.split(" ")[0].toLowerCase().trim();
  const colorMap = {
    myrcene: "bg-t-myrcene",
    caryophyllene: "bg-t-caryophyllene",
    humulene: "bg-t-humulene",
    limonene: "bg-t-limonene",
    ocimene: "bg-t-ocimene",
    phellandrene: "bg-t-phellandrene",
    pinene: "bg-t-pinene",
    terpinolene: "bg-t-terpinolene",
    terpineol: "bg-t-terpineol",
    linalool: "bg-t-linalool",
    bisabolol: "bg-t-bisabolol",
  };
  const bgClass = colorMap[key] || "bg-gray-600";

  return (
    <span
      className={`inline-block ${bgClass} text-white font-yellix font-bold text-[8px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded-full mr-1 mb-1 uppercase tracking-wide shadow-sm whitespace-nowrap`}
    >
      {name}
    </span>
  );
};
