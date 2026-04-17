const CbdOilPromo = () => (
  <div className="rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row bg-gradient-to-br from-[#eafaf9] to-[#cbf0f3] w-full mt-6 mb-12 text-[#1a2542] border border-white/40">
    <div className="w-full md:w-[45%] lg:w-[40%] p-8 flex flex-col items-center justify-center relative bg-white/30 backdrop-blur-sm min-h-[350px] md:min-h-[auto]">
      <div className="w-full max-w-[320px] aspect-[3/4] flex flex-col items-center justify-center relative">
        <img
          src="./assets/ato-cbd.png"
          alt="ATO Rest CBD Oil"
          className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    <div className="w-full md:w-[55%] lg:w-[60%] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-3">
        <span className="bg-[#e8246e] text-white font-yellix font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
          New Arrival
        </span>
      </div>
      <h2 className="font-bd font-black text-4xl md:text-5xl uppercase tracking-wider text-[#1a2542] mb-2 leading-none drop-shadow-sm">
        ATO Rest CBD Oil
      </h2>
      <p className="font-yellix text-xl md:text-2xl text-[#1a2542]/70 font-bold mb-8">
        CBD Wellness for the Good Feelings
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-8 border-y border-[#1a2542]/10 py-6">
        <div className="flex items-start gap-3">
          <div className="bg-[#c6dc3b] p-2 rounded-xl text-[#1a2542] shrink-0 mt-0.5 shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bd font-bold text-lg text-[#1a2542] mb-0.5 leading-tight">
              Premium Purity
            </h4>
            <p className="font-yellix text-sm font-semibold text-[#1a2542]/60 leading-snug">
              2,000mg CBD Isolate.
              <br />
              No chemicals or pesticides.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="bg-[#c6dc3b] p-2 rounded-xl text-[#1a2542] shrink-0 mt-0.5 shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bd font-bold text-lg text-[#1a2542] mb-0.5 leading-tight">
              Potent Formula
            </h4>
            <p className="font-yellix text-sm font-semibold text-[#1a2542]/60 leading-snug">
              10mg of CBD per drop.
              <br />
              Just 1-5 drops per serving.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 sm:col-span-2 pt-2 sm:pt-0">
          <div className="bg-[#c6dc3b] p-2 rounded-xl text-[#1a2542] shrink-0 mt-0.5 shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
          </div>
          <div>
            <h4 className="font-bd font-bold text-lg text-[#1a2542] mb-0.5 leading-tight">
              Trusted Quality
            </h4>
            <p className="font-yellix text-sm font-semibold text-[#1a2542]/60 leading-snug">
              Lab-tested & manufactured from ISO and GHP Certified Facility.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-6">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white/60 flex-1">
          <span className="font-yellix font-bold text-xs uppercase tracking-widest text-[#1a2542]/60 block mb-3">
            May help with
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#2a1962] text-white font-bd text-sm px-4 py-1.5 rounded-xl shadow-sm">
              Better Sleep
            </span>
            <span className="bg-[#2a1962] text-white font-bd text-sm px-4 py-1.5 rounded-xl shadow-sm">
              Pain Relief
            </span>
            <span className="bg-[#2a1962] text-white font-bd text-sm px-4 py-1.5 rounded-xl shadow-sm">
              Stress & Anxiety
            </span>
          </div>
        </div>

        <div className="text-center shrink-0 bg-gradient-to-r from-[#2a1962] to-[#4a3982] p-6 rounded-[1.5rem] shadow-[0_10px_25px_rgba(42,25,98,0.4)] border border-white/20 flex flex-col items-center justify-center w-full xl:w-auto mx-auto relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>

          <span className="font-yellix font-bold text-xs md:text-sm text-white/70 uppercase tracking-[0.2em] block mb-2 relative z-10">
            Special Price
          </span>

          <div className="font-bd font-black text-5xl md:text-6xl text-[#c6dc3b] drop-shadow-md leading-none relative z-10 flex items-baseline justify-center w-full">
            <span className="text-3xl md:text-4xl mr-1.5 text-[#c6dc3b]">
              ฿
            </span>
            1,800
          </div>
        </div>
      </div>
    </div>
  </div>
);
