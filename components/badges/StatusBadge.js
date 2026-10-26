const StatusBadge = ({ tags }) => {
  const baseClass =
    "flex items-center justify-center mr-2 md:mr-3 w-9 md:w-[50px] shrink-0";
  // HALLOWEEN: ป้ายเรืองแสงส้ม
  const containerClass = baseClass + (SHOW_HALLOWEEN ? " hw-pulse" : "");

  if (!tags || tags.length === 0) {
    return <div className={baseClass}></div>;
  }

  const tag = tags[0];

  if (tag === "NEW") {
    return (
      <div className={containerClass}>
        <SvgNew />
      </div>
    );
  } else if (tag === "BEST SELLER") {
    return (
      <div className={containerClass}>
        <SvgBestSeller />
      </div>
    );
  } else if (tag.includes("BUY 1")) {
    return (
      <div className={containerClass}>
        <SvgBuy1Get1 />
      </div>
    );
  }

  return <div className={baseClass}></div>;
};
