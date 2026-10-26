// ===== HALLOWEEN START =====
// ธีมฮาโลวีน (ชั่วคราว) — ลบทั้งบล็อกนี้ + จุดที่มีคอมเมนต์ "HALLOWEEN" ใน App.js / index.html / components
// หรือแค่ตั้ง SHOW_HALLOWEEN = false ก็ปิดธีมได้ทันที (ตอนนี้ปิดเองอัตโนมัติหลัง HALLOWEEN_END)
// คอนเซ็ปต์: "Ape-loween" ใช้แว่นกอกเกิลของมาสคอต Green Ape + เมือก/ยาสีเขียวมะนาวของแบรนด์ + ป่าลึก
const HALLOWEEN_END = new Date("2026-11-03T00:00:00+07:00");
const SHOW_HALLOWEEN = new Date() < HALLOWEEN_END;

// แว่นกอกเกิลของมาสคอต (วางทับบนฟักทอง ผี กะโหลก)
const hwGoggles = (x, y, s, rot) =>
  `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><rect x="0" y="0" width="22" height="15" rx="6" fill="#f5f0ff" stroke="#1b1040" stroke-width="2.5"/><rect x="26" y="0" width="22" height="15" rx="6" fill="#f5f0ff" stroke="#1b1040" stroke-width="2.5"/><path d="M22 6H26" stroke="#1b1040" stroke-width="3"/><rect x="4" y="3.5" width="14" height="8" rx="3.5" fill="#a6d93b"/><rect x="30" y="3.5" width="14" height="8" rx="3.5" fill="#a6d93b"/><circle cx="7.5" cy="6.5" r="1.4" fill="#fff"/><circle cx="33.5" cy="6.5" r="1.4" fill="#fff"/></g>`;

const HW_DRIP_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><path d="M0 9C8 9 9 12 10 15C11 19 15 19 16 15C17 12 20 9 26 9C30 9 31 12 32 22C32.6 28 38 28 38.6 22C39 12 41 9 46 9C52 9 53 12 54 15C55 19 58 19 59 15C59.6 12 60 9 60 9L60 0L0 0Z" fill="#c6dc3b"/><path d="M0 9C8 9 9 12 10 15C11 19 15 19 16 15C17 12 20 9 26 9C30 9 31 12 32 22C32.6 28 38 28 38.6 22C39 12 41 9 46 9C52 9 53 12 54 15C55 19 58 19 59 15C59.6 12 60 9 60 9" fill="none" stroke="#1b1040" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="35.3" cy="19" rx="1.2" ry="3" fill="#fff" fill-opacity=".55"/><ellipse cx="13" cy="14" rx="1" ry="2" fill="#fff" fill-opacity=".55"/></svg>`;

const HW_SVG = {
  // ฟักทองหน้าลิง: ตางัวเงีย ปากเรียบๆ มีเขี้ยว สวมแว่นกอกเกิล
  pumpkin: `<svg viewBox="0 0 100 92" style="display:block;width:100%;height:auto"><path d="M46 22C46 12 50 8 57 5" fill="none" stroke="#1b1040" stroke-width="10" stroke-linecap="round"/><path d="M46 22C46 12 50 8 57 5" fill="none" stroke="#c6dc3b" stroke-width="5" stroke-linecap="round"/><ellipse cx="50" cy="56" rx="44" ry="34" fill="#ff7518" stroke="#1b1040" stroke-width="4"/><path d="M50 22C36 35 36 77 50 90M50 22C64 35 64 77 50 90M30 26C14 39 14 73 30 87M70 26C86 39 86 73 70 87" fill="none" stroke="#1b1040" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><path d="M25 52A7.5 7.5 0 0 1 40 52ZM60 52A7.5 7.5 0 0 1 75 52Z" fill="#ffe066" stroke="#1b1040" stroke-width="3" stroke-linejoin="round"/><circle class="hw-pupil" cx="33" cy="49" r="2.2" fill="#1b1040"/><circle class="hw-pupil" cx="68" cy="49" r="2.2" fill="#1b1040"/><path d="M46 58L54 58L50 52Z" fill="#ffe066" stroke="#1b1040" stroke-width="2.5" stroke-linejoin="round"/><path d="M33 68Q50 63 67 68" fill="none" stroke="#1b1040" stroke-width="8" stroke-linecap="round"/><path d="M33 68Q50 63 67 68" fill="none" stroke="#ffe066" stroke-width="4" stroke-linecap="round"/><path d="M43 66L47 74L51 66Z" fill="#fff" stroke="#1b1040" stroke-width="1.6" stroke-linejoin="round"/>${hwGoggles(26, 13, 0.95, -9)}</svg>`,
  // ผีลิง: มีหู ตางัวเงีย สวมแว่นกอกเกิล
  ghost: `<svg viewBox="0 0 70 72" style="display:block;width:100%;height:auto"><circle cx="8" cy="36" r="7" fill="#f5f0ff" stroke="#1b1040" stroke-width="3"/><circle cx="62" cy="36" r="7" fill="#f5f0ff" stroke="#1b1040" stroke-width="3"/><circle cx="8" cy="36" r="3" fill="#ff7bb0" fill-opacity=".7"/><circle cx="62" cy="36" r="3" fill="#ff7bb0" fill-opacity=".7"/><path d="M35 4C19 4 13 18 13 32L13 62L21 54L28 64L35 54L42 64L49 54L57 62L57 32C57 18 51 4 35 4Z" fill="#f5f0ff" stroke="#1b1040" stroke-width="3" stroke-linejoin="round"/><path d="M22 40A5 5 0 0 1 32 40ZM38 40A5 5 0 0 1 48 40Z" fill="#1b1040"/><path d="M31 48Q35 51 39 48" fill="none" stroke="#1b1040" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="46" r="2.6" fill="#ff7bb0" fill-opacity=".6"/><circle cx="50" cy="46" r="2.6" fill="#ff7bb0" fill-opacity=".6"/>${hwGoggles(15.5, 10, 0.62, -6)}</svg>`,
  // กะโหลกสวมแว่นกอกเกิล
  skull: `<svg viewBox="0 0 60 64" style="display:block;width:100%;height:auto"><path d="M30 4C14 4 6 16 6 28C6 36 10 40 16 43L16 54L44 54L44 43C50 40 54 36 54 28C54 16 46 4 30 4Z" fill="#f5f0ff" stroke="#1b1040" stroke-width="3" stroke-linejoin="round"/><ellipse cx="21" cy="31" rx="6" ry="7" fill="#1b1040"/><ellipse cx="39" cy="31" rx="6" ry="7" fill="#1b1040"/><path d="M30 39L26 46L34 46Z" fill="#1b1040"/><path d="M23 54L23 49M30 54L30 49M37 54L37 49" stroke="#1b1040" stroke-width="2.5" stroke-linecap="round"/>${hwGoggles(11, 5, 0.8, -8)}</svg>`,
  // หม้อต้มยาเขียวของ Green Ape
  cauldron: `<svg viewBox="0 0 70 64" style="display:block;width:100%;height:auto"><path d="M10 26C8 48 18 58 35 58C52 58 62 48 60 26Z" fill="#34236b" stroke="#1b1040" stroke-width="3" stroke-linejoin="round"/><path d="M20 58L17 63M50 58L53 63" stroke="#1b1040" stroke-width="4" stroke-linecap="round"/><ellipse cx="35" cy="26" rx="27" ry="7" fill="#1b1040"/><ellipse cx="35" cy="26" rx="23" ry="5" fill="#c6dc3b"/><circle cx="28" cy="15" r="4.2" fill="#c6dc3b" stroke="#1b1040" stroke-width="1.6"/><circle cx="42" cy="10" r="3.2" fill="#c6dc3b" stroke="#1b1040" stroke-width="1.6"/><circle cx="35" cy="4" r="2.4" fill="#c6dc3b" stroke="#1b1040" stroke-width="1.4"/><path d="M16 36C18 44 22 50 28 53" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="3" stroke-linecap="round"/></svg>`,
  moon: `<svg viewBox="0 0 60 60" style="display:block;width:100%;height:auto"><path d="M38 5C22 7 11 20 11 35C11 48 21 56 33 56C41 56 48 52 52 46C38 48 27 38 27 26C27 18 31 10 38 5Z" fill="#ffe066" stroke="#1b1040" stroke-width="3" stroke-linejoin="round"/><circle cx="21" cy="40" r="2.5" fill="#1b1040" fill-opacity=".25"/><circle cx="30" cy="49" r="1.8" fill="#1b1040" fill-opacity=".25"/></svg>`,
  // หมวกแม่มดวางบนตัวอักษร FLOWER MENU
  hat: `<svg viewBox="0 0 64 56" style="display:block;width:100%;height:auto"><path d="M12 42L26 12C28 6 36 2 46 3C41 7 40 12 42 18L52 42Z" fill="#3b2480" stroke="#1b1040" stroke-width="3" stroke-linejoin="round"/><path d="M14 33L50 33L53 41L11 41Z" fill="#ff7518" stroke="#1b1040" stroke-width="2.5" stroke-linejoin="round"/><rect x="28" y="32" width="9" height="9" rx="1.5" fill="#ffe066" stroke="#1b1040" stroke-width="2"/><ellipse cx="32" cy="46" rx="29" ry="7" fill="#3b2480" stroke="#1b1040" stroke-width="3"/></svg>`,
  // เถาวัลย์ป่าห้อยลงมา
  vine: `<svg viewBox="0 0 60 130" style="display:block;width:100%;height:auto"><path d="M30 0C20 20 40 42 28 64C18 84 38 104 30 128" fill="none" stroke="#1b1040" stroke-width="6.5" stroke-linecap="round"/><path d="M30 0C20 20 40 42 28 64C18 84 38 104 30 128" fill="none" stroke="#5fa02b" stroke-width="3.2" stroke-linecap="round"/><g fill="#7bc70f" stroke="#1b1040" stroke-width="2" stroke-linejoin="round"><path d="M0 0C5-9 17-9 22 0C17 9 5 9 0 0Z" transform="translate(30 24) rotate(-25)"/><path d="M0 0C5-9 17-9 22 0C17 9 5 9 0 0Z" transform="translate(29 46) rotate(155)"/><path d="M0 0C5-9 17-9 22 0C17 9 5 9 0 0Z" transform="translate(30 70) rotate(20)"/><path d="M0 0C5-9 17-9 22 0C17 9 5 9 0 0Z" transform="translate(30 92) rotate(160)"/><path d="M0 0C5-9 17-9 22 0C17 9 5 9 0 0Z" transform="translate(30 112) rotate(30)"/></g></svg>`,
  // ตาเรืองแสงในความมืด
  eyes: `<svg viewBox="0 0 50 20" style="display:block;width:100%;height:auto"><ellipse cx="12" cy="10" rx="9" ry="6" fill="#c6dc3b"/><ellipse cx="38" cy="10" rx="9" ry="6" fill="#c6dc3b"/><ellipse cx="12" cy="10" rx="1.8" ry="5" fill="#0f0826"/><ellipse cx="38" cy="10" rx="1.8" ry="5" fill="#0f0826"/></svg>`,
};

// ไอคอนข้างชื่อหัวหมวด
const HW_EMBLEM = {
  sativa: "pumpkin",
  indica: "moon",
  hybrid: "cauldron",
  compound: "skull",
};

const HwArt = ({ name, className, style }) => (
  <span
    aria-hidden="true"
    className={className}
    style={style}
    dangerouslySetInnerHTML={{ __html: HW_SVG[name] }}
  />
);

// เมือกสีเขียวมะนาวหยดลงมา (ทำซ้ำแนวนอน)
const HwDrip = ({ className, size }) => (
  <span
    aria-hidden="true"
    className={className}
    style={{
      backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(HW_DRIP_SVG)}")`,
      backgroundRepeat: "repeat-x",
      backgroundSize: size || "32px 16px",
    }}
  />
);

const HalloweenSky = () => (
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-0 h-[300px] overflow-hidden pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse at 50% 0%, rgba(255,117,24,.2), transparent 62%)",
    }}
  >
    <HwDrip className="absolute top-0 inset-x-0 h-[28px]" size="56px 28px" />
    <span className="hw-fog" />
    <span
      className="hw-eyes absolute"
      style={{ right: "4%", top: "60%", width: 34 }}
    >
      <HwArt name="eyes" className="block" />
    </span>
    <span
      className="hw-eyes absolute hidden md:block"
      style={{ left: "7%", top: "64%", width: 40, animationDelay: "-2s" }}
    >
      <HwArt name="eyes" className="block" />
    </span>
  </div>
);

// ฟักทองที่กดได้ — กดแล้วกระโดดและขึ้นคำว่า BOO!
const HwBooPumpkin = ({ className, tilt, idleDur, idleDelay }) => {
  const [boo, setBoo] = useState(false);
  const pop = () => {
    setBoo(true);
    setTimeout(() => setBoo(false), 1200);
  };
  return (
    <button
      type="button"
      aria-label="Boo!"
      onClick={pop}
      className={`${className} cursor-pointer`}
      style={{ background: "transparent", border: 0, padding: 0 }}
    >
      <span
        className={boo ? "hw-jump block" : "hw-idle block"}
        style={
          boo ? undefined : { animationDuration: idleDur, animationDelay: idleDelay }
        }
      >
        <HwArt
          name="pumpkin"
          className="block"
          style={{ transform: `rotate(${tilt}deg)` }}
        />
      </span>
      {boo && <span className="hw-boo">BOO!</span>}
    </button>
  );
};

const HalloweenHeaderArt = () => (
  <>
    <HwBooPumpkin
      className="absolute top-[99px] md:top-[88px] left-2 md:left-[16%] block w-11 md:w-24"
      tilt={-10}
      idleDur="5.2s"
      idleDelay="0s"
    />
    <HwBooPumpkin
      className="absolute top-[99px] md:top-[88px] right-2 md:right-[16%] block w-11 md:w-24"
      tilt={10}
      idleDur="4.6s"
      idleDelay="-2.3s"
    />
    <HwArt
      name="ghost"
      className="hw-float absolute bottom-2 left-4 md:left-[27%] block w-10 md:w-14"
    />
    <HwArt
      name="vine"
      className="hw-sway absolute top-0 left-[17%] md:left-[28%] block w-8 md:w-16"
    />
    <HwArt
      name="vine"
      className="hw-sway absolute top-0 right-[17%] md:right-[28%] block w-8 md:w-16"
      style={{ transform: "scaleX(-1)" }}
    />
    <HwArt
      name="hat"
      className="absolute block w-8 md:w-11 left-[calc(50%+78px)] md:left-[calc(50%+112px)] top-[72px] md:top-[68px]"
      style={{ transform: "rotate(14deg)" }}
    />
  </>
);

const HalloweenStrip = () => (
  <div
    aria-hidden="true"
    className="max-w-[1400px] mx-auto w-full px-4 my-4 flex items-center gap-3"
  >
    <span className="flex-1 h-px bg-[#c6dc3b]/40" />
    <HwArt name="ghost" className="block w-8" />
    <HwArt name="pumpkin" className="block w-10" />
    <HwArt name="cauldron" className="block w-10" />
    <HwArt name="pumpkin" className="block w-10" />
    <HwArt name="ghost" className="block w-8" />
    <span className="flex-1 h-px bg-[#c6dc3b]/40" />
  </div>
);
// ===== HALLOWEEN END =====
