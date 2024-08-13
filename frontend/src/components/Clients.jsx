import React, { useEffect, useState } from 'react';
import Marquee from "@/components/magicui/marquee";

function Clients() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/client')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setLogos(data))
      .catch(error => console.error('Error fetching client logos:', error));
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="font-nas text-4xl">Clients</h1>
      <Marquee pauseOnHover className="[--duration:60s]">
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.image}
            alt={logo.name}
            className="w-[100px] h-[100px] m-4 invert-0 dark:invert"
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default Clients;
