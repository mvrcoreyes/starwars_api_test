import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import bannerPath from "~/images/star-wars-banner.jpg";

const slogans = [
  "“The Force will be with you. Always.” — Obi-Wan Kenobi",
  "“You can’t stop the change, any more than you can stop the suns from setting.” — Shmi Skywalker",
  "“Hope.” — Leia Organa",
  "“Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.” — Yoda",
];

export function Header() {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="flex flex-col items-center justify-center bg-gray-900 py-8">
      <Link to="/">
        <img
          src={bannerPath}
          alt="Star Wars Banner"
          id="headerBanner"
          className="mb-4 w-64 h-auto"
        />
      </Link>
      <span className="text-color-span">{slogans[currentSloganIndex]}</span>
    </header>
  );
}
