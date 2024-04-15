import React, { useState, useEffect } from "react";

import "~/styles/index.css";

import { Header } from "~/components/shared/header";

import InfoList from "~/components/infoList";

const CharacterCard: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("https://swapi.dev/api/people");
  }, []);

  const handleTabChange = async (url: string) => {
    fetchData(url);
  };

  return (
    <div className="st-container">
      <Header />
      <h1 className="center">Star Wars characters & movies</h1>

      <div className="flex justify-center space-x-4 mb-8 center main-div">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300 btn"
          onClick={() => handleTabChange("https://swapi.dev/api/people/")}
        >
          <h2>Characters</h2>
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300 btn"
          onClick={() => handleTabChange("https://swapi.dev/api/films")}
        >
          <h2>Movies</h2>
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <InfoList data={data} />
      )}
    </div>
  );
};

export default CharacterCard;
