import React from "react";
import dalchiniLogo from "../assets/partners/ZEYA_DALCHINI.png";
import kulchaLogo from "../assets/partners/Kulcha cluture.png";
import nagpalsLogo from "../assets/partners/Nagpal's.png";
import rowdyLogo from "../assets/partners/Rowdy-Cafe-Logo.png";
import pizza9Logo from "../assets/partners/pizza9.png";
import zorkoLogo from "../assets/partners/zorko-new-logo.webp";
import momoLogo from "../assets/partners/momo-nation-cafe.png";

export default function Partners() {
  // Real restaurant partner brands that scaled using MagicScale
  const partners = [
    { name: "Zeya Dalchini", src: dalchiniLogo, alt: "Zeya Dalchini Partner Logo", scaleClass: "scale-125" },
    { name: "Kulcha Culture", src: kulchaLogo, alt: "Kulcha Culture Partner Logo" },
    { name: "Nagpals", src: nagpalsLogo, alt: "Nagpals Partner Logo", multiply: true, scaleClass: "scale-125" },
    { name: "Rowdy Cafe", src: rowdyLogo, alt: "Rowdy Cafe Partner Logo", scaleClass: "scale-125" },
    { name: "Pizza 9", src: pizza9Logo, alt: "Pizza 9 Partner Logo", multiply: true },
    { name: "Zorko", src: zorkoLogo, alt: "Zorko Partner Logo" },
    { name: "Momo Nation Cafe", src: momoLogo, alt: "Momo Nation Cafe Partner Logo", scaleClass: "scale-150" },
  ];

  // We duplicate the list to ensure the marquee is continuous, long enough, and loops seamlessly.
  const scrollingList = [...partners, ...partners, ...partners, ...partners];

  const getLogoClass = (partner) => {
    if (partner.lightLogo) {
      // Cream/off-white logo — render inside a dark translucent pill so it's readable
      return "invert brightness-200";
    }
    if (partner.multiply) {
      // White-background logos — screen blend removes the white bg on dark background
      return "mix-blend-screen brightness-150";
    }
    return "brightness-110";
  };

  return (
    <div className="w-full bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 border-y border-indigo-500/20 py-6 md:py-8 overflow-hidden relative z-20 select-none">
      {/* Edge Fades & Scroll Wrapper */}
      <div className="relative w-full overflow-hidden mask-marquee">
        <div className="flex gap-12 md:gap-16 w-max animate-marquee hover:[animation-play-state:paused] py-2">
          {scrollingList.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 md:h-16 w-36 md:w-44 shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                title={partner.name}
                loading="lazy"
                className={`max-h-full max-w-full object-contain cursor-pointer transition-opacity duration-300 hover:opacity-90 ${getLogoClass(partner)} ${partner.scaleClass || ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
