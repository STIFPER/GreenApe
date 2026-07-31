const { useState, useEffect } = React;

const App = () => {
  const SHOW_COMPOUND_GENETICS = true;

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPromoModal, setShowPromoModal] = useState(true);

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const currentDate = new Date();
  const currentMonthYear = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  // อันดับความสำคัญ: มีครบทั้ง 1G/3.5G ก่อน > มีแค่ 1G > มีแค่ 3.5G
  // ตัวที่หมดสต๊อกทั้งคู่ (เช่น รอเติมสต๊อก) จะถูกซ่อนจากเมนู แต่ยังเก็บข้อมูลไว้ใน products
  const stockRank = (p) => {
    const has1 = p.stock1 !== false;
    const has35 = p.stock35 !== false;
    if (has1 && has35) return 0;
    if (has1 && !has35) return 1;
    if (!has1 && has35) return 2;
    return 3;
  };
  const isBestSeller = (p) => (p.tags || []).includes("BEST SELLER");
  const forMenu = (cat) =>
    products
      .filter((p) => p.cat === cat && stockRank(p) !== 3)
      .sort((a, b) => {
        const bestDiff = (isBestSeller(a) ? 0 : 1) - (isBestSeller(b) ? 0 : 1);
        if (bestDiff !== 0) return bestDiff;
        return stockRank(a) - stockRank(b);
      });

  const sativa = forMenu("SATIVA");
  const indica = forMenu("INDICA");
  const hybrid = forMenu("HYBRID");
  const cbd = forMenu("CBD");
  const compoundGenetics = forMenu("COMPOUND_GENETICS");

  const allSections = [
    { id: "sativa", title: "SATIVA", color: "#9e9e5e", data: sativa },
    { id: "indica", title: "INDICA", color: "#4a5585", data: indica },
    { id: "hybrid", title: "HYBRID", color: "#9e7b5e", data: hybrid },
    { id: "cbd", title: "CBD", color: "#9e5e97", data: cbd },
  ];

  if (SHOW_COMPOUND_GENETICS) {
    allSections.push({
      id: "compound",
      title: "COMPOUND GENETICS",
      color: "#112237",
      data: compoundGenetics,
      isCompound: true,
    });
  }

  const activeSections = allSections.filter((s) => s.data.length > 0);

  const renderSection = (section) => (
    <div
      key={section.id}
      className={`border rounded-2xl shadow-xl overflow-hidden flex flex-col mb-6 break-inside-avoid ${section.isCompound ? "border-[#c8c7c7]/30 shadow-[0_10px_30px_rgba(17,34,55,0.8)] bg-[#112237]" : "border-white/20 bg-black/20 backdrop-blur-sm"}`}
    >
      <BoxHeader
        title={section.title}
        bgColor={section.color}
        isCompound={section.isCompound}
      />
      <div className="p-3 space-y-1">
        {section.data.map((p, idx) => (
          <ProductCard
            key={idx}
            product={p}
            onClick={setSelectedProduct}
            theme={section.isCompound ? "compound" : "default"}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col pb-10 relative">
      <PromoModal
        isOpen={showPromoModal}
        onClose={() => setShowPromoModal(false)}
      />

      <header className="max-w-[1400px] mx-auto w-full px-4 pt-8 pb-6 text-center flex flex-col items-center justify-center gap-3">
        <img
          src="./assets/Green Ape Logo.png"
          alt="Green Ape Logo"
          className="h-8 md:h-10 w-auto max-w-[220px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
        />
        <h1 className="font-bd font-black text-[40px] md:text-[48px] text-primary uppercase leading-none tracking-tight drop-shadow-lg">
          FLOWER MENU
        </h1>
        <p className="font-bd font-bold text-sm md:text-base text-white uppercase tracking-[0.2em] bg-tertiary px-6 py-1.5 rounded-full shadow-lg">
          {currentMonthYear}
        </p>
      </header>

      <main className="max-w-[1400px] mx-auto w-full px-4 mb-4 md:columns-2 md:gap-6">
        {activeSections.map(renderSection)}
      </main>

      <section className="max-w-[1400px] mx-auto w-full px-4">
        <PartyPackPromo />
      </section>

      <section className="max-w-[1400px] mx-auto w-full px-4">
        <PreRollsPromo />
      </section>

      <section className="max-w-[1400px] mx-auto w-full px-4">
        <CbdOilPromo />
      </section>

      {!showPromoModal && (
        <button
          onClick={() => setShowPromoModal(true)}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#e8246e] text-white px-4 py-3 rounded-full shadow-[0_4px_20px_rgba(232,36,110,0.5)] flex items-center justify-center gap-2 hover:scale-110 transition-transform duration-300 z-40 border border-white/30 group animate-popup"
        >
          <SvgPromoOffer />
          <span className="font-bd font-bold text-sm md:text-base uppercase tracking-widest mt-0.5 drop-shadow-sm">
            Offers
          </span>
        </button>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
