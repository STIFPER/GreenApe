const PartyPackPromo = () => (
  <div className="border border-white/20 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-r from-gray-50 to-gray-200 flex flex-col md:flex-row items-stretch w-full mt-4 mb-8 relative group transition-all duration-300 hover:shadow-white/10">
    <div className="bg-[#2a1962] p-5 md:p-8 flex flex-col items-center justify-center w-full md:w-[35%] lg:w-[30%] shrink-0 border-b md:border-b-0 md:border-r border-[#2a1962]/20">
      <h2 className="font-bd font-black text-3xl md:text-4xl text-white uppercase tracking-wide text-center drop-shadow-md leading-tight">
        PARTY PACK
        <br />
        <span className="text-primary mt-1 md:mt-2 block">PROMO</span>
      </h2>
      <div className="font-bd font-bold text-xs md:text-sm text-[#2a1962] uppercase tracking-widest flex items-center justify-center bg-primary px-4 py-2 rounded-full shadow-sm mt-3 md:mt-4 border border-[#b2c832] text-center w-full max-w-[220px]">
        Mix & Match 4 Strains
      </div>
    </div>

    <div className="hidden md:flex p-6 lg:p-8 items-center justify-evenly flex-1 gap-6 bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center flex-1">
        <span className="font-yellix font-bold text-[#2a1962]/50 tracking-widest uppercase text-xs mb-1">
          Volume
        </span>
        <div className="font-bd font-black text-[56px] leading-none text-[#2a1962] drop-shadow-sm flex items-baseline">
          28<span className="text-[28px] text-[#2a1962] ml-1">g</span>
        </div>
      </div>

      <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#2a1962]/20 to-transparent"></div>

      <div className="flex flex-col items-center justify-center flex-1">
        <span className="font-yellix font-bold text-[#2a1962]/50 tracking-widest uppercase text-xs mb-1">
          Total Price
        </span>
        <div className="font-bd font-black text-[48px] text-[#2a1962] leading-none flex items-baseline drop-shadow-sm">
          <span className="text-3xl text-[#2a1962] mr-2">฿</span>5,600
        </div>
      </div>

      <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#2a1962]/20 to-transparent"></div>

      <div className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-[#e8246e]/10 to-[#e8246e]/5 rounded-2xl p-5 border border-[#e8246e]/20 relative overflow-hidden group-hover:bg-[#e8246e]/10 transition-colors">
        <div className="bg-[#e8246e] text-white font-yellix font-bold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full mb-1 shadow-sm relative z-10">
          Best Value
        </div>
        <div className="font-bd font-black text-4xl text-[#e8246e] flex items-baseline drop-shadow-sm my-1 relative z-10">
          <span className="text-2xl mr-1">฿</span>200
        </div>
        <span className="font-yellix font-bold text-[#2a1962]/70 text-xs tracking-widest uppercase mt-0.5 relative z-10">
          per gram
        </span>
      </div>
    </div>

    <div className="flex md:hidden p-4 sm:p-6 flex-col items-center justify-evenly flex-1 gap-3 sm:gap-4 bg-white/50 backdrop-blur-sm">
      <div className="flex flex-row w-full justify-between sm:justify-evenly flex-1 gap-3 sm:gap-0">
        <div className="flex flex-col items-center justify-center flex-1 bg-white/60 sm:bg-transparent rounded-2xl sm:rounded-none p-3 sm:p-0 shadow-sm sm:shadow-none border border-white/50 sm:border-none">
          <span className="font-yellix font-bold text-[#2a1962]/50 tracking-widest uppercase text-[10px] mb-0.5">
            Volume
          </span>
          <div className="font-bd font-black text-[36px] sm:text-[48px] leading-none text-[#2a1962] drop-shadow-sm flex items-baseline">
            28
            <span className="text-[18px] sm:text-[24px] text-[#2a1962] ml-0.5">
              g
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 bg-white/60 sm:bg-transparent rounded-2xl sm:rounded-none p-3 sm:p-0 shadow-sm sm:shadow-none border border-white/50 sm:border-none">
          <span className="font-yellix font-bold text-[#2a1962]/50 tracking-widest uppercase text-[10px] mb-0.5">
            Total Price
          </span>
          <div className="font-bd font-black text-[30px] sm:text-[40px] text-[#2a1962] leading-none flex items-baseline drop-shadow-sm">
            <span className="text-xl sm:text-2xl text-[#2a1962] mr-1">฿</span>
            5,600
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#e8246e]/10 via-[#e8246e]/5 to-[#e8246e]/10 rounded-2xl p-4 border border-[#e8246e]/20 relative overflow-hidden mt-1">
        <div className="bg-[#e8246e] text-white font-yellix font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full mb-1 shadow-sm relative z-10">
          Best Value
        </div>
        <div className="font-bd font-black text-3xl text-[#e8246e] flex items-baseline drop-shadow-sm my-1 relative z-10">
          <span className="text-xl mr-1">฿</span>200
        </div>
        <span className="font-yellix font-bold text-[#2a1962]/70 text-[11px] tracking-widest uppercase mt-0.5 relative z-10">
          per gram
        </span>
      </div>
    </div>
  </div>
);
