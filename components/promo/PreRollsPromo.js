const PreRollsPromo = () => (
  <div className="border-2 border-[#8fe4f6]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-gradient-to-b from-[#8fe4f6] to-[#60cae8] w-full mt-4 mb-6">
    <div className="flex justify-center items-center px-5 py-5 bg-[#c8e658] border-b-4 border-[#1a2542]/10 relative overflow-hidden">
      <h2 className="font-bd font-black text-4xl text-[#1a2542] uppercase tracking-wider relative z-10 drop-shadow-md">
        PRE-ROLLS
      </h2>
    </div>

    <div className="p-6 md:p-10 flex flex-col items-center justify-center relative">
      <div className="w-full max-w-[450px] aspect-square mb-10 flex flex-col items-center justify-center relative">
        <img
          src="./assets/preolls-greenape.png"
          alt="./assets/Green Ape Pre-Rolls"
          className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl relative z-10">
        <div className="flex flex-col items-center">
          <h3 className="font-bd font-black text-3xl text-[#1a2542] text-center mb-4 drop-shadow-sm flex items-center gap-2">
            Sativa <span className="text-xl">Pre-rolls</span>
          </h3>
          <div className="bg-white rounded-[2rem] p-6 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b-[6px] border-[#1a2542]/10 transition-transform hover:-translate-y-1 flex flex-col gap-3">
            <div className="flex justify-between items-center border-b-2 border-gray-100 pb-3">
              <span className="font-yellix font-bold text-lg text-[#1a2542]/60 uppercase tracking-wide">
                Box of 5
              </span>
              <span className="font-bd font-black text-2xl text-[#1a2542]">
                <span className="text-lg mr-1">฿</span>750
              </span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-yellix font-bold text-lg text-[#1a2542]/60 uppercase tracking-wide">
                Box of 3
              </span>
              <span className="font-bd font-black text-2xl text-[#1a2542]">
                <span className="text-lg mr-1">฿</span>550
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="font-bd font-black text-3xl text-[#1a2542] text-center mb-4 drop-shadow-sm flex items-center gap-2">
            Indica <span className="text-xl">Pre-rolls</span>
          </h3>
          <div className="bg-white rounded-[2rem] p-6 w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-b-[6px] border-[#1a2542]/10 transition-transform hover:-translate-y-1 flex flex-col gap-3">
            <div className="flex justify-between items-center border-b-2 border-gray-100 pb-3">
              <span className="font-yellix font-bold text-lg text-[#1a2542]/60 uppercase tracking-wide">
                Box of 5
              </span>
              <span className="font-bd font-black text-2xl text-[#1a2542]">
                <span className="text-lg mr-1">฿</span>750
              </span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="font-yellix font-bold text-lg text-[#1a2542]/60 uppercase tracking-wide">
                Box of 3
              </span>
              <span className="font-bd font-black text-2xl text-[#1a2542]">
                <span className="text-lg mr-1">฿</span>550
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
