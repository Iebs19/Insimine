import React, { useEffect, useState } from 'react';
import Marquee from "@/components/magicui/marquee";

function Clients() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Fetching the images from the backend
    fetch('https://localhost:5000/api/clients')
      .then(response => response.json())
      .then(data => setLogos(data))
      .catch(error => console.error('Error fetching client logos:', error));
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="font-nas text-4xl">Clients</h1>
      <Marquee pauseOnHover className="[--duration:60s]">
        {logos.map((data, idx) => (
          <img
            key={idx}
            src={data.image}
            alt={data.name}
            className="w-1/4 h-1/10 m-4"
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default Clients;
