const PromoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-md md:max-w-lg w-full animate-popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-[#e8246e] text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-xl md:text-2xl shadow-xl border-2 border-white hover:scale-110 transition-transform z-10"
        >
          &times;
        </button>

        <img
          src="./assets/promo-popup.png"
          alt="Special Promotion"
          className="w-full h-auto rounded-2xl shadow-2xl object-contain bg-black/20"
        />
      </div>
    </div>
  );
};
