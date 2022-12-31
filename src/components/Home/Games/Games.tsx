import { useState } from "react";
import { useEffect } from "react";
import Compendium from "./Compendium";
import CompendiumItem from "./CompendiumItem";
import { RotatingTriangles } from "react-loader-spinner";

const Games = (props: CompendiumItem) => {
  const [hyruleCompendium, setHyruleCompendium] = useState<Compendium>();
  const [favorite, setFavorite] = useState<string>(localStorage.getItem("favorite") ?? "");

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

  useEffect(() => {
    {favorite && localStorage.setItem("favorite", favorite);}
  },[favorite]);

  const addFavorite = () => {
    setFavorite(props.Entry.toString());
  };
  return (
    <>
      {hyruleCompendium ? (
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
            <button onClick={addFavorite}>{favorite ? "Add to Favorites" : "Delete Favorite"}</button>
            {favorite? (
              <h5 id="FavoriteText">
                Your current Favorite is number: {favorite}
              </h5>
            ) : (
              <h5 id="FavoriteText">You have no current favorite</h5>
            )}
          </div>
        </div>
      ) : (
        <div className="GameLoading">
          <RotatingTriangles colors={["#FFD700", "#FFD700", "#FFD700"]} />
        </div>
      )}
    </>
  );
};

export default Games;
