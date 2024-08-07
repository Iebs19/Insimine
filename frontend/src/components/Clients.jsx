import React, { useEffect } from 'react';
import Marquee from "@/components/magicui/marquee";

import Bayer from "../assets/clients/bayer.svg";
import Bel from "../assets/clients/Bel.svg";
import Biomendex from "../assets/clients/biomendex.svg";
import BoehringerIngelheim from "../assets/clients/Boehringer_Ingelheim.svg";
import BungeLimited from "../assets/clients/Bunge_Limited.svg";
import Givaudan from "../assets/clients/givaudan.svg";
import Illumina from "../assets/clients/Illumina.svg";
import LOreal from "../assets/clients/L'Oréal.svg";
import Mars from "../assets/clients/Mars.svg";
import Mithra from "../assets/clients/Mithra.svg";
import Nestle from "../assets/clients/Nestlé.svg";
import Orion from "../assets/clients/Orion.svg";
import Roche from "../assets/clients/Roche.svg";
import SiemensHealthineers from "../assets/clients/Siemens_Healthineers.svg";
import ThermoFisherScientific from "../assets/clients/Thermo_Fisher_Scientific.svg";
import Valio from "../assets/clients/valio.svg";
import Weleda from "../assets/clients/weleda.svg";
import ZealCo from "../assets/clients/ZEAL.CO.svg";

function Clients() {
  const logos = [
    { name: "Bayer", img: Bayer },
    { name: "Bel", img: Bel },
    { name: "Biomendex", img: Biomendex },
    { name: "Boehringer Ingelheim", img: BoehringerIngelheim },
    { name: "Bunge Limited", img: BungeLimited },
    { name: "Givaudan", img: Givaudan },
    { name: "Illumina", img: Illumina },
    { name: "L'Oreal", img: LOreal },
    { name: "Mars", img: Mars },
    { name: "Mithra", img: Mithra },
    { name: "Nestle", img: Nestle },
    { name: "Orion", img: Orion },
    { name: "Roche", img: Roche },
    { name: "Siemens Healthineers", img: SiemensHealthineers },
    { name: "Thermo Fisher Scientific", img: ThermoFisherScientific },
    { name: "Valio", img: Valio },
    { name: "Weleda", img: Weleda },
    { name: "Zeal Co", img: ZealCo },
  ];

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      document.querySelectorAll('.client-logo').forEach(img => {
        img.style.filter = theme === 'dark' ? 'invert(1)' : 'invert(0)';
      });
    };

    handleThemeChange(); // Initial call
    document.documentElement.addEventListener('classlist-change', handleThemeChange);

    return () => {
      document.documentElement.removeEventListener('classlist-change', handleThemeChange);
    };
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="font-nas text-4xl">Clients</h1>
      <Marquee className="[--duration:20s]">
        {logos.map((data, idx) => (
          <img
            key={idx}
            src={data.img}
            alt={data.name}
            className="w-1/4 h-1/10 invert-0 dark:invert"
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default Clients;
