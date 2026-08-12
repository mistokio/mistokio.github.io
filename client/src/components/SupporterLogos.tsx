import bgaLogo from "../assets/bga_alap_logo.png";
import megvalosult from "../assets/megvalosult.jpg";

export default function SupporterLogos() {
  return (
    <section className="w-full py-12">
      <div className="container flex flex-wrap items-center justify-center gap-10 md:gap-16">
        <img
          src={bgaLogo}
          alt="Bethlen Gábor Alap"
          className="h-48 md:h-56 w-auto object-contain"
        />
        <img
          src={megvalosult}
          alt="Megvalósult a Magyar Kormány támogatásával – Miniszterelnökség Nemzetpolitikai Államtitkárság"
          className="h-40 md:h-48 w-auto object-contain"
        />
      </div>
    </section>
  );
}
