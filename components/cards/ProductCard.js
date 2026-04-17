const ProductCard = ({ product, onClick, theme }) => {
  const isCompound = theme === "compound";

  const titleColor = isCompound ? "text-[#c8c7c7]" : "text-white";
  const titleHover = isCompound
    ? "group-hover:text-white"
    : "group-hover:text-primary";
  const detailColor = isCompound ? "text-[#112237]" : "text-white/80";
  const detailBg = isCompound ? "bg-[#c8c7c7]" : "bg-white/10";
  const priceColor1 = isCompound ? "text-white" : "text-primary";
  const priceDivider = isCompound ? "text-[#c8c7c7]/50" : "text-tertiary";

  const borderCls = isCompound ? "border-[#c8c7c7]/20" : "border-white/10";
  const hoverBgCls = isCompound ? "hover:bg-[#c8c7c7]/5" : "hover:bg-white/10";

  return (
    <div
      onClick={() => onClick(product)}
      className={`group cursor-pointer py-3 px-3 transition-all duration-200 flex items-start justify-between border-b last:border-0 rounded-xl ${borderCls} ${hoverBgCls}`}
    >
      <div className="flex items-center flex-1 pr-2">
        <StatusBadge tags={product.tags} />
        <div className="flex flex-col justify-center">
          <h3
            className={`font-bd font-bold text-base md:text-lg uppercase leading-tight transition-colors mb-0.5 ${titleColor} ${titleHover}`}
          >
            {product.name}
          </h3>

          {product.type && (
            <div className="mb-0.5 mt-0.5">
              <span
                className={`font-yellix font-bold text-[10px] md:text-[11px] px-2 py-0.5 rounded uppercase tracking-widest whitespace-nowrap ${isCompound ? "bg-[#c8c7c7]/20 text-[#c8c7c7]" : "bg-white/20 text-white"}`}
              >
                {product.type}
              </span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-1.5 mb-1 mt-0.5">
            <span
              className={`font-yellix font-medium text-[10px] px-2 py-0.5 rounded-md whitespace-nowrap ${detailColor} ${detailBg}`}
            >
              THC {product.thc}
            </span>
            <span
              className={`font-yellix font-medium text-[10px] px-2 py-0.5 rounded-md whitespace-nowrap ${detailColor} ${detailBg}`}
            >
              CBD {product.cbd}
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {product.terpenes.map((t, i) => (
              <TerpeneBadge key={i} name={t} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-right whitespace-nowrap pl-2 self-start pt-1">
        <div
          className={`font-bd font-bold text-lg md:text-xl tracking-tight ${priceColor1}`}
        >
          {product.p1}{" "}
          <span
            className={`text-sm align-middle mx-1 font-black ${priceDivider}`}
          >
            |
          </span>{" "}
          {product.p35}
        </div>
      </div>
    </div>
  );
};
