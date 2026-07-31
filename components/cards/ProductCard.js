const ProductCard = ({ product, onClick, theme }) => {
  const isCompound = theme === "compound";

  const titleColor = isCompound ? "text-[#c8c7c7]" : "text-white";
  const titleHover = isCompound
    ? "group-hover:text-white"
    : "group-hover:text-primary";
  const detailColor = isCompound ? "text-[#112237]" : "text-white/80";
  const detailBg = isCompound ? "bg-[#c8c7c7]" : "bg-white/10";
  const priceColor1 = isCompound ? "text-white" : "text-primary";

  const borderCls = isCompound ? "border-[#c8c7c7]/20" : "border-white/10";
  const hoverBgCls = isCompound ? "hover:bg-[#c8c7c7]/5" : "hover:bg-white/10";

  const soldOutPillCls = isCompound
    ? "border-[#c8c7c7]/30 text-[#c8c7c7]/60"
    : "border-white/25 text-white/40";
  const priceMutedCls = isCompound ? "text-[#c8c7c7]/70" : "text-white/60";
  const weightMutedCls = isCompound ? "text-[#c8c7c7]/30" : "text-white/25";

  const WeightColumn = ({ price, weightLabel, inStock }) => (
    <div className="flex flex-col items-center gap-0.5 md:gap-1 w-[52px] md:w-[68px]">
      {inStock ? (
        <span
          className={`font-yellix font-semibold text-[9px] md:text-[11px] whitespace-nowrap ${priceMutedCls}`}
        >
          {price}
        </span>
      ) : (
        <span
          className={`font-yellix font-bold text-[7px] md:text-[8px] px-1.5 md:px-2 py-0.5 rounded-full border uppercase tracking-wide whitespace-nowrap ${soldOutPillCls}`}
        >
          SOLD OUT
        </span>
      )}
      <span
        className={`font-bd font-black text-sm md:text-lg tracking-tight whitespace-nowrap ${inStock ? priceColor1 : weightMutedCls}`}
      >
        {weightLabel}
      </span>
    </div>
  );

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

          <div className="flex flex-wrap items-center gap-1 md:gap-1.5 mb-1 mt-0.5">
            <span
              className={`font-yellix font-medium text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 rounded-md whitespace-nowrap ${detailColor} ${detailBg}`}
            >
              THC {product.thc}
            </span>
            <span
              className={`font-yellix font-medium text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 rounded-md whitespace-nowrap ${detailColor} ${detailBg}`}
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
      <div className="flex items-start gap-1.5 md:gap-2.5 pl-1.5 md:pl-2 self-start pt-0.5 shrink-0">
        <WeightColumn
          price={product.p1}
          weightLabel="1G"
          inStock={product.stock1 !== false}
        />
        <div
          className={`w-px self-stretch my-0.5 ${isCompound ? "bg-[#c8c7c7]/20" : "bg-white/15"}`}
        ></div>
        <WeightColumn
          price={product.p35}
          weightLabel="3.5G"
          inStock={product.stock35 !== false}
        />
      </div>
    </div>
  );
};
