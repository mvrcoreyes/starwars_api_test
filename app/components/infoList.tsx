import React from "react";

interface InfoListProps {
  data: any[];
}

interface ImagePaths {
  films: { [key: string]: string };
  characters: { [key: string]: string };
}

const imagePaths: ImagePaths = {
  films: {
    films1: "/app/images/films/1.jpg",
    films2: "/app/images/films/2.jpg",
    films3: "/app/images/films/3.jpg",
    films4: "/app/images/films/4.jpg",
    films5: "/app/images/films/5.jpg",
    films6: "/app/images/films/6.jpg",
  },
  characters: {
    characters1: "/app/images/characters/1.jpg",
    characters2: "/app/images/characters/2.jpg",
    characters3: "/app/images/characters/3.jpg",
    characters4: "/app/images/characters/4.jpg",
    characters5: "/app/images/characters/5.jpg",
    characters6: "/app/images/characters/6.jpg",
    characters7: "/app/images/characters/7.jpg",
    characters8: "/app/images/characters/8.jpg",
    characters9: "/app/images/characters/9.jpg",
    characters10: "/app/images/characters/10.jpg",
  },
};

const InfoList: React.FC<InfoListProps> = ({ data }) => {
  console.log(data, "HERE");

  return (
    <form className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:flex-nowrap">
      {data.map((item: any, index: number) => (
        <div key={index} className="card-position text">
          {item.name && ( // Si existe la propiedad "name", entonces es un objeto "people"
            <>
              <div className="mb-2">
                <img
                  className="img-card"
                  src={imagePaths.characters[`characters${index + 1}`]}
                  alt={item.title}
                />
                <span className="font-semibold">Name:</span> {item.name}
                <br />
              </div>
              <div className="mb-2">
                <span className="font-semibold">Height:</span> {item.height}
                <br />
              </div>
              <div className="mb-2">
                <span className="font-semibold">Mass:</span> {item.mass}
              </div>
            </>
          )}
          {item.title && ( // Si existe la propiedad "title", entonces es un objeto "films"
            <>
              <div className="mb-2">
                <img
                  className="img-card"
                  src={imagePaths.films[`films${index + 1}`]}
                  alt={item.title}
                />
                <span className="font-semibold">Title:</span> {item.title}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Release Date:</span>{" "}
                {item.release_date}
              </div>
            </>
          )}
        </div>
      ))}
    </form>
  );
};

export default InfoList;
