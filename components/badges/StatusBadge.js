const StatusBadge = ({ tags }) => {
  const containerClass =
    "flex items-center justify-center mr-3 w-[50px] shrink-0";

  if (!tags || tags.length === 0) {
    return null;
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

  return <div className={containerClass}></div>;
};
