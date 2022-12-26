import { useState } from "react";
import { useEffect } from "react";
import Compendium from "./Compendium";
import CompendiumItem from "./CompendiumItem";

const Games = (props: CompendiumItem) => {
  const [hyruleCompendium, setHyruleCompendium] = useState<Compendium>();
  const [favorite, setFavorite] = useState("");
  const favoriteItem = localStorage.getItem("favorite");

  useEffect(() => {
    const fetchFunction = async () => {
      let result = await fetch(
        `https://botw-compendium.herokuapp.com/api/v2/entry/${props.Entry}`
      );
      let json: Compendium = await result.json();

      setHyruleCompendium(json);
    };
    fetchFunction();
  });
  return (
    <>
      {hyruleCompendium && (
        <div id="Games">
          <div id="CompendiumTitle">
            <h2>Compendium item of the day:</h2>
            <h2>'{hyruleCompendium.data.name}'</h2>
          </div>
          <img
            id="CompendiumImage"
            src={hyruleCompendium.data.image}
            alt="Compendium Item from The Legend of Zelda Breath of the Wild Copyright Nintendo 2017"
          />
          <div id="CompendiumDescriptionBox">
            <p id="CompendiumDescriptionTitle" className="CompendiumText">
              Description:
            </p>
            <p id="CompendiumDescription" className="CompendiumText">
              {" "}
              {hyruleCompendium.data.description}
            </p>
            <p id="CommonLocationsTitle" className="CompendiumText">
              Common Locations:
            </p>
            {hyruleCompendium.data.common_locations ? (
              <p id="CommonLocations" className="CompendiumText">
                {hyruleCompendium.data.common_locations[0]}{" "}
                {hyruleCompendium.data.common_locations[1]}
              </p>
            ) : (
              <p id="CommonLocations" className="CompendiumText">
                Unknown
              </p>
            )}
            <button
              onClick={() => {
                setFavorite(props.Entry.toString());
                localStorage.setItem("favorite", favorite);
              }}
            >
              Add to Favorites
            </button>
            {favoriteItem ? (
              <h5 id="FavoriteText">
                Your current Favorite is number: {favoriteItem}
              </h5>
            ) : (
              <h5 id="FavoriteText">You have no current favorite</h5>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Games;
